async function EmpInfo() {
	
	let input = document.getElementById("userName").value;
	
	let response = await fetch(`users/${input}`);
	
	let userData = await response.json();
	
	console.log(userData);
	
	document.getElementById("userId").value = userData.id;
	
	document.getElementById("userFirst").value = userData.firstName;
	
	document.getElementById("userLast").value = userData.lastName;
	
	document.getElementById("username").value = userData.username;
	
	document.getElementById("pass").value = userData.password;
	
	document.getElementById("userEmail").value = userData.email;

}
async function dispInfo() {
	
	let input = document.getElementById("userName").value;
	
	let response = await fetch(`users/${input}`);
	
	let userData = await response.json();
	
	console.log(userData);
	
	document.getElementById("userId").value = userData.id;
	
	document.getElementById("userFirst").value = userData.firstName;
	
	document.getElementById("userLast").value = userData.lastName;
	
	document.getElementById("username").value = userData.username;
	
	document.getElementById("pass").value = userData.password;
	
	document.getElementById("userEmail").value = userData.email;

}

async function updateInfo() {
	
	let id = document.getElementById("userId").value;
	
	let fname = document.getElementById("userFirst").value;
	
	let lname = document.getElementById("userLast").value;
	
	let username = document.getElementById("username").value;
	
	let pass = document.getElementById("pass").value;
	
	let email = document.getElementById("userEmail").value;
	
	let user = {id: id, firstName: fname, lastName: lname, username: username, password: pass, email: email, roleId: 1};
	
	console.log(user);
	
	let response = await fetch(`/users`, {
		 method: "PUT",
  		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(user)
	});
	console.log(response.status);
	if(response.status !== 200) {
			
			//if login attempt fails
			alert("Failed to Update");
		}
		
		else {
			
			
			alert("Updated Successfully!") 
		}
		
	  console.log("Request complete! response:", response);
	
}
/*
async function tvlId(){
	
	if(document.getElementById("type").value = "Travel"){

		let type = 1;
		console.log("travel"+type);
	
	}
	else if(document.getElementById("type").value = "Purchases"){
		
		let type = 2;
	
	}
	
	else {
		
		let type = 3;

	}
	
}*/

async function newRemb(){
	{
	
	let amount = document.getElementById("amount").value;
	
	let description = document.getElementById("description").value
	
	let empId = document.getElementById("empId").value
	
	let type = document.getElementById("type").value

	
	
	console.log("Type input:"+type);
	
	let rembInfo = {reimb_amount: amount, reimb_description: description, reimb_author: empId}
	
	console.log(rembInfo);
	
	let response = await fetch(`/reimbursement`, {
		 method: "POST",
  		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(rembInfo)
	});
	
	if(response.status !== 200) {
			
			//if login attempt fails
			alert("Failed to Create New Request");
		}
		
		else {
			
			
			alert("Request Created Successfully!") 
		}
		
//	  console.log("Request complete! response:", response);
	
}
}

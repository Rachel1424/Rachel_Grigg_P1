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

async function newRenb(){
	
	
}

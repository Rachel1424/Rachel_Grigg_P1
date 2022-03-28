async function loginEmp() {
	
	//gets the inputs from the employee's entry and assigns them to variables'
	var username = document.getElementById("username").value;
	
	var password = document.getElementById("password").value;
	
	let data = {username: username, password: password};
	
	console.log(data);
	
	await fetch("/users/login", {
		 method: "POST",
  		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(data)
	}).then(res => {
		console.log(res.status);
		if(res.status !== 200 ) {
			
			//if login attempt fails
			alert("Incorrect Info Please Try again");
		}
		
		else {
			
			// Redirecting to other page.
			window.location = "EmpPg.html"; 
			
		}
		
	  console.log("Request complete! response:", res);
	});
};

function loginMan() {
	
	var manuser = document.getElementById("username2").value;
	
	var manpass = document.getElementById("password2").value;
	
	let data = {username: manuser, password: manpass};
	
	console.log(data);
	
	fetch("/users/login", {
		method: "POST",
		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(data)
	}).then(res => {
		
		if(res.status !== 200) {
			
			//if login attempt fails
			alert("Incorrect Info Please Try again");
		}
		
		else {
			
			// Redirecting to other page.
			window.location = "managerPage.html"; 
		}
		
	  console.log("Request complete! response:", res);
	});
	
}

function logOut() {
	
	window.location.href = "index.html";
}

function rembReq() {
	
	window.location = "NRR.html";
}

function oldReq() {
	
	window.location = "RRR.html";
}

function viewInfo() {
	
	window.location = "CHI.html";
}


function appDeny() {
	
	window.location = "approveDeny.html";
}

function allPend() {
	
	window.location = "VPR.html";
}

function viewAll() {
	
	window.location = "allRequests.html";
}
function viewEmp() {
	
	window.location = "allEmployees.html";
}
function viewID() {
	
	window.location = "reqById.html";
}
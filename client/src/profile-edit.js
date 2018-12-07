// Unique userID for user
let userID = localStorage.getItem("user");

// Database Directory
let userDirectory = firebase.database().ref(`users/${userID}`);

// Update Profile Form
const updateProfile = () => {
	let name = localStorage.getItem("name");
	let gender = localStorage.getItem("gender");
	let birthday = localStorage.getItem("birthday");

	document.getElementById("newName").value = name;

	if (!(birthday == null)) {
		document.getElementById("newBirthday").value = birthday;
	};
	
	if (!(gender == null)) {
		document.getElementById("newGender").value = gender;
	};
}

updateProfile();

const updateLocalStorage = () => {
	localStorage.setItem("name", document.getElementById("newName").value);
	localStorage.setItem("birthday", document.getElementById("newBirthday").value);
	localStorage.setItem("gender", document.getElementById("newGender").value);
}



const makeProfileChanges = () => {
	let updates = {};
	updates["birthday"] = document.getElementById("newBirthday").value;
	updates["name"] = document.getElementById("newName").value;
	updates["gender"] = document.getElementById("newGender").value;

	userDirectory.update(updates);
	updateLocalStorage();
	window.location.href = "./profile.html"
}
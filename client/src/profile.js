// Unique userID for user
let userID = localStorage.getItem("user");

// Database Directory
let userDirectory = firebase.database().ref(`users/${userID}`);

// User Profile from DB
let userProfile;

const getProfileFromDB = () => {
	userDirectory.once('value', (snapshot) => {
		userProfile = snapshot.val();

		let name = userProfile.name;
		let gender = userProfile.gender;
		let birthday = userProfile.birthday;

		document.getElementById("newName").value = name;

		document.getElementById("newBirthday").value = birthday;
		if (!(gender == null)) {
			document.getElementById("newGender").value = gender;
		};
	});
}

getProfileFromDB();


const makeProfileChanges = () => {
	let updates = {};
	updates["birthday"] = document.getElementById("newBirthday").value;
	updates["name"] = document.getElementById("newName").value;
	updates["gender"] = document.getElementById("newGender").value;
	console.log(updates);
	userDirectory.update(updates);
}
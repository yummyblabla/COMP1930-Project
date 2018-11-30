// Unique userID for user
let userID = localStorage.getItem("user");

// Database Directory
let userDirectory = firebase.database().ref(`users/${userID}`);


// Update Name and Last Login Times
const getLoginTime = () => {
	userDirectory.once('value', (snapshot) => {
		let userProfile = snapshot.val();
		addUserProfileToLocalStorage(userProfile);

		document.getElementById("username").innerHTML = userProfile.name;
		let daysSince = Math.floor((userProfile.currentLogin - userProfile.lastLogin) / (24*60*60*1000));

		document.getElementById("timeSince").innerHTML = daysSince;
		updateLastLogin(userProfile.currentLogin);
	})
}

const updateLastLogin = (time) => {
	userDirectory.update({
		"lastLogin": time
	})
};

// Add User Profile to Local Storage
const addUserProfileToLocalStorage = (information) => {
	for (let key in information) {
		localStorage.setItem(key, information[key]);
	}
}

getLoginTime();
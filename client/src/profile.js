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
		updateProfilePage();
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

const updateProfilePage = () => {
	document.getElementById("name").innerHTML = localStorage.getItem("name");
	document.getElementById("birthday").innerHTML = localStorage.getItem("birthday");
	document.getElementById("gender").innerHTML = localStorage.getItem("gender");
}



const getStretchesFromDatabase = () => {
	let userStretches = firebase.database().ref(`users/${userID}/stretches`);

	let stretches = document.getElementById("stretches");

	userStretches.once('value', (snapshot) => {
		let data = snapshot.val();

		for (let key in data) {
			let newDiv = document.createElement("div");

			let stretchDir = document.createElement("h5");
			stretchDir.innerHTML = `${key.toLowerCase().replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())} Stretches`;


			newDiv.appendChild(stretchDir);

			for (let stretch in data[key]) {
				if (data[key][stretch]) {

					let stretchElement = document.createElement("p");
					stretchElement.innerHTML = stretch;
					newDiv.appendChild(stretchElement);
				}
			}
			stretches.appendChild(newDiv);

			let lineBreak = document.createElement("br");
			stretches.appendChild(lineBreak);
		}
	})
}

getStretchesFromDatabase();
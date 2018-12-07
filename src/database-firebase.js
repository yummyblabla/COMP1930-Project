// Initialize firebase database variable to use
const database = firebase.database();

// Add user to the database if it's a new user
const addUserToDatabase = (authResult) => {
	let userDetails = authResult.user;
	let uid = authResult.user.uid;
	let databaseRef = database.ref(`users/${uid}`);

	let newUser = {};
	newUser["name"] = userDetails.displayName;
	newUser["email"] = userDetails.email;
	newUser["lastLogin"] = Date.now();
	newUser["currentLogin"] = Date.now();

	databaseRef.set(newUser, function(error) {
		if (error) {
			console.log(error);
		} else {
			console.log("success");
		}
	});
};

// Save user's information to localstorage
const saveUserToCache = (authResult) => {
	localStorage.setItem("user", authResult);
};
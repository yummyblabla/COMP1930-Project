const database = firebase.database();

const addUserToDatabase = (authResult) => {
	let userDetails = authResult.user;
	let uid = authResult.user.uid;
	let databaseRef = database.ref(`users/${uid}`);

	let newUser = {};
	newUser["name"] = userDetails.displayName;
	newUser["email"] = userDetails.email;

	databaseRef.set(newUser, function(error) {
		if (error) {
			console.log(error);
		} else {
			console.log("success");
		}
	});
};
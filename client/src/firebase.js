// Initialize Firebase
let config = {
	apiKey: "AIzaSyAC-wflHrdeP01ucpszg920IQWmrbeyt-U",
	authDomain: "testproject-47e09.firebaseapp.com",
	databaseURL: "https://testproject-47e09.firebaseio.com",
	projectId: "testproject-47e09",
	storageBucket: "testproject-47e09.appspot.com",
	messagingSenderId: "1049563332536"
};
firebase.initializeApp(config);

let ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiConfig = {
	callbacks: {
		signInSuccessWithAuthResult: function(authResult, redirectUrl) {
			// User successfully signed in.
			// Return type determines whether we continue the redirect automatically
			// or whether we leave that to developer to handle.
			if (authResult.additionalUserInfo.isNewUser) {
				// add user to database
				addUserToDatabase(authResult);
				saveUserToCache(authResult.user.uid);
			} else {
				saveUserToCache(authResult.user.uid);
			}
			updateLoginTime(authResult.user.uid);
			return true;
		},
		uiShown: function() {
			// The widget is rendered.
			// Hide the loader.
			document.getElementById('loader').style.display = 'none';
		}
	},
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow: 'popup',
	signInSuccessUrl: './profile.html',
	signInOptions: [
		// Leave the lines as is for the providers you want to offer your users.
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	]
	// ,
	// // Terms of service url.
	// tosUrl: '<your-tos-url>',
	// // Privacy policy url.
	// privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);

// Change HTML Element display values based on user 
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		let userFeatures = document.getElementsByClassName("userFeatures");
		for (let i = 0; i < userFeatures.length; i++) {
			userFeatures[i].style.display = "flex";
		};
	} else {
		let notLoggedIn = document.getElementsByClassName("notLoggedIn");
		for (let i = 0; i< notLoggedIn.length; i++) {
			notLoggedIn[i].style.display = "flex";
		};
	}
})

const updateLoginTime = (userID) => {
	firebase.database().ref(`users/${userID}/`).update({
		"currentLogin": Date.now()
	})
}

// Log out Function
const logOut = () => {
	firebase.auth().signOut().then(() => {
		localStorage.clear();
	}).catch((error) => {
		console.log("There was an error in logging out.");
	})
};

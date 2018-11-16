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
	signInSuccessUrl: '<url-to-redirect-to-on-success>',
	signInOptions: [
		// Leave the lines as is for the providers you want to offer your users.
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	],
	// Terms of service url.
	tosUrl: '<your-tos-url>',
	// Privacy policy url.
	privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);
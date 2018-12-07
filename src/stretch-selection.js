// Get URL variable of stretches to display
const getURLParams = (url) => {
	let queryString = url ? url.split('?')[1] : window.location.search.slice(1);

	let obj = {};

	if (queryString) {
		let arr = queryString.split('=');
		obj[arr[0]] = arr[1];
	}
	return obj;
}

// Current stretch category to display
let currentStretchDir = getURLParams(window.location.href);
let currentStretches = {};

// Toggle UI
const toggleStretch = (stretch) => {
	currentStretches[stretch] = !currentStretches[stretch];
	if (currentStretches[stretch]) {
		document.getElementById(stretch).classList.add("imageSelected");
	} else {
		document.getElementById(stretch).classList.remove("imageSelected");
	}
}

// Check if there is a session logged in
const checkIfLoggedIn = () => {
	let loggedIn = localStorage.getItem("name");

	if (loggedIn == null) {
		document.getElementById("userFeature").style.display = "none";
		return false;
	}
	return true;
}

// Update database of the stretches checked, if not, make a new url for non-user for next page
const updateDatabase = (location) => {
	if (!checkIfLoggedIn()) {
		let stretch1 = "";
		let stretch2 = "";
		let stretch3 = "";
		for (let key in currentStretches) {
			if (currentStretches[key]) {
				let newString = key;
				newString = `${ currentStretchDir.stretch }=${ newString.replace(/ /g, "_") }`;
				if (stretch1 == "") {
					stretch1 = newString;
				} else if (stretch2 == "") {
					stretch2 = newString;
				} else if (stretch3 == "") {
					stretch3 = newString;
				}
			}
		}
		let stringUrl = "";
		if (stretch1 != "") {
			stringUrl += stretch1;
		} 
		if (stretch2 != "") {
			stringUrl += `&${ stretch2 }`
		} 
		if (stretch3 != "") {
			stringUrl += `&${ stretch3 }`
		}
		window.location.href = `./start-moving.html?${ stringUrl }`;
	} else {
		let userID = localStorage.getItem("user");
		let stretch = currentStretchDir.stretch;
		let update = {};
		update[stretch] = currentStretches;
		firebase.database().ref(`users/${userID}/stretches`).update(update);
		if (location == "userFeature") {
			window.location.href = "./stretch-directory.html";
		} else if (location == "gogo") {
			window.location.href = "./start-moving.html";
		}
	}
}

// Attach and append images to the page based on the category selected
const attachImages = () => {
	let imageLocation = document.getElementById("imageLocation");

	let imageBody = document.createElement("div");
	let imageSrc = [];
	let textDescription = [];

	switch (currentStretchDir.stretch) {
		case "healthyback": 
			let src1 = "https://i.imgur.com/UBSJ1lI.jpg";
			let src2 = "https://i.imgur.com/BJ4MeHK.jpg";
			let src3 = "https://i.imgur.com/oehY7DZ.jpg";
			let text1 = "Exercise ball core stretch";
			let text2 = "Spine alignment and lower back stretch";
			let text3 = "Single leg glut raise - Hip crossover stretch";
			imageSrc.push(src1);
			imageSrc.push(src2);
			imageSrc.push(src3);
			textDescription.push(text1);
			textDescription.push(text2);
			textDescription.push(text3);
			break;
		case "foamroller":
			let src4 = "https://i.imgur.com/PY696gJ.jpg";
			let src5 = "https://i.imgur.com/9dhLCn6.jpg";
			let src6 = "https://i.imgur.com/rgL8Hn9.jpg";
			let text4 = "Hamstring roll";
			let text5 = "Footsole roll";
			let text6 = "Back roller balance";
			imageSrc.push(src4);
			imageSrc.push(src5);
			imageSrc.push(src6);
			textDescription.push(text4);
			textDescription.push(text5);
			textDescription.push(text6);
			break;
		case "yoga":
			let src7 = "https://i.imgur.com/cdKsM2h.jpg";
			let src8 = "https://i.imgur.com/G5fpvw7.jpg";
			let src9 = "https://i.imgur.com/VQNQKGq.jpg";
			let text7 = "Balancing stick with twist";
			let text8 = "Leg high";
			let text9 = "Child pose and seated head to knee";
			imageSrc.push(src7);
			imageSrc.push(src8);
			imageSrc.push(src9);
			textDescription.push(text7);
			textDescription.push(text8);
			textDescription.push(text9);
			break;
		case "pilates":
			let src10 = "https://i.imgur.com/eqP9Qwl.jpg";
			let src11 = "https://i.imgur.com/E0wT9p4.jpg";
			let src12 = "https://i.imgur.com/XNVhpjf.jpg";
			let text10 = "Knee pulls";
			let text11 = "Push up - Leg Raise";
			let text12 = "Hamstring pull - Single leg shoulder plank";
			imageSrc.push(src10);
			imageSrc.push(src11);
			imageSrc.push(src12);
			textDescription.push(text10);
			textDescription.push(text11);
			textDescription.push(text12);
			break;
		case "taichi":
			let src13 = "https://i.imgur.com/cZ4nTGI.jpg";
			let src14 = "https://i.imgur.com/xKfgEGb.jpg";
			let src15 = "https://i.imgur.com/J8jtpwY.jpg";
			let text13 = "Fan through back";
			let text14 = "Commencing";
			let text15 = "White crane spreads its wings";
			imageSrc.push(src13);
			imageSrc.push(src14);
			imageSrc.push(src15);
			textDescription.push(text13);
			textDescription.push(text14);
			textDescription.push(text15);
			break;
		case "core":
			let src16 = "https://i.imgur.com/KUIKiRG.jpg";
			let src17 = "https://i.imgur.com/QxIkKMy.jpg";
			let src18 = "https://i.imgur.com/H4w08Xv.jpg";
			let text16 = "Exercise ball half plank - Assisted side plank";
			let text17 = "Plank and side knee drops";
			let text18 = "Glut raises and leg lifts";
			imageSrc.push(src16);
			imageSrc.push(src17);
			imageSrc.push(src18);
			textDescription.push(text16);
			textDescription.push(text17);
			textDescription.push(text18);
			break;
	}

	for (let i = 0; i < textDescription.length; i++) {
		currentStretches[textDescription[i]] = false;
	}

	for (let i = 0; i < imageSrc.length; i++) {
		// Div container for everything
		let newDiv = document.createElement("div");
		newDiv.id = textDescription[i];
		newDiv.onclick = function() {
			toggleStretch(this.id);
		};
		newDiv.className = "image";

		// Image
		let newImage = document.createElement("IMG");
		newImage.src = imageSrc[i];
		newImage.width = 325;
		newImage.height = 228;
		newImage.className =  "selection";
		newImage.style.margin = "0.5em";

		// Text
		let newText = document.createElement("p");
		newText.innerHTML = textDescription[i];

		// Overlay
		let imageOverlay = document.createElement("div");
		imageOverlay.className = "imageOverlay";

		newDiv.appendChild(newImage);
		newDiv.appendChild(imageOverlay);
		newDiv.appendChild(newText);
		imageBody.appendChild(newDiv);
		
	}
	imageBody.className = "d-flex flex-row text-center";
	imageLocation.appendChild(imageBody);
}


// Get data from the database based on what stretches have already been selected
const getDataFromDatabase = () => {
	let userID = localStorage.getItem("user");
	firebase.database().ref(`users/${userID}/stretches/${currentStretchDir.stretch}`).once('value', (snapshot) => {
		let data = snapshot.val();
		if (data != null) {
			currentStretches = data;

			for (let key in data) {
				if (currentStretches[key]) {
					document.getElementById(key).classList.add("imageSelected");
				} else {
					document.getElementById(key).classList.remove("imageSelected");
				}
			}
		}
		
	});
}

attachImages();
getDataFromDatabase();
checkIfLoggedIn();
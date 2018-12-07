let stretches = {};

const displayVideos = (videoArray) => {
	let yogaArray = [];
	let pilatesArray = [];
	let taichiArray = [];
	let coreArray = [];
	let backArray = [];
	let foamrollerArray = [];

	for (let i = 0; i < videoArray.length; i++) {
		for (let key in videoArray[i]) {
			if (key == "yoga") {
				yogaArray.push(videoArray[i][key]);
			} else if (key == "pilates") {
				pilatesArray.push(videoArray[i][key]);
			} else if (key == "foamroller") {
				foamrollerArray.push(videoArray[i][key]);
			} else if (key == "taichi") {
				taichiArray.push(videoArray[i][key]);
			} else if (key == "healthyback") {
				backArray.push(videoArray[i][key]);
			} else if (key == "core") {
				coreArray.push(videoArray[i][key]);
			}
		}
	}

	let videoLocation = document.getElementById("videos");

	// Add core
	if (coreArray.length != 0) {
		let newDiv = document.createElement("div");
		newDiv.className = "d-flex flex-column";

		let videoDiv = document.createElement("div");
		videoDiv.className = "row col-lg-12 align-content-center";

		let newText = document.createElement("p");
		newText.className = "h1";
		newText.innerHTML = "Core Stretches";
		newDiv.appendChild(newText);

		for (let i = 0; i < coreArray.length; i++) {
			firebase.database().ref(`stretches/core/${ coreArray[i] }`).once('value', (snapshot) => {
				let actualVideoDiv = document.createElement("div");
				actualVideoDiv.className = "text-center col-lg-6";

				let newVideo = document.createElement("iframe");
				newVideo.src = snapshot.val();
				newVideo.width = 450;
				newVideo.height = 300;
				newVideo.frameborder = 0;
				actualVideoDiv.appendChild(newVideo);
				

				let videoDescription = document.createElement("p");
				videoDescription.innerHTML = coreArray[i];
				actualVideoDiv.appendChild(videoDescription);

				videoDiv.appendChild(actualVideoDiv);
			})
		}
		newDiv.appendChild(videoDiv);
		videoLocation.appendChild(newDiv);
	};
	// Add yoga
	if (yogaArray.length != 0) {
		let newDiv = document.createElement("div");
		newDiv.className = "d-flex flex-column";

		let videoDiv = document.createElement("div");
		videoDiv.className = "row col-lg-12 align-content-center";

		let newText = document.createElement("p");
		newText.className = "h1";
		newText.innerHTML = "Yoga Stretches";
		newDiv.appendChild(newText);

		for (let i = 0; i < yogaArray.length; i++) {
			firebase.database().ref(`stretches/yoga/${ yogaArray[i] }`).once('value', (snapshot) => {
				let actualVideoDiv = document.createElement("div");
				actualVideoDiv.className = "text-center col-lg-6";

				let newVideo = document.createElement("iframe");
				newVideo.src = snapshot.val();
				newVideo.width = 450;
				newVideo.height = 300;
				newVideo.frameborder = 0;
				actualVideoDiv.appendChild(newVideo);
				

				let videoDescription = document.createElement("p");
				videoDescription.innerHTML = yogaArray[i];
				actualVideoDiv.appendChild(videoDescription);

				videoDiv.appendChild(actualVideoDiv);
			})
		}
		newDiv.appendChild(videoDiv);
		videoLocation.appendChild(newDiv);
	};
	// Add pilates
	if (pilatesArray.length != 0) {
		let newDiv = document.createElement("div");
		newDiv.className = "d-flex flex-column";

		let videoDiv = document.createElement("div");
		videoDiv.className = "row col-lg-12 align-content-center";

		let newText = document.createElement("p");
		newText.className = "h1";
		newText.innerHTML = "Pilates Stretches";
		newDiv.appendChild(newText);

		for (let i = 0; i < pilatesArray.length; i++) {
			firebase.database().ref(`stretches/pilates/${ pilatesArray[i] }`).once('value', (snapshot) => {
				let actualVideoDiv = document.createElement("div");
				actualVideoDiv.className = "text-center col-lg-6";

				let newVideo = document.createElement("iframe");
				newVideo.src = snapshot.val();
				newVideo.width = 450;
				newVideo.height = 300;
				newVideo.frameborder = 0;
				actualVideoDiv.appendChild(newVideo);
				

				let videoDescription = document.createElement("p");
				videoDescription.innerHTML = pilatesArray[i];
				actualVideoDiv.appendChild(videoDescription);

				videoDiv.appendChild(actualVideoDiv);
			})
		}
		newDiv.appendChild(videoDiv);
		videoLocation.appendChild(newDiv);
	};
	// Add taichi
	if (taichiArray.length != 0) {
		let newDiv = document.createElement("div");
		newDiv.className = "d-flex flex-column";

		let videoDiv = document.createElement("div");
		videoDiv.className = "row col-lg-12 align-content-center";

		let newText = document.createElement("p");
		newText.className = "h1";
		newText.innerHTML = "Taichi Stretches";
		newDiv.appendChild(newText);

		for (let i = 0; i < taichiArray.length; i++) {
			firebase.database().ref(`stretches/taichi/${ taichiArray[i] }`).once('value', (snapshot) => {
				let actualVideoDiv = document.createElement("div");
				actualVideoDiv.className = "text-center col-lg-6";

				let newVideo = document.createElement("iframe");
				newVideo.src = snapshot.val();
				newVideo.width = 450;
				newVideo.height = 300;
				newVideo.frameborder = 0;
				actualVideoDiv.appendChild(newVideo);
				

				let videoDescription = document.createElement("p");
				videoDescription.innerHTML = taichiArray[i];
				actualVideoDiv.appendChild(videoDescription);

				videoDiv.appendChild(actualVideoDiv);
			})
		}
		newDiv.appendChild(videoDiv);
		videoLocation.appendChild(newDiv);
	};
	// Add back
	if (backArray.length != 0) {
		let newDiv = document.createElement("div");
		newDiv.className = "d-flex flex-column";

		let videoDiv = document.createElement("div");
		videoDiv.className = "row col-lg-12 align-content-center";

		let newText = document.createElement("p");
		newText.className = "h1";
		newText.innerHTML = "Back Stretches";
		newDiv.appendChild(newText);

		for (let i = 0; i < backArray.length; i++) {
			firebase.database().ref(`stretches/healthyback/${ backArray[i] }`).once('value', (snapshot) => {
				let actualVideoDiv = document.createElement("div");
				actualVideoDiv.className = "text-center col-lg-6";

				let newVideo = document.createElement("iframe");
				newVideo.src = snapshot.val();
				newVideo.width = 450;
				newVideo.height = 300;
				newVideo.frameborder = 0;
				actualVideoDiv.appendChild(newVideo);
				

				let videoDescription = document.createElement("p");
				videoDescription.innerHTML = backArray[i];
				actualVideoDiv.appendChild(videoDescription);

				videoDiv.appendChild(actualVideoDiv);
			})
		}
		newDiv.appendChild(videoDiv);
		videoLocation.appendChild(newDiv);
	};
	// Add foamroller
	if (foamrollerArray.length != 0) {
		let newDiv = document.createElement("div");
		newDiv.className = "d-flex flex-column";

		let videoDiv = document.createElement("div");
		videoDiv.className = "row col-lg-12 align-content-center";

		let newText = document.createElement("p");
		newText.className = "h1";
		newText.innerHTML = "Foamroller Stretches";
		newDiv.appendChild(newText);

		for (let i = 0; i < foamrollerArray.length; i++) {
			firebase.database().ref(`stretches/foamroller/${ foamrollerArray[i] }`).once('value', (snapshot) => {
				let actualVideoDiv = document.createElement("div");
				actualVideoDiv.className = "text-center col-lg-6";

				let newVideo = document.createElement("iframe");
				newVideo.src = snapshot.val();
				newVideo.width = 450;
				newVideo.height = 300;
				newVideo.frameborder = 0;
				actualVideoDiv.appendChild(newVideo);
				

				let videoDescription = document.createElement("p");
				videoDescription.innerHTML = foamrollerArray[i];
				actualVideoDiv.appendChild(videoDescription);

				videoDiv.appendChild(actualVideoDiv);
			})
		}
		newDiv.appendChild(videoDiv);
		videoLocation.appendChild(newDiv);
	};
}


const displayStretches = () => {
	let stretchesSelected = [];

	for (let key in stretches) {
		for (let stretch in stretches[key]) {
			if (stretches[key][stretch]) {
				let type = stretches[key];
				let stretch1 = {};
				stretch1[key] = stretch;
				stretchesSelected.push(stretch1)
			};
		};
	};
	displayVideos(stretchesSelected);
};

const getInfoFromURL = () => {
	let url = window.location.href;
	let queryString = url ? url.split('?')[1] : window.location.search.slice(1);

	let stretchesSelected = [];

	if (queryString) {
		let arr = queryString.split('&');
		for (let i = 0; i < arr.length; i++) {
			let arrObj = arr[i].split('=');
			let obj = {};
			arrObj[1] = arrObj[1].replace(/_/g, " ");
			obj[arrObj[0]] = arrObj[1];
			stretchesSelected.push(obj);
		}
	}
	displayVideos(stretchesSelected);
}

const getDataFromDatabase = () => {
	if (localStorage.getItem("user")) {
		let userID = localStorage.getItem("user");
			firebase.database().ref(`users/${userID}/stretches/`).once('value', (snapshot) => {
				let data = snapshot.val();

				stretches = data;
				displayStretches();
		});
	} else {
		getInfoFromURL();
	}
	
}

getDataFromDatabase();

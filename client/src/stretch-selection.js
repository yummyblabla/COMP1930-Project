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

// Current stretch to display
let currentStretchDir = getURLParams(window.location.href);

const attachImages = () => {
	let imageLocation = document.getElementById("imageLocation");

	let imageBody = document.createElement("div");
	let imageSrc = [];

	switch (currentStretchDir.stretch) {
		case "healthyback": 
			let src1 = "https://i.imgur.com/UBSJ1lI.jpg";
			let src2 = "https://i.imgur.com/BJ4MeHK.jpg";
			let src3 = "https://i.imgur.com/oehY7DZ.jpg";
			let text1 = "";
			let text2 = "";
			let text3 = "";
			imageSrc.push(src1);
			imageSrc.push(src2);
			imageSrc.push(src3);
			break;
		case "foamroller":
			let src4 = "https://i.imgur.com/PY696gJ.jpg";
			let src5 = "https://i.imgur.com/9dhLCn6.jpg";
			let src6 = "https://i.imgur.com/rgL8Hn9.jpg";
			let text4 = "";
			let text5 = "";
			let text6 = "";
			imageSrc.push(src4);
			imageSrc.push(src5);
			imageSrc.push(src6);
			break;
		case "yoga":
			let src7 = "https://i.imgur.com/cdKsM2h.jpg";
			let src8 = "https://i.imgur.com/G5fpvw7.jpg";
			let src9 = "https://i.imgur.com/VQNQKGq.jpg";
			let text7 = "";
			let text8 = "";
			let text9 = "";
			imageSrc.push(src7);
			imageSrc.push(src8);
			imageSrc.push(src9);
			break;
		case "pilates":
			let src10 = "https://i.imgur.com/eqP9Qwl.jpg";
			let src11 = "https://i.imgur.com/E0wT9p4.jpg";
			let src12 = "https://i.imgur.com/XNVhpjf.jpg";
			let text10 = "";
			let text11 = "";
			let text12 = "";
			imageSrc.push(src10);
			imageSrc.push(src11);
			imageSrc.push(src12);
			break;
		case "taichi":
			let src13 = "https://i.imgur.com/cZ4nTGI.jpg";
			let src14 = "https://i.imgur.com/xKfgEGb.jpg";
			let src15 = "https://i.imgur.com/J8jtpwY.jpg";
			let text13 = "";
			let text14 = "";
			let text15 = "";
			imageSrc.push(src13);
			imageSrc.push(src14);
			imageSrc.push(src15);
			break;
		case "core":
			let src16 = "https://i.imgur.com/KUIKiRG.jpg";
			let src17 = "https://i.imgur.com/QxIkKMy.jpg";
			let src18 = "https://i.imgur.com/H4w08Xv.jpg";
			let text16 = "";
			let text17 = "";
			let text18 = "";
			imageSrc.push(src16);
			imageSrc.push(src17);
			imageSrc.push(src18);
			break;
	}
	console.log(imageBody);
	for (let i = 0; i < imageSrc.length; i++) {
		let newImage = document.createElement("IMG");
		newImage.src = imageSrc[i];
		newImage.width = 325;
		newImage.height = 228;
		imageBody.appendChild(newImage);
	}
	imageBody.className = "d-flex flex-row";
	imageLocation.appendChild(imageBody);
}

attachImages();
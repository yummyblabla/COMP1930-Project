let stretches = {};

const displayStretches = () => {
	let stretchesSelected = [];

	for (let key in stretches) {
		for (let stretch in stretches[key]) {
			if (stretches[key][stretch]) {
				stretchesSelected.push(stretch);
			};
		};
	};

	
};

const getDataFromDatabase = () => {
	let userID = localStorage.getItem("user");
	firebase.database().ref(`users/${userID}/stretches/`).once('value', (snapshot) => {
		let data = snapshot.val();

		stretches = data;

		displayStretches();
	});
}




getDataFromDatabase();

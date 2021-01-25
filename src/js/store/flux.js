const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			details: {}
		},
		actions: {
			addFavorite: newItem => {
				var storeCopy = getStore();
				var updateFavorites = storeCopy.favorites.concat(newItem);

				setStore({ favorites: updateFavorites });
			},
			DeleteFavorite: newItem => {
				var storeCopy = getStore();
				var newFavorites = storeCopy.favorites.find((element, index) => {
					return element != "Darth Vader";
				});

				setStore({ favorites: newFavorites });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error("error");
						}

						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ characters: responseAsJson.results });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				fetch("https://swapi.dev/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error("error");
						}

						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ planets: responseAsJson.results });
						console.log(responseAsJson);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setDetails: item => {
				setStore({ details: item });
			}
		}
	};
};

export default getState;

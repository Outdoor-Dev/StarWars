import React, { useState, useEffect } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([
		{
			image:
				"https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20091030151422",
			uid: "1",
			name: "Luke Skywalker",
			url: "https://www.swapi.tech/api/people/1"
		},
		{
			image: "https://pbs.twimg.com/profile_images/726538115196792833/UjIQA2Gw_400x400.jpg",
			uid: "2",
			name: "C-3PO",
			url: "https://www.swapi.tech/api/people/2"
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNVLeR4T4DCVvjwOndi-8v_ER99MUZR8qJQ&usqp=CAU",
			uid: "4",
			name: "Darth Vader",
			url: "https://www.swapi.tech/api/people/4"
		},
		{
			image: "https://cdn.robgreer.com/aa6429a9-d544-4754-8263-4285c19d9c46/t/1024/26c8n5h6/mike-senna-r2d2.jpg",
			uid: "3",
			name: "R2-D2",
			url: "https://www.swapi.tech/api/people/3"
		},
		{
			image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
			uid: "5",
			name: "Leia Organa",
			url: "https://www.swapi.tech/api/people/5"
		},

		{
			image:
				"https://static.wikia.nocookie.net/swfanon/images/9/94/OwenLars.jpg/revision/latest?cb=20080202051733",
			uid: "6",
			name: "Owen Lars",
			url: "https://www.swapi.tech/api/people/6"
		},
		{
			image: "https://theartmad.com/wp-content/uploads/2015/06/Beru-Lars-2.jpg",
			uid: "7",
			name: "Beru Whitesun lars",
			url: "https://www.swapi.tech/api/people/7"
		},
		{
			image:
				"https://static.wikia.nocookie.net/worldsgreatestheroes/images/9/97/Biggs_Darklighter.jpg/revision/latest/scale-to-width-down/340?cb=20140501151546",
			uid: "9",
			name: "Biggs Darklighter",
			url: "https://www.swapi.tech/api/people/9"
		},
		{
			image:
				"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F01%2Fthe-mandalorian-2000.jpg&q=85",
			uid: "8",
			name: "R5-D4",
			url: "https://www.swapi.tech/api/people/8"
		},
		{
			image:
				"https://static.wikia.nocookie.net/worldsgreatestheroes/images/9/91/Obi-Wan_Headshot.jpg/revision/latest/scale-to-width-down/340?cb=20140512143941",
			uid: "10",
			name: "Obi-Wan Kenobi",
			url: "https://www.swapi.tech/api/people/10"
		}
	]);
	const [planets, setPlanets] = useState([
		{
			image:
				"https://media.cntraveler.com/photos/5727696bb161ad8b31235293/16:9/w_2560%2Cc_limit/GettyImages-143687829-tunisia.jpg",
			uid: "1",
			name: "Tatooine",
			url: "https://www.swapi.tech/api/planets/1"
		},
		{
			image: "https://lumiere-a.akamaihd.net/v1/images/dagobah_1ab566e6.jpeg?region=38%2C0%2C598%2C299",
			uid: "5",
			name: "Dagobah",
			url: "https://www.swapi.tech/api/planets/5"
		},
		{
			image:
				"https://static.wikia.nocookie.net/starwars/images/c/cf/TempleofYavin4-AoRCR.png/revision/latest?cb=20160723033450",
			uid: "3",
			name: "Yavin IV",
			url: "https://www.swapi.tech/api/planets/3"
		},
		{
			image:
				"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C780",
			uid: "2",
			name: "Alderaan",
			url: "https://www.swapi.tech/api/planets/2"
		},
		{
			image:
				"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg",
			uid: "4",
			name: "Hoth",
			url: "https://www.swapi.tech/api/planets/4"
		},
		{
			image:
				"https://i0.wp.com/thegamefanatics.com/wp-content/uploads/2016/06/star-wars-battlefront-bespin-dlc-update-needs-content-that-should-have-been-there-at-la-943519.jpg?fit=1936%2C1090&ssl=1",
			uid: "6",
			name: "Bespin",
			url: "https://www.swapi.tech/api/planets/6"
		},
		{
			image: "https://miro.medium.com/max/2560/1*iqaur5uhY90F2rLPIv-lvQ.jpeg",
			uid: "7",
			name: "Endor",
			url: "https://www.swapi.tech/api/planets/7"
		},
		{
			image:
				"https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
			uid: "8",
			name: "Naboo",
			url: "https://www.swapi.tech/api/planets/8"
		},
		{
			image: "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C96%2C1536%2C768",
			uid: "9",
			name: "Coruscant",
			url: "https://www.swapi.tech/api/planets/9"
		},
		{
			image:
				"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780",
			uid: "10",
			name: "Kamino",
			url: "https://www.swapi.tech/api/planets/10"
		}
	]);

	return (
		<>
			<video
				src="https://v.ftcdn.net/04/01/74/36/700_F_401743657_N1QXKB9IDaiHWnMPem27b1LOgF8Zhycv_ST.mp4"
				loop
				autoPlay
			/>
			<div className="container-fluid">
				{" "}
				<div className="characters ">
					<h1 className="text-white ml-5">Characters</h1>
					<div className="character-card d-flex align-content  flex-wrap ">
						{characters.map((value, index) => {
							return <CharacterCard key={index} character={value} />;
						})}
					</div>
				</div>
				<div className="planets">
					<h1 className="text-white ml-5">Planets</h1>

					<div className="planets-card d-flex align-content-stretch flex-wrap">
						{planets.map((value, index) => {
							return <PlanetCard key={index} planet={value} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

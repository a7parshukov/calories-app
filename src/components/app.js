import React from "react";

import InputFood from './input-food';
import InformationEaten from './information-eaten';

const App = () => {

	const foodList = [
		{ foodName: "Яблоко", foodWeight: 100, id: 1 },
		{ foodName: "Овсяная каша", foodWeight: 45, id: 2 },
		{ foodName: "Хлеб белый", foodWeight: 50, id: 3 },
		{ foodName: "Курица филе", foodWeight: 75, id: 4 },
		{ foodName: "Яйцо вареное С0", foodWeight: 120, id: 5 },
	];

	return (
		<div>
			<InputFood />
			<br />
			<InformationEaten list={foodList} />
		</div>
	)
}

export default App;
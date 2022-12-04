import React from "react";

import InputValue from "./input-value";

const InputFood = () => {
	return (
		<div>
			<h2>Внести продукт</h2>
			<InputValue placeholder={"Название еды"} />
			<InputValue placeholder={"Вес, гр."} />
			<button>Add</button>
		</div>
	)
}

export default InputFood;
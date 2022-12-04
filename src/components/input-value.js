import React from "react";

const InputValue = ({ placeholder }) => {
	return (
		<div>
			<label>
				<input type="text" placeholder={placeholder}></input>
			</label>
		</div>
	)
}

export default InputValue;
import React from "react";

const InformationEaten = ({ list }) => {

	const items = list.map((elem) => {
		return (
				<tr key={elem.id}>
					<td>{elem.foodName}</td>
					<td>{elem.foodWeight}</td>
				</tr>
		)
	});

	return (
		<div>
			<h2>Таблица употребленной еды</h2>
			<table>
				<thead>
					<tr>
						<th>Наименование</th>
						<th>Количество, гр.</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
			</table>
		</div>
	)
}

export default InformationEaten;
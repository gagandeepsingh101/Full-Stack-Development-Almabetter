import React, { useState } from "react";

const DropDownMenu = () => {
	const [activeOption, setActiveOption] = useState("Nothing select");
	return (
		<div>
        <h1>DropDown Menu</h1>
			Select an Option
			<select
				name="Option"
				onChange={(e) => {
					setActiveOption(e.target.value);
				}}>
				<option value="Option 1">Option 1</option>
				<option value="Option 2">Option 2</option>
				<option value="Option 3">Option 3</option>
			</select>
			<p>Select an Option is {activeOption}</p>
		</div>
	);
};

export default DropDownMenu;

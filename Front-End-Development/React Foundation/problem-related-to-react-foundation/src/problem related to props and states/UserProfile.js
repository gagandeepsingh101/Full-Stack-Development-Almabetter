import React, { useState } from "react";
import UserInfo from "./UserInfo";

const UserProfile = () => {
	const [userData, setUserData] = useState({
		name: "shubham",
		age: 23,
		email: "shubham@123",
	});
	return (
		<div>
			<h1>User Profile</h1>
			<UserInfo
				name={userData.name}
				age={userData.age}
				email={userData.email}></UserInfo>
		</div>
	);
};

export default UserProfile;

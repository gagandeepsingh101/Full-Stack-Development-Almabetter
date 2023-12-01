import React, { useEffect, useState } from "react";

const TimerFunctionComponent = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timerID = setInterval(() => {
			setCounter(counter + 1);
		}, 1000);
		return () => {
			clearInterval(timerID);
		};
	});

	return <div>
    <h1>Function Component with Lifecycle Methods</h1>
    <p>Timer: {counter} seconds</p></div>;
};

export default TimerFunctionComponent;

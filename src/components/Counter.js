import React, { useState, useEffect } from 'react';
import ComponentLayout from './ComponentLayout';

function Counter() {
	// Declare a new state variable, which we'll call "count"
	// Only argument provided to `useState`, is the initialState.
	const [count, setCount] = useState(0);

	// `useEffect` serves the same purpose as componentDidMount, componentDidUpdate, 
	// and componentWillUnmount in React classes, but unified into a single API.
	useEffect(() => {
		document.title = `You clicked ${count} times`;
		// Runs the effects after every render.   
	})

	return (
		<ComponentLayout headerText="Counter">
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</ComponentLayout>
	);
}

export default Counter;
import React, { useState } from "react";

const ToDOComponent = () => {
	const [todoList, setTodoList] = useState([]);
	function addTask(e) {
		const taskValue = e.target.parentElement.querySelector("input").value;
		setTodoList([
			...todoList,
			{
				task: taskValue,
				id: Math.floor(Math.random() * 1000),
				completed: false,
			},
		]);

		e.target.parentElement.querySelector("input").value = "";
	}
	function deleteTask(e) {
		const deletedID = e.target.parentElement.getAttribute("data-id");
		const filteredList = todoList.filter(
			(item) => item.id.toString() !== deletedID
		);
		setTodoList(filteredList);
	}

	function checkCompleteTask(e) {
		const completedTaskID = e.target.parentElement.getAttribute("data-id");
		const newTodoList=todoList.filter((item) =>{
			if(item.id.toString() ===completedTaskID){
				item.completed=!item.completed
			}
			return item
		} );
		setTodoList(newTodoList)
	}
	return (
		<div>
			<h1>My To Do App</h1>
			<div>
				<input type="text" />
				<button onClick={(e) => addTask(e)}>Add</button>
			</div>
			<div>
				{todoList.length === 0 && <p>No Task Added</p>}
				{todoList.map((item) => (
					<div key={item.id} data-id={item.id}>
						<input type="checkbox" onChange={(e) => checkCompleteTask(e)} />
						<span>{item.task}</span>
						<button onClick={(e) => deleteTask(e)}>Delete</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ToDOComponent;

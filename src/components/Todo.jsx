import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Flex, Button, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { addTodo } from "../redux/slices/todoSlice";

export default function Todo() {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState("");

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleSubmit = () => {
		dispatch(addTodo(todo));
		setTodo("");
	};

	return (
		<Container>
			<br />
			<form onSubmit={handleSubmit}>
				<Flex>
					<Input
						type="text"
						placeholder="Todo"
						onChange={handleChange}
						value={todo}
					/>
					<Button onClick={handleSubmit}>
						Add &nbsp; <AddIcon />
					</Button>
				</Flex>
			</form>
			<br />
		</Container>
	);
}

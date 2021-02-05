import React from "react";
import { useSelector } from "react-redux";
import { Box, Center, Text, Flex } from "@chakra-ui/react";

export default function TodoList() {
	const todoItems = useSelector((state) => state.todos.todoList);
	return (
		<>
			{todoItems.map((todo) => (
				<>
					<br />
					<Center>
						<Box p={5} bg="#e9fffd" key={todo.key} width={"20%"}>
							<Flex>
								<Text>{todo.value}</Text>
							</Flex>
						</Box>
					</Center>
				</>
			))}
		</>
	);
}

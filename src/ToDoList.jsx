
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TodoForm from "./ToDoForm";

import ListItemComponent from "./ListItemComponent";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todo"));
    if (!data) return [];
    return data;
  };


export default function ToDoList() {
    
	const [todo, setTodo] = useState(getInitialData);
    
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
      }, [todo]);
    
	const remove = (id) => {
		setTodo((prevTodos) => {
			return prevTodos.filter((t) => t.id !== id);
		});
	};
	const toggle = (id) => {
		setTodo((prev) => {
			return prev.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			});
		});
	};
    const addToDo=(text)=>{
        setTodo((prev)=>{
            return [...prev , {id:crypto.randomUUID(),text:text,completed:false}]
        })
    }
	return (
		<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			{todo.map((todo) => {
				return (
					<ListItemComponent
						todo={todo}
						key={todo.id}
						remove={() => {
							remove(todo.id);
						}}
                        toggle={toggle}
					/>
				);
			})}
            <TodoForm addTodo={addToDo}/>
		</List>
	);
}

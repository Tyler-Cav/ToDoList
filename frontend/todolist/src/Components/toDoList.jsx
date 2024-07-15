import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
// import TodoItem from './toDoItem';
// import todoForm from './toDoForm';

export default function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos();
        console.log('hi')
    }, [])

    const fetchTodos = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/todos')
        console.log(response.data)
    }

    return (
        <h1>test</h1>
    )
}

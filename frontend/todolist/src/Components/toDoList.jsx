import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './toDoItem';
import todoForm from './toDoForm';

export default function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = async () => {
        const response = await axios.get('https://localhost:5000/api/todos')
        setTodos(response.data)
    }



}

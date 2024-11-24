import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v4 as uuidv4} from 'uuid';

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
};

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: uuidv4(), title: 'HTML&CSS', isDone: true},
        {id: uuidv4(), title: 'JS', isDone: true},
        {id: uuidv4(), title: 'ReactJS', isDone: false},
        {id: uuidv4(), title: 'Redux', isDone: false},
        {id: uuidv4(), title: 'Typescript', isDone: false},
        {id: uuidv4(), title: 'RTK query', isDone: false},
    ]);

    const removeTask = (taskId: string) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodolist = tasks

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(task => !task.isDone)
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;

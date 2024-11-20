import React from 'react'
import './App.css'
import {Todolist} from './Todolist'
import {v4 as uuidv4} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    const tasks1 = [
        {id: uuidv4(), title: 'HTML&CSS', isDone: true},
        {id: uuidv4(), title: 'JS', isDone: true},
        {id: uuidv4(), title: 'ReactJS', isDone: false},
        {id: uuidv4(), title: 'Redux', isDone: false},
        {id: uuidv4(), title: 'Typescript', isDone: false},
        {id: uuidv4(), title: 'RTK query', isDone: false},
    ]

    const tasks2: TaskType[] = [];

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} date={'30.01.2024'}/>
            <Todolist title="Songs" tasks={tasks2}/>
        </div>
    )
}

export default App
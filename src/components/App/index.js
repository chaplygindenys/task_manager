import React, {useState} from 'react';
import './style.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faSquare} from "@fortawesome/free-regular-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

let initTasks = [
    {id: 1, title: "Open your eyes", done: true, delete: true},
    {id: 2, title: "Check smartphone", done: true, delete: false},
    {id: 3, title: "Brush your teeth", done: false, delete: true}
];

const Index = () => {
    const [newTask, setNewTask] = useState(''); //this.state = {value: ''};
    const [tasks, setTasks] = useState(initTasks);

    const changeTaskStatus = el => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, done: !item.done} : item));
    };
    const changeTaskStatusDelete = el => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, delete: !item.delete} : item));
    };
    const enterNewTask = (e) => {
        /*  event.preventDefault();*/
        setNewTask(e.target.value);
    } //handleChange(event) {this.setState({value: event.target.value});}


    const addNewTask = () => {
        setTasks([
            ...tasks, {id: tasks.length + 1, title: newTask, done: false}  //es6 конкотенация в конекц  ...старх,
        ]);
        //todo clear input

        setNewTask('');
    }


    return (
        <>
            < div className={'container'}>
                <div className={'box'}>
                    <input type="text" value={newTask} onChange={enterNewTask}/>
                    <button onClick={addNewTask}>Add new task</button>
                </div>

                <div className={'box'}>

                    <ul className={'tasks-list'}>
                        {tasks.map(el => (
                            <li key={el.id} className={el.delete ? 'task-delete' : ''}>
                                <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare}
                                                 onClick={() => changeTaskStatus(el)}/>
                                {el.title}
                                <FontAwesomeIcon icon={faTrash} onClick={() => changeTaskStatusDelete(el)}/>
                            </li>)
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
        ;
}

export default Index;

import React, {useState} from 'react';
import './style.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faSquare} from "@fortawesome/free-regular-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

let initTasks = [
    {id: 1, title: "Open your eyes", done: true, delete: true},
    {id: 2, title: "Check smartphone", done: true, delete: false},
    {id: 3, title: "Brush your teeth", done: false, delete: false}
];

const Index = () => {
    const [newTask, setNewTask] = useState(''); //this.state = {value: ''};
    const [tasks, setTasks] = useState(initTasks);
    const [activeTab, setActiveTab] = useState('all');

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
            ...tasks,
            {id: tasks.length + 1, title: newTask, done: false}  //es6 конкотенация в конекц  ...старх,
        ]);
        //todo clear input

        setNewTask('');
    }




    return (
        <>
            < div className={'container'}>
                <div className="box">
                    <ul className="tabs-select">
                        <li className="tab-select-item" onClick={()=>setActiveTab('all')}>All</li>
                        <li className="tab-select-item" onClick={()=>setActiveTab('todo')}>ToDo</li>
                        <li className="tab-select-item" onClick={()=>setActiveTab('done')}>Done</li>
                        <li className="tab-select-item" onClick={()=>setActiveTab('delete')}>Delete</li>
                    </ul>
                </div>


                <div className={'box'}>
                    <input type="text" value={newTask} onChange={enterNewTask}/>
                    <button onClick={addNewTask}>Add new task</button>
                </div>
                {
                    activeTab ==='all'? (
                        <div className={'box'}>

                            <ul className={'tasks-list all'}>
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

                    ) : null

                }
                {
                    activeTab ==='todo'? (
                <div className={'box'}>

                    <ul className={'tasks-list todo'}>
                        {tasks.filter(el => !el.done && !el.delete).map(el => (
                            <li key={el.id} className={el.delete ? 'task-delete' : ''}>
                                <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare}
                                                 onClick={() => changeTaskStatus(el)}/>
                                {el.title}
                                <FontAwesomeIcon icon={faTrash} onClick={() => changeTaskStatusDelete(el)}/>
                            </li>)
                        )}
                    </ul>
                </div>

                    ) : null

                }

                {
                    activeTab ==='done'? (
                <div className={'box'}>

                    <ul className={'tasks-list done'}>
                        {tasks.filter(el => el.done && !el.delete).map(el => (
                            <li key={el.id} className={el.delete ? 'task-delete' : ''}>
                                <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare}
                                                 onClick={() => changeTaskStatus(el)}/>
                                {el.title}
                                <FontAwesomeIcon icon={faTrash} onClick={() => changeTaskStatusDelete(el)}/>
                            </li>)
                        )}
                    </ul>
                </div>

                ) : null

                }
                {
                    activeTab ==='delete'? (

                <div className={'box'}>

                    <ul className={'tasks-list delete'}>
                        {tasks.filter(el => el.delete).map(el => (
                            <li key={el.id} className={el.delete ? 'task-delete' : ''}>
                                <FontAwesomeIcon icon={el.done ? faCheckSquare : faSquare}
                                                 onClick={() => changeTaskStatus(el)}/>
                                {el.title}
                                <FontAwesomeIcon icon={faTrash} onClick={() => changeTaskStatusDelete(el)}/>
                            </li>)
                        )}
                    </ul>
                </div>

                ) : null

                }
            </div>
        </>
    )
        ;
}

export default Index;

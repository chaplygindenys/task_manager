import React, {useState} from 'react';


let initTasks = [
    {id: 1, title: "Open your eyes", done: true},
    {id: 2, title: "Check smartphone", done: false},
    {id: 3, title: "Brush your teeth", done: true}
];

const Index = () => {
    const [newTask, setNewTask] = useState(''); //this.state = {value: ''};
    const [tasks, setTasks] = useState(initTasks);

    const changeTaskStatus = el => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, done: !item.done} : item));
    };

    const enterNewTask = (e) => {
      /*  event.preventDefault();*/
        setNewTask(e.target.value);
    } //handleChange(event) {this.setState({value: event.target.value});}


    const addNewTask = () => {
       setTasks([
               ...tasks,{id: tasks.length+1, title:newTask, done:false}  //es6 конкотенация в конекц  ...старх,
           ]);
       //todo clear input

        setNewTask('');
    }


    return (
        <>
            <div >
                <input type="text" value={newTask} onChange={enterNewTask} />
                <button  onClick={addNewTask} >Add new task</button>
            </div>



            <ul className={'task-list'}>
                {tasks.map(el => <li key={el.id} className={el.done ? 'task-done' : ''}
                                     onClick={() => changeTaskStatus(el)}>{el.title}</li>)}
            </ul>

        </>
    );
}

export default Index;

import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import ContentComponent from "../ContentComponent";

let initTasks = [];

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background: ${props => props.containerBgColor};
   justify-content: center;
    
`;


const DiviceWrapper =styled.div`
    box-sizing: border-box;
    height: 800px;
    width: 375px;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: 2px 12px 20px 2px rgba(0, 0, 0, 0.25);
    border: 4px solid ${props => props.deviceBorderColor};
    .device{
      //padding: 20px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      background: ${props => props.deviceBgColor};
      display: flex;
      flex-direction: column;
      /* overflow-y: scroll;*/
      position: relative;
    }
`;
const Index = () => {
    const [newTask, setNewTask] = useState(''); //this.state = {value: ''};
    const [tasks, setTasks] = useState(initTasks);
    const [activeTab, setActiveTab] = useState('all');
    const [addFormOpen, setAddFormOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTasks([
                {id: 1, title: "Wake up", done: true, delete: true},
                {id: 2, title: "Open your eyes", done: true, delete: true},
                {id: 3, title: "Go to bath", done: true, delete: true},
                {id: 4, title: "Check smartphone", done: false, delete: false},
                {id: 5, title: "Brush your teeth", done: false, delete: false}
            ])
            console.log('setTimeout')

        }, 1000);
    }, [])

    const changeTaskStatus = el => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, done: !item.done} : item));
    };
    const changeTaskStatusDelete = el => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, delete: !item.delete} : item));
    };

    const enterNewTask = (e) => {
        e.preventDefault();
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
    const keyBoardHandler = (e) => {
        if (e.keyCode === 13) {
            addNewTask();
            setNewTask("");
            setAddFormOpen(false);
        }
        if (e.keyCode === 27) {
            setNewTask("");
            setAddFormOpen(false);
        }
    }

    return (
        <Container
            containerBgColor='#eaeaea'>
            <DiviceWrapper
                deviceBorderColor='#fff'
                deviceBgColor='#f3f3f3'
            >
                <div className="device">
                    <HeaderComponent/>
                    < ContentComponent
                        tasks={tasks}
                        setActiveTab={setActiveTab}
                        changeTaskStatus={changeTaskStatus}
                        changeTaskStatusDelete={changeTaskStatusDelete}
                        activeTab={activeTab}

                    />
                     <FooterComponent
                            setAddFormOpen={setAddFormOpen}
                            addFormOpen={addFormOpen}
                            enterNewTask={enterNewTask}
                            keyBoardHandler={keyBoardHandler}
                            newTask={newTask}
                        />
                </div>

            </DiviceWrapper>
        </Container>
    )
        ;
}
export default Index;

import React, {useContext} from "react";
import styled from "styled-components";
import TasksListComponent from "../TasksListComponent";
import TaskTabComponent from "../TaskTabComponent";
import {ThemesContext} from "../../Themes/ThemesContext";

const TabWrapper = styled.div`
    margin: 8px 0;
    min-height: 90px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: ${props => props.tabWrapperBgColor};
    box-shadow: 0 2px 6px 0 ${props => props.tabWrapperShadowColor};
    cursor: pointer;
    transition: transform .3s;
    &.active{
      cursor: default;
    }

    &:hover:not(.active){
      transform: scale(1.04);
    }
`;

const TabComponent = (
    {
        tasks,
        setActiveTab,
        changeTaskStatus,
        changeTaskStatusDelete,
        activeTab,
        nameTab,
        tabTitle,
        tabDescription,
        taskListHeight,
        selectedThemes

    }) => {

    const {themes} =useContext(ThemesContext);
        return(


    <TabWrapper

        tabWrapperShadowColor={themes.tabWrapperShadowColor}
        tabWrapperBgColor={themes.tabWrapperBgColor}
        className={(activeTab === nameTab) ? 'active' : ''}
                onClick={() => setActiveTab(nameTab)}


    >
        <TaskTabComponent
           tabTitle={tabTitle}
           tabDescription={tabDescription}
           tasks={tasks}
           setActiveTab={setActiveTab}
           nameTab={nameTab}
        />

        <TasksListComponent
            changeTaskStatus={changeTaskStatus}
            changeTaskStatusDelete={changeTaskStatusDelete}
            tasks={tasks}
            activeTab={activeTab}
            nameTab={nameTab}
            taskListHeight={taskListHeight}


        />
    </TabWrapper>
        )
    };
export default TabComponent;
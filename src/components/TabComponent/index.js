import React from "react";
import styled from "styled-components";
import TasksListComponent from "../TasksListComponent";
import TaskTabComponent from "../TaskTabComponent"

const TabWrapper = styled.div`
    margin: 8px 0;
    min-height: 90px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: ${props => props.tabWraperBgColor};
    box-shadow: 0px 2px 6px 0px ${props => props.tabWraperShadowColor};
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
        tasks, setActiveTab, changeTaskStatus,
        changeTaskStatusDelete, activeTab, nameTab, tabTitle,
        tabDescription, taskListHeight
    }) => (
    <TabWrapper className={(activeTab === nameTab) ? 'active' : ''}
                onClick={() => setActiveTab(nameTab)}
                tabWraperBgColor={'#fff'}
                tabWraperShadowColor={'rgba(0, 0, 0, 0.125)'}
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
);
export default TabComponent;
import React from "react";
import styled from "styled-components";
import TasksListComponent from "../TasksListComponent";
import TaskTabComponent from "../TaskTabComponent";

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

        tabWrapperBgColor,
        tabWrapperShadowColor,

        liBorderBottomColor,
        liTaskTextColor,
        liTaskTextRemovedColor,
        liTaskTextDoneColor

    }) => (
    <TabWrapper
        className={(activeTab === nameTab) ? 'active' : ''}
                onClick={() => setActiveTab(nameTab)}

                tabWrapperBgColor={tabWrapperBgColor}
                tabWrapperShadowColor={tabWrapperShadowColor}
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

            liBorderBottomColor={liBorderBottomColor}
            liTaskTextColor={liTaskTextColor}
            liTaskTextRemovedColor={liTaskTextRemovedColor}
            liTaskTextDoneColor={liTaskTextDoneColor}

        />
    </TabWrapper>
);
export default TabComponent;
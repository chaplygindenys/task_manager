import React from "react";
import TabComponent from "../TabComponent";
import styled from "styled-components";
import TasksListComponent from "../TasksListComponent";

const taskHeight = 50;
const ContentWrapper = styled.div`
  padding: 0 20px;
  flex: 1;

`;

const ContentComponent = (
    {
        tasks,
        setActiveTab,
        changeTaskStatus,
        changeTaskStatusDelete,
        activeTab,
        tabWrapperBgColor,
        tabWrapperShadowColor,

        liBorderBottomColor,
        liTaskTextColor,
        liTaskTextRemovedColor,
        liTaskTextDoneColor
    }
) => {
    return (
        <ContentWrapper>
            <TabComponent
                tasks={tasks}
                setActiveTab={setActiveTab}
                changeTaskStatus={changeTaskStatus}
                changeTaskStatusDelete={changeTaskStatusDelete}
                activeTab={activeTab}
                nameTab='all'
                tabTitle='All tasks'
                tabDescription='Here you are manage all tasks'
                taskListHeight={tasks.length * taskHeight}

                tabWrapperBgColor={tabWrapperBgColor}
                tabWrapperShadowColor={tabWrapperShadowColor}

                liBorderBottomColor={liBorderBottomColor}
                liTaskTextColor={liTaskTextColor}
                liTaskTextRemovedColor={liTaskTextRemovedColor}
                liTaskTextDoneColor={liTaskTextDoneColor}
            />


            <TabComponent
                tasks={tasks.filter(el => !el.done && !el.delete)}
                setActiveTab={setActiveTab}
                changeTaskStatus={changeTaskStatus}
                changeTaskStatusDelete={changeTaskStatusDelete}
                activeTab={activeTab}
                nameTab='todo'
                tabTitle='Todo tasks'
                tabDescription='Here you can manage tasks to be completed'
                taskListHeight={tasks.filter(el => !el.done && !el.delete).length * taskHeight}

                tabWrapperBgColor={tabWrapperBgColor}
                tabWrapperShadowColor={tabWrapperShadowColor}

                liBorderBottomColor={liBorderBottomColor}
                liTaskTextColor={liTaskTextColor}
                liTaskTextRemovedColor={liTaskTextRemovedColor}
                liTaskTextDoneColor={liTaskTextDoneColor}


            />


            <TabComponent
                tasks={tasks.filter(el => el.done && !el.delete)}
                setActiveTab={setActiveTab}
                changeTaskStatus={changeTaskStatus}
                changeTaskStatusDelete={changeTaskStatusDelete}
                activeTab={activeTab}
                nameTab='done'
                tabTitle='Done tasks'
                tabDescription='Here you manage the tasks that you have already done'
                taskListHeight={tasks.filter(el => el.done && !el.delete).length * taskHeight}

                tabWrapperBgColor={tabWrapperBgColor}
                tabWrapperShadowColor={tabWrapperShadowColor}

                liBorderBottomColor={liBorderBottomColor}
                liTaskTextColor={liTaskTextColor}
                liTaskTextRemovedColor={liTaskTextRemovedColor}
                liTaskTextDoneColor={liTaskTextDoneColor}
            />


            <TabComponent
                tasks={tasks.filter(el => el.delete)}
                setActiveTab={setActiveTab}
                changeTaskStatus={changeTaskStatus}
                changeTaskStatusDelete={changeTaskStatusDelete}
                activeTab={activeTab}
                nameTab='delete'
                tabTitle='Removed tasks'
                tabDescription='Here you can see the tasks that you have been removed'
                taskListHeight={tasks.filter(el => el.delete).length * taskHeight}

                tabWrapperBgColor={tabWrapperBgColor}
                tabWrapperShadowColor={tabWrapperShadowColor}

                liBorderBottomColor={liBorderBottomColor}
                liTaskTextColor={liTaskTextColor}
                liTaskTextRemovedColor={liTaskTextRemovedColor}
                liTaskTextDoneColor={liTaskTextDoneColor}
            />
        </ContentWrapper>
    )
}
export default ContentComponent;
import React from "react";
import TabComponent from "../TabComponent";
 const taskHeight = 50;
const ContentComponent = (
    {tasks,setActiveTab, changeTaskStatus, changeTaskStatusDelete, activeTab}
    ) =>{
    return(
         <div className="content">
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
             />
    </div>
    )
}
export default ContentComponent;
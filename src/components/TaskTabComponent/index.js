import React from "react";
import styled from "styled-components";

const TasksTabWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .title__wrapper{
      .title{
        font-weight: bold;
        text-transform: uppercase;
      }
      .description{
        font-weight: 100;
        font-size: 12px;
      }
    }
`;

const TsakTabComponent =(tabTitle, tabDescription, tasks)=>(
    <TasksTabWrapper>
        <div className="title__wrapper">
            <div className="title">{tabTitle}</div>
            <div className="description">{tabDescription}</div>
        </div>
        <div className="task__counter">{tasks.length}</div>
    </TasksTabWrapper>
);
export default TsakTabComponent;
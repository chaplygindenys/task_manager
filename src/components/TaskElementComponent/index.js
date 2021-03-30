import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faSquare, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";


const LiComponent = styled.li `padding: 14px 0px;
  display: flex;
  justify-content: space-around;

  &:not(:last-child) {
    border-bottom: 1px solid #e8e8e8;
  }

  &:last-child {
    padding-bottom: 0px;
  }

  .task__text {
    flex: 1;
    margin: 0px 4px;
  }

  &:not(.removed), &:not(.removed), &:not(.removed) {
    .fa, .far, .fas {
      cursor: pointer;
    }
  }

  &.removed {
    .fa, .far, .fas {
      opacity: 0;
    }

    .task__text {
      text-decoration: line-through;
      color: #ccc;
      font-weight: 100;
    }
  }

  &.done {
    .fa.fa-check-square, .far.fa-check-square, .fas.fa-check-square {
      opacity: .5;
      cursor: default;
    }

    .task__text {
      color: #7d7d7d;
      font-weight: 100;
    }
  }`

const TaskElementComponent =(
    {cssClass, el, changeTaskStatusDelete, changeTaskStatus}
    ) =>{
    return(
        <LiComponent className={cssClass} key={el.id}>
            <FontAwesomeIcon className={'fa'} icon={el.done ? faCheckSquare : faSquare}
                             onClick={() => changeTaskStatus(el)}/>
            <span className="task__text">{el.title}</span>
            <FontAwesomeIcon className={'fa'} icon={faTrashAlt} onClick={() => changeTaskStatusDelete(el)}/>
        </LiComponent>
    )
};

export default TaskElementComponent;
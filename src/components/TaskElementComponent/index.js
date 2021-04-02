import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faSquare, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";


const LiComponent = styled.li`padding: 14px 0px;
  display: flex;
  justify-content: space-around;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.liBorderBottomColor};
  }

  &:last-child {
    padding-bottom: 0px;
  }

  .task__text {
    flex: 1;
    margin: 0px 4px;
    color: ${props => props.liTaskTextColor};
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
      color: ${props => props.liTaskTextRemovedColor};
      font-weight: 100;
    }
  }

  &.done {
    .fa.fa-check-square, .far.fa-check-square, .fas.fa-check-square {
      opacity: .5;
      cursor: default;
    }

    .task__text {
      color: ${props => props.liTaskTextDoneColor};
      font-weight: 100;
    }
  }`

const TaskElementComponent = (
    {
        cssClass,
        el,
        changeTaskStatusDelete,
        changeTaskStatus,

        liBorderBottomColor,
        liTaskTextColor,
        liTaskTextRemovedColor,
        liTaskTextDoneColor

    }) => {
    return (
        <LiComponent
            className={cssClass} key={el.id}
            liBorderBottomColor={liBorderBottomColor}
            liTaskTextColor={liTaskTextColor}
            liTaskTextRemovedColor={liTaskTextRemovedColor}
            liTaskTextDoneColor={liTaskTextDoneColor}
        >
            <FontAwesomeIcon className={'fa'} icon={el.done ? faCheckSquare : faSquare}
                             onClick={() => changeTaskStatus(el)}/>
            <span className="task__text">{el.title}</span>
            <FontAwesomeIcon className={'fa'} icon={faTrashAlt} onClick={() => changeTaskStatusDelete(el)}/>
        </LiComponent>
    )
};
TaskElementComponent.prototype = {
    cssClass: PropTypes.string.isRequired,
    el: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
            delete: PropTypes.bool.isRequired
        }).isRequired,

    changeTaskStatusDelete: PropTypes.func.isRequired,
    changeTaskStatus: PropTypes.func.isRequired,

    liBorderBottomColor: PropTypes.string.isRequired,
    liTaskTextColor: PropTypes.string.isRequired,
    liTaskTextRemovedColor: PropTypes.string.isRequired,
    liTaskTextDoneColor: PropTypes.string.isRequired,
}
export default TaskElementComponent;
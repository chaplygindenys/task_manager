import React from "react";
import styled from "styled-components";

/**
 * addButtonWrapperBgColor: #000;
 * hrBgColor: #fff;
 * addTaskFormWrapperBgColor: #fff;
 * inputUnderLineColor*/
const Footer = styled.div`position: sticky;
  bottom: 0;
  width: 100%;

  .add__button__wrapper {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 0px;
    bottom: 0px;
    transform: translate(-20%, -20%);
    background-color: ${props => props.addButtonWrapperBgColor};
    border-radius: 50%;
    cursor: pointer;
    opacity: .7;
    transition: transform .3s;

    &:hover {
      transform: translate(-20%, -20%) scale(1.035);
      opacity: 1;
    }

    .hr {
      position: absolute;
      width: 30px;
      height: 3px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: ${props => props.hrBgColor};
      transition: transform 1s;

      &.vr {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

  .add__task__form__wrapper {
    height: 0px;
    background-color: ${props => props.addTaskFormWrapperBgColor};
    padding: 0px 20px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    box-shadow: 0px -4px 6px 0px ${props => props.taskFormShadowColor};
    display: flex;
    flex-direction: column;
    transition: height 1s;
    overflow: hidden;

    label {
      font-weight: 700;
      margin: 20px 0;
    }

    input {
      border: unset;
      color:${props => props.addTaskFormWrapperTextColor};
      background-color: ${props => props.addTaskFormWrapperBgColor};
      border-bottom: 1px solid ${props => props.inputUnderLineColor};
      height: 20px;

      &:focus {
        outline: none;
      }
    }
  }

  &.active {
    .add__task__form__wrapper {

      height: 166px;
    }
  }`

const FooterComponent = (
    {
        addFormOpen,
        setAddFormOpen,
        newTask,
        enterNewTask,
        keyBoardHandler,
        addButtonWrapperBgColor,
        hrBgColor,
        addTaskFormWrapperTextColor,
        addTaskFormWrapperBgColor,
        inputUnderLineColor,
        taskFormShadowColor,
    }
) => {

    return (

        <Footer
            className={addFormOpen === true ? 'active' : ''}

            addButtonWrapperBgColor={addButtonWrapperBgColor}
            hrBgColor={hrBgColor}
            addTaskFormWrapperTextColor={addTaskFormWrapperTextColor}
            addTaskFormWrapperBgColor={addTaskFormWrapperBgColor}
            inputUnderLineColor={inputUnderLineColor}
            taskFormShadowColor={taskFormShadowColor}
        >


            <div className="add__button__wrapper" onClick={() => setAddFormOpen(!addFormOpen)}>
                <span className="hr"></span>
                <span className={`hr ${addFormOpen === true ? '' : 'vr'}`}></span>
            </div>
            <div className="add__task__form__wrapper">
                <label htmlFor="task_input">Add new task for today</label>
                <input id="task_input" type="text" placeholder="Enter smth here" value={newTask}
                       onChange={enterNewTask} onKeyUp={keyBoardHandler}/>
            </div>
        </Footer>
    )

}
export default FooterComponent;
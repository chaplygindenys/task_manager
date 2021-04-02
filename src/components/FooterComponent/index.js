import React, {useContext} from "react";
import {FooterComponentStyled} from "./index.styled";
import {ThemesContext} from "../../Themes/ThemesContext";


const FooterComponent = (
    {
        addFormOpen,
        setAddFormOpen,
        newTask,
        enterNewTask,
        keyBoardHandler,
    }
) => {
     const {themes} =useContext(ThemesContext);
    return (

        <FooterComponentStyled
            className={addFormOpen === true ? 'active' : ''}

            addButtonWrapperBgColor={themes.addButtonWrapperBgColor}
            hrBgColor={themes.hrBgColor}
            addTaskFormWrapperTextColor={themes.addTaskFormWrapperTextColor}
            addTaskFormWrapperBgColor={themes.addTaskFormWrapperBgColor}
            inputUnderLineColor={themes.inputUnderLineColor}
            taskFormShadowColor={themes.taskFormShadowColor}
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
        </FooterComponentStyled>
    )
}
export default FooterComponent;
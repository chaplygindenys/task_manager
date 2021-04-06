import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {useUserContext} from "../../store/UserContext";
import {TaskPageComponent} from "../../pages/TaskPageComponent";
import {LoginPageComponent} from "../../pages/LoginPageComponent";

const HeaderWrapper = styled.div`
  padding: 30px 40px;
`;

const LogoutWrapper = styled('div')`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  
  display: flex;
  justify-content: center;
  align-content: center;
  
`;

const HeaderComponent = () => {

    const date = new Date();
    let days = ['Sun', 'Mon', 'Tus', 'Wen', 'Tht', 'Fry', 'Sat']
    let months = ['Jan', 'Fbr', 'Mar', 'Apr', 'May', 'Jn', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Des']
    const {logoutAction} =useUserContext();
    return (


        <HeaderWrapper>

            <h1>Hello, Denys</h1>
            <div className="greeting">
                {'Today, ' + days[date.getDay()] + ' ' + (date.getDate()) + ' ' + (months[date.getMonth()])}
            </div>
            <LogoutWrapper onClick={logoutAction} >
                <FontAwesomeIcon className='fa' icon={faSignOutAlt} />
            </LogoutWrapper>
        </HeaderWrapper>
    )
}
export default HeaderComponent;
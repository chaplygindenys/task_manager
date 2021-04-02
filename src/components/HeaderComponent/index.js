import React, {useContext} from "react";
import styled from "styled-components";
import {ThemesContext} from "../../Themes/ThemesContext";

const HeaderWrapper = styled.div`
    padding: 30px 20px;
    position: relative;
    .iphone__x{
      width: 146px;
      height: 34px;
      left: 50%;
      transform: translate(-50%, -100%);
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      background: ${props => props.deviceBorderColor};
      top: 20px;
      position: absolute;
    }
`;

const HeaderComponent = () => {

    const date = new Date();
    let days = ['Sun', 'Mon', 'Tus', 'Wen', 'Tht', 'Fry', 'Sat']
    let months = ['Jan', 'Fbr', 'Mar', 'Apr', 'May', 'Jn', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Des']

    const {themes} =useContext(ThemesContext);
    return (


        <HeaderWrapper
            deviceBorderColor={themes.deviceBorderColor}
        >
            <div className="iphone__x"></div>
            <h1>Hello, Denys</h1>
            <div className="greeting">
                {'Today, ' + days[date.getDay()] + ' ' + (date.getDate()) + ' ' + (months[date.getMonth()])}
            </div>
        </HeaderWrapper>
    )
}
export default HeaderComponent;
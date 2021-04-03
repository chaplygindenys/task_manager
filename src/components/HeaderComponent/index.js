import React, {useContext} from "react";
import styled from "styled-components";
import {ThemesContext} from "../../Themes/ThemesContext";

const HeaderWrapper = styled.div`
    padding: 30px 40px;
`;

const HeaderComponent = () => {

    const date = new Date();
    let days = ['Sun', 'Mon', 'Tus', 'Wen', 'Tht', 'Fry', 'Sat']
    let months = ['Jan', 'Fbr', 'Mar', 'Apr', 'May', 'Jn', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Des']

    const {themes} =useContext(ThemesContext);
    return (


        <HeaderWrapper>

            <h1>Hello, Denys</h1>
            <div className="greeting">
                {'Today, ' + days[date.getDay()] + ' ' + (date.getDate()) + ' ' + (months[date.getMonth()])}
            </div>
        </HeaderWrapper>
    )
}
export default HeaderComponent;
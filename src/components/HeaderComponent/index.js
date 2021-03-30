import React from "react";
import TabComponent from "../TabComponent";

const HeaderComponent = () => {

    const date = new Date();
    let days = ['Sun', 'Mon', 'Tus', 'Wen', 'Tht', 'Fry', 'Sat']
    let months = ['Jan', 'Fbr', 'Mar', 'Apr', 'May', 'Jn', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Des']


    return (


        <div className="header">
            <div className="iphone__x"></div>
            <h1>Hello, Denys</h1>
            <div className="greeting">
                {'Today, ' + days[date.getDay()] + ' ' + (date.getDate()) + ' ' + (months[date.getMonth()])}
            </div>
        </div>
    )
}
export default HeaderComponent;
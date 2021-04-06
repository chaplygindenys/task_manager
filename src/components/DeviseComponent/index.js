import React, {useContext} from "react";
import styled from "styled-components";
import {LoginPageComponent} from "../../pages/LoginPageComponent";
import {ThemesContext} from "../../store/ThemesContext";
import {TaskPageComponent} from "../../pages/TaskPageComponent";
import {useUserContext} from "../../store/UserContext";

const DeviceWrapper = styled.div`
  box-sizing: border-box;
  height: 800px;
  width: 375px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 2px 12px 20px 2px ${props => props.tabWrapperShadowColor};
  border: 4px solid ${props => props.deviceBorderColor};
  position: relative;
  .iphone__x{
    width: 146px;
    height: 22px;
    left: 50%;
    transform: translate(-50%, -100%);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: ${props => props.deviceBorderColor};
    top: 20px;
    position: absolute;
    z-index: 9999;
  }
  .device {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: ${props => props.deviceBgColor};
    display: flex;
    flex-direction: column;
   /* overflow-y: scroll;*/
    position: relative;
  }
`;
const DeviseComponent=()=>{
    const {themes} =useContext(ThemesContext);
    const {isLogin} = useUserContext();
    return(
            <DeviceWrapper
                mainBorderColor={themes.mainBorderColor}
                deviceBorderColor={themes.deviceBorderColor}
                deviceBgColor={themes.deviceBgColor}
                tabWrapperShadowColor={themes.tabWrapperShadowColor}
            >
                <div className="iphone__x"></div>
                <div className="device">
                    {
                       isLogin?(<TaskPageComponent/>):(<LoginPageComponent/>)
                    }
                </div>
            </DeviceWrapper>
    )
};
export {DeviseComponent}
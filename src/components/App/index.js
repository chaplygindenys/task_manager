import React, {useState} from 'react';
import styled from "styled-components";
import {themes} from "../../Themes";
import {ThemesContext} from "../../Themes/ThemesContext"
import {ChangeThemeButtonComponent} from "../ChangeThemeButtonComponent";
import {TaskPageComponent} from "../../pages/TaskPageComponent";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  color: ${props => props.mainTextColor};
  background: ${props => props.containerBgColor};
  background: ${props => props.containerBgGradientColor};
  justify-content: center;

`;

const DeviceWrapper = styled.div`
  box-sizing: border-box;
  height: 800px;
  width: 375px;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 2px 12px 20px 2px ${props => props.tabWrapperShadowColor};
  border: 4px solid ${props => props.deviceBorderColor};

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
const Index = () => {

    const [isDarkMode, setDarkMode] = useState(true);
    const selectedThemes = isDarkMode ? themes.dark : themes.light;


    return (
        <ThemesContext.Provider value={{
            themes: selectedThemes,
            isDarkMode,
            toggleTheme: setDarkMode
        }}>


            <Container
                mainTextColor={selectedThemes.mainTextColor}
                containerBgColor={selectedThemes.containerBgColor}
                containerBgGradientColor={selectedThemes.containerBgGradientColor}
            >
                <ChangeThemeButtonComponent/>

                <DeviceWrapper
                    mainBorderColor={selectedThemes.mainBorderColor}
                    deviceBorderColor={selectedThemes.deviceBorderColor}
                    deviceBgColor={selectedThemes.deviceBgColor}
                    tabWrapperShadowColor={selectedThemes.tabWrapperShadowColor}
                >
                    <div className="device">

                        <TaskPageComponent/>


                    </div>

                </DeviceWrapper>
            </Container>
        </ThemesContext.Provider>
    )
        ;
}
export default Index;

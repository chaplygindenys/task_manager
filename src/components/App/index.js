import React, {useState} from 'react';
import styled from "styled-components";
import {themes} from "../../Themes";
import {ThemesContext} from "../../Themes/ThemesContext"
import {ChangeThemeButtonComponent} from "../ChangeThemeButtonComponent";
import {DeviseComponent} from "../DeviseComponent";


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

              <DeviseComponent/>

            </Container>
        </ThemesContext.Provider>
    )
        ;
}
export default Index;

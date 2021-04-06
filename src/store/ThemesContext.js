import React from "react";
import {themes} from "../Themes";

const ThemesContext =React.createContext(
    {themes:themes.dark,
    isDarkMode:true,
    toggleTheme: ()=>{},
    }
);
ThemesContext.displayName = 'ThemesContext';

export {ThemesContext};

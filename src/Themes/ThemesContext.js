import React from "react";
import {themes} from "./index";

const ThemesContext =React.createContext(
    {themes:themes.dark,
    isDarkMode:true,
    toggleTheme: ()=>{},
    }
);
ThemesContext.displayName = 'ThemesContext';

export {ThemesContext};

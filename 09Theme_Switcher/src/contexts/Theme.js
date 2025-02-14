import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme: () => {}
}) // here i am creating a context and additionally providing the values

export const ThemeProvider = ThemeContext.Provider; // Here i am making everyone aware about this component

export default function useTheme(){
    return useContext(ThemeContext);
} // Now by using this function any component can use the context of this context store.
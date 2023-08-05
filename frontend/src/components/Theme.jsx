
import { useState } from "react";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hook/useDarkSide";
 
export default function Theme() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
}
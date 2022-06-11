import { ThemeContext } from "./theme-context";
function ThemeTogglerButton() {
    return (<ThemeContext.Consumer>
        {({ themes, toggleThem }) => {
            return (
            <button onClick={toggleThem} style={{ background: themes.background }}>toggleTheme</button>
        )}
        }
    </ThemeContext.Consumer>);
}
export default ThemeTogglerButton
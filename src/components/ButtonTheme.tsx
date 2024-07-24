import { Button } from "@nextui-org/react"
import useTheme from "../hooks/useTheme";
import iconMoon from '../assets/icon-moon.png'
import iconSun from '../assets/icon-sun.png'


function ButtonTheme() {
    const { theme, toggleTheme } = useTheme();
    const handleEventeClick = () => {
        if (typeof toggleTheme === 'function') {
            toggleTheme();
        } else {
            console.error('toggleTheme is not a function');
        }
    }
    return (
        <Button isIconOnly radius="lg" onClick={handleEventeClick} variant="faded">
            {theme == 'light' ?
                <img src={iconMoon} width={25} height={25} alt="icon-moon" /> :
                <img src={iconSun} width={25} height={25} alt="icon-sun" />
            }
        </Button>
    )
}

export default ButtonTheme
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

const InitialSetup = () => {
        // const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

        // useEffect(() => {
        //     if (isDarkMode === true
        //     ) {
        //         document.documentElement.classList.add('dark')
        //         localStorage.theme = 'dark'
        //     } else {
        //         document.documentElement.classList.remove('dark')
        //         localStorage.theme = 'light'
        //     }
        // }, [isDarkMode]);

    return (
        <Outlet />
    )
}

export default InitialSetup
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import { RootState } from "@/common/redux/store";

const InitialSetup = () => {
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    useEffect(() => {
        if (isDarkMode === true
        ) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [isDarkMode]);

    return (
        <>
            <div className='fixed w-screen h-screen bg-white dark:bg-black -z-10' />

            {/* <Header /> */}
            <Outlet />

            <div className='fixed w-screen h-screen bg-white dark:bg-black -z-10' />
        </>
    )
}

export default InitialSetup
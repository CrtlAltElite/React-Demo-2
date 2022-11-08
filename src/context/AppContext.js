import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) =>{

    const [movies, setMovies]=useState([])

    const values={
        movies:movies,
        setMovies:setMovies
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
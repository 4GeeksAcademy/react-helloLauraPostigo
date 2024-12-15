import React from "react";
import Navbar from "./navbar";
import Header from "./header"; 
import GridCards from "./grid-cards";

// Componentes (en home)
const Home = () => {
    return ( 
        <> 
            <Navbar />
            <Header />
			<GridCards />
        </>
    );
};

export default Home;

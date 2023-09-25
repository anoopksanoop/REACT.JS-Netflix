import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {orginals,action, comedy, horror, Romance, Doc} from "./Urls";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={orginals} title='Netflix Originals'/>
       <RowPost url={action} title='Actions'isSmall />
       <RowPost url={horror} title='Horror' isSmall />
       <RowPost url={comedy} title='Comedy' isSmall />
       <RowPost url={Romance} title='Romance' isSmall/>
       <RowPost url={Doc} title='Documentaries' isSmall />
       
    </div>
  );
}

export default App;

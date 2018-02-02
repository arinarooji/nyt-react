import React from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";


const App = () => (
    <Wrapper>
        <Jumbotron name={"New York Times"} edition={"Lite Edition"}/>
        <Search name={"Search Options"}/>
        <Results />
        <Saved />
    </Wrapper>
);

export default App;
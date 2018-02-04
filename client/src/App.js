import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import SearchBtn from "./components/SearchBtn";
import Results from "./components/Results";
import Saved from "./components/Saved";

class App extends Component {
    
    handleClick = (event) => {
        console.log(event);
    };

    render() {
        return (
            <Wrapper>
                <Jumbotron name={"New York Times Search"} edition={"React Edition"}/>
                <Search name={"Search Options"}>
                    <SearchBtn onClick={this.handleClick}/>
                </Search>
                <Results />
                <Saved />
            </Wrapper>
        );
    };
    
}

export default App;
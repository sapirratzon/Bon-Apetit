import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar"
import './App.css';

function App() {
  return (
      <BrowserRouter >
        <div className="App" >
          <Route component={NavigationBar} />
          <div className="content" >
            {/*<Route exact path="/" component={HomePage} />*/}
            {/*<Route*/}
            {/*    path="/Discussion/:isSimulation/:simulationCode"*/}
            {/*    render={(props) => <Discussion {...props}*/}
            {/*                                   isSimulation={props.match.params.isSimulation}*/}
            {/*                                   simulationCode={props.match.params.simulationCode} />} />*/}
            {/*<Route path="/login/" component={Login} />*/}
            {/*<Route path="/registration/" component={Registration} />*/}
            {/*<Route path="/moderatorsManagement/" component={Moderators} />*/}
          </div >
        </div >
      </BrowserRouter >
  );
}

export default App;

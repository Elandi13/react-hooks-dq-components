import React from "react";
import TopMenu from "./TopMenu"
import SideMenu from "./SideMenu"
import MainContent from "./MainContent"

function App() {
  return <div className="app-container"> 
  <SideMenu/>
  <MainContent/>
  <TopMenu/>
  </div>;
}

export default App;

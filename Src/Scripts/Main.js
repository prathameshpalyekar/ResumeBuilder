import React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ContentTools from "ContentTools";

import Header from "./Header/Header";
import Work from "./LeftPanel/Work";
import Projects from "./LeftPanel/Projects";
import Achievements from "./RightPanel/Achievements";
import Education from "./RightPanel/Education";
import Hobbies from "./RightPanel/Hobbies";
import ProfessionalSkills from "./RightPanel/ProfessionalSkills";

export default class Main extends React.Component {

  componentDidMount() {
    var editor;
    editor = ContentTools.EditorApp.get();
    editor.init('*[data-editable]', 'data-name');    
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{height: "100%"}}>
          <Header/>
          <div className="clear-fix" style={{height: "100%"}}>
            <LeftPanel/>
            <RightPanel/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function LeftPanel() {
  return (
    <div style={{width: "50%", backgroundColor: "#fafafa", height: "100%", float: "left"}}>
      <Work/>
      <Projects/>
    </div>
  );
}

function RightPanel() {
  return (
    <div style={{width: "50%", backgroundColor: "#f2f2f2", height: "100%", float: "left"}}>
      <Education/>
      <ProfessionalSkills/>
      <Achievements/>
      <Hobbies/>
    </div>
  );
}
import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import {deepOrange500} from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from "material-ui/Paper";
import Avatar from 'material-ui/Avatar';
import FontIcon from "material-ui/FontIcon";
import Divider from 'material-ui/Divider';
import ContentTools from "ContentTools";
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import Chip from 'material-ui/Chip';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class Main extends React.Component {

  componentDidMount() {
    var editor;
    editor = ContentTools.EditorApp.get();
    editor.init('*[data-editable]', 'data-name');    
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header/>
          <div>
            <LeftPanel/>
            <RightPanel/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function RightPanel() {
  return (
    <div style={{width: "50%", backgroundColor: "#f2f2f2", float: "left"}}>
      <Education/>
      <ProfessionalSkills/>
      <Achievements/>
      <Hobbies/>
    </div>
  );
}

function Hobbies() {
  return (
    <div>
      <div>
        <div style={{padding: 10, fontSize: 20, color: "gray", paddingLeft: 32, paddingTop: 10}}>Hobbies</div>
        <hr style={{width: "70%", margin: 0, marginLeft: 30, border: "1px solid gray"}}/>
      </div>
      <div style={{marginLeft: 30, marginTop: 15, marginBottom: 14}}>
        <FontIcon style={{marginRight: 5}} className="material-icons" color="gray">restaurant</FontIcon>
        <FontIcon style={{marginRight: 5}} className="material-icons" color="gray">palette</FontIcon>
        <FontIcon style={{marginRight: 5}} className="material-icons" color="gray">audiotrack</FontIcon>
        <FontIcon className="material-icons" color="gray">videogame_asset</FontIcon>
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <div>
      <div>
        <div style={{padding: 10, fontSize: 20, color: "gray", paddingLeft: 32, paddingTop: 10}}>Achievements & extra curricular</div>
        <hr style={{width: "70%", margin: 0, marginLeft: 30, border: "1px solid gray"}}/>
      </div>
      <div>
        <table style={{marginLeft: 30, marginTop: 5}}>
          <tbody>
            <tr>
              <td style={{borderBottom: "1px solid lightgray"}}><FontIcon className="material-icons" color="gray">stars</FontIcon></td>
              <td style={{borderBottom: "1px solid lightgray"}}>&nbsp;</td>
              <td style={{borderBottom: "1px solid lightgray"}}>Gold & Silver Medalist in HomiBhabha Young Scientist search competition</td>
            </tr>
            <tr>
              <td style={{borderBottom: "1px solid lightgray"}}><FontIcon className="material-icons" color="gray">stars</FontIcon></td>
              <td style={{borderBottom: "1px solid lightgray"}}>&nbsp;</td>
              <td style={{borderBottom: "1px solid lightgray"}}>Bagged 2nd rank in Physics Olympiad held in VNIT</td>
            </tr>
            <tr>
              <td style={{borderBottom: "1px solid lightgray"}}><FontIcon className="material-icons" color="gray">stars</FontIcon></td>
              <td style={{borderBottom: "1px solid lightgray"}}>&nbsp;</td>
              <td style={{borderBottom: "1px solid lightgray"}}>Treasurer of Computer Science department for academic year 2012-2013</td>
            </tr>
            <tr>
              <td><FontIcon className="material-icons" color="gray">stars</FontIcon></td>
              <td>&nbsp;</td>
              <td>Bagged 3rd rank in 'Cryptocrux' , event based on cryptography in AXIS , 2013</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProfessionalSkills() {
  return (
    <div style={{marginTop: -20}}>
      <div>
        <div style={{padding: 10, fontSize: 20, color: "gray", paddingLeft: 32, paddingTop: 0}}>Professional skills</div>
        <hr style={{width: "70%", margin: 0, marginLeft: 30, border: "1px solid gray"}}/>
      </div>
      <div style={{marginLeft: 30}}>
        <span style={{fontSize: 16, display: "inline-block", marginTop: 10, marginLeft: 10}}> Web skills</span>
        <div style={{display: 'flex', flexWrap: 'wrap',}}>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>HTML & CSS</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>Javascript</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>React JS</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>JQuery</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>Bootstrap</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>material-ui</Chip>
        </div>
      </div>
      <div style={{marginLeft: 30}}>
        <span style={{fontSize: 16, display: "inline-block", marginTop: 2, marginLeft: 10}}>Experince in</span>
        <div style={{display: 'flex', flexWrap: 'wrap',}}>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>Webpack</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>npm</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>SASS</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>Angular JS</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>Knockout JS</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>MVC pattern</Chip>
        </div>
      </div>
      <div style={{marginLeft: 30}}>
        <span style={{fontSize: 16, display: "inline-block", marginTop: 2, marginLeft: 10}}>Programming Language</span>
        <div style={{display: 'flex', flexWrap: 'wrap',}}>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>C </Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>C++</Chip>
          <Chip style={{margin: 2}} labelStyle={{fontSize: 13}}>C#</Chip>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <div>
        <div style={{padding: 10, fontSize: 20, color: "gray", paddingLeft: 32, paddingTop: 30}}>Education</div>
        <hr style={{width: "70%", margin: 0, marginLeft: 30, border: "1px solid gray"}}/>
      </div>
      <Stepper orientation="vertical" style={{marginLeft: 20}}>
        <Step>
          <StepLabel completed icon={<FontIcon className="material-icons" color="gray">school</FontIcon>}><b>Bachelor of technology</b></StepLabel>
          <StepContent active style={{marginTop: -25, marginBottom: -30}}>
            <table>
              <tbody>
                <tr>
                  <td>Institute</td>
                  <td>:&nbsp;</td>
                  <td>Computer Science, Visvesvaraya National Institute of Technology</td>
                </tr>
                <tr>
                  <td>CGPA</td>
                  <td>:&nbsp;</td>
                  <td>7.65/10</td>
                </tr>
              </tbody>
            </table>
          </StepContent>
        </Step>
        <Step>
          <StepLabel disabled={false} icon={<span><b>12<sup>th</sup></b></span>}><b>HSC (Class XII)</b></StepLabel>
          <StepContent active style={{marginTop: -23, marginBottom: -30}}>
            <table>
              <tbody>
                <tr>
                  <td>Institute</td>
                  <td>:&nbsp;</td>
                  <td>Sathaye college , Mumbai</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>:&nbsp;</td>
                  <td>81.67</td>
                </tr>
              </tbody>
            </table>
          </StepContent>
        </Step>
        <Step>
          <StepLabel disabled={false} icon={<span><b>10<sup>th</sup></b></span>}><b>SSC (Class X)</b></StepLabel>
          <StepContent active style={{marginTop: -23, marginBottom: -36}}>
            <table>
              <tbody>
                <tr>
                  <td>Institute</td>
                  <td>:&nbsp;</td>
                  <td>Parle Tilak Vidyalaya , Mumbai</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>:&nbsp;</td>
                  <td>93.23</td>
                </tr>
              </tbody>
            </table>
          </StepContent>
        </Step>
        <Step>
          <StepLabel icon={<span></span>}></StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}

function LeftPanel() {
  return (
    <div style={{width: "50%", backgroundColor: "#fafafa", float: "left"}}>
      <Work/>
      <Projects/>
    </div>
  );
}

function Work() {
  return (
    <div>
      <div>
        <div style={{padding: 10, fontSize: 20, color: "gray", paddingLeft: 32, paddingTop: 30}}>Work Experince</div>
        <hr style={{width: "70%", margin: 0, marginLeft: 30, border: "1px solid gray"}}/>
      </div>
      <Stepper orientation="vertical" style={{marginLeft: 10}}>
        <Step>
          <StepLabel completed icon={<FontIcon className="material-icons" color="gray">lens</FontIcon>}><b>Quantumgraph Solutions Pvt Ltd</b></StepLabel>
          <StepContent active style={{marginTop: -30, marginBottom: -36}}>
            <div data-editable data-name="main-content" >
            <p style={{marginBottom: 0, fontSize: 13}} >
              <span style={{color: "gray", fontStyle: "italic"}}>Feb,&nbsp;2016 - present</span><br/>
              Working as a lead front-end developer. Built company website using <b>React JS</b>. Took Major part in deciding 
              architecture of project and deployment. Review all the front-end code going in production. Major part in adding
              new technical features and designing product.
            </p>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel disabled={false} icon={<FontIcon className="material-icons" color="gray">lens</FontIcon>}><b>FactSet Research Systems Inc </b></StepLabel>
          <StepContent active style={{marginTop: -30, marginBottom: -30}}>
            <p style={{marginBottom: 0, fontSize: 13}}>
              <span style={{color: "gray", fontStyle: "italic"}}>Jun,&nbsp;2014 - Jan,&nbsp;2016</span><br/>
              Built customizable front end product which is compatible with all browsers and i-pad.
              Worked on Content editor project which allows user to edit reports on web and save back to
              server.The later project was developed using Angular with TypeScript.
            </p>
          </StepContent>
        </Step>
        <Step>
          <StepLabel disabled={false} icon={<FontIcon className="material-icons" color="gray">lens</FontIcon>}><b>Indian Institute of Technology Bombay</b></StepLabel>
          <StepContent active style={{marginTop: -30, marginBottom: -30}}>
            <p style={{marginBottom: 0, fontSize: 13}}>
              <span style={{color: "gray", fontStyle: "italic"}}>Research Internship</span><br/>
              Developed cost effective finger print scanner and application which converts the fingerprint image captured to binary image
              using thresholding, thinning and image histogram equalization.
            </p>
          </StepContent>
        </Step>
        <Step>
          <StepLabel disabled={false} icon={<FontIcon className="material-icons" color="gray">lens</FontIcon>}><b>Office Box Software Pvt Ltd</b></StepLabel>
          <StepContent active style={{marginTop: -30, marginBottom: -36}}>
            <p style={{marginBottom: 0, fontSize: 13}}>
              <span style={{color: "gray", fontStyle: "italic"}}>Industrial Internship</span><br/>
              Developed Desktop application for vendors which help them to manage resources and bills.
            </p>
          </StepContent>
        </Step>
        <Step>
          <StepLabel icon={<span></span>}></StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}

function Projects() {
  return (
    <div style={{marginTop: -35, marginBottom: 5}}>
      <div>
        <div style={{padding: 10, fontSize: 20, color: "gray", paddingLeft: 32, paddingTop: 30}}>Projects</div>
        <hr style={{width: "70%", margin: 0, marginLeft: 30, border: "1px solid gray"}}/>
      </div>
      <table style={{marginLeft: 30, marginTop: 5}}>
        <tbody>
          <tr>
            <td style={{borderBottom: "1px solid lightgray", paddingTop: 0, verticalAlign: "initial"}}><FontIcon className="material-icons" color="gray">label</FontIcon></td>
            <td style={{borderBottom: "1px solid lightgray"}}>&nbsp;</td>
            <td style={{borderBottom: "1px solid lightgray"}}>
              <b>Contract Bridge&nbsp;</b>(&nbsp;final year projet&nbsp;)<br/>
              Built contract bridge game for desktop users using <b>C#</b>. The idea was to develop computer player using Artificial Intelligence
              technique and intelligent decision making algorithm
            </td>
          </tr>
          <tr>
            <td style={{borderBottom: "1px solid lightgray", paddingTop: 0, verticalAlign: "initial"}}><FontIcon className="material-icons" color="gray">label</FontIcon></td>
            <td style={{borderBottom: "1px solid lightgray"}}>&nbsp;</td>
            <td style={{borderBottom: "1px solid lightgray"}}>
              <b>Interactive, Enhanced Periodic table </b><br/>
              Designed Interactive Periodic Table, <b>Android </b>application which gives detailed information
              about each element and classify according to properties.
            </td>
          </tr>
          <tr>
            <td style={{paddingTop: 0, verticalAlign: "initial"}}><FontIcon className="material-icons" color="gray">label</FontIcon></td>
            <td>&nbsp;</td>
            <td>
              <b> Citizen Facilitation Centre</b><br/>
              Designed a GUI application using <b>C#</b> for citizens that should help in handling complaints/grievances management system
              and issues domicile certificates
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Header() {
  return (
    <div style={{height: 150, width: "100%", backgroundColor: "#5f5555"}}>
      <div style={{height: 120, width: 120, backgroundColor: "gray", borderRadius: 60, marginLeft: 15, float: "left", marginTop: 15}}>
        <div style={{height: 100, width: 100, backgroundColor: "white", borderRadius: 50, marginLeft: 10, marginTop: 10}}>
         <img src="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/1609567_663590260353276_1326755378_n.jpg?oh=085c5cb120b068729463300b50fb0d91&oe=581C1958" style={{height: 80, width: 80, marginTop: 10, marginLeft: 10, borderRadius: 40}}/>
        </div>
      </div>
      <div style={{float: "left", marginLeft: 30, marginTop: 50, color: "white"}}>
        <div style={{fontSize: 36, fontWeight: "bold"}}>
          Prathamesh Palyekar
        </div>
        <div style={{fontSize: 20, marginTop: 15}}>
          Front-end Web Developer
        </div>
      </div>
      <div style={{float: "right", width: 200, marginTop: 25}}>
        <div style={{color: "white", fontSize: 14}}>
          <FontIcon className="material-icons" color="white">call</FontIcon>
          <span style={{display: "block", marginTop: -28, marginLeft: 25, marginBottom: 4}}>&nbsp;&nbsp;+91 9849264836</span>
        </div>
        <div style={{color: "white", fontSize: 14}}>
          <FontIcon className="material-icons" color="white">mail outline</FontIcon>
          <span style={{display: "block", marginTop: -27, marginLeft: 30, marginBottom: 4}}>pratham2604@gmail.com</span>
        </div>
        <div style={{color: "white", fontSize: 14}}>
          <FontIcon className="material-icons" color="white">domain</FontIcon>
          <span style={{display: "block", marginTop: -25, marginLeft: 30}}>Bangalore</span>
        </div>
        <div style={{color: "white", fontSize: 14}}>
          <FontIcon className="material-icons" color="white">home</FontIcon>
          <span style={{display: "block", marginTop: -25, marginLeft: 30}}>Mumbai</span>
        </div>
      </div>
    </div>
  );
}

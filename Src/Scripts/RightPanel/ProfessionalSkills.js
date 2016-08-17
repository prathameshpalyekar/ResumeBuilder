import React from "react";
import FontIcon from "material-ui/FontIcon";
import Chip from 'material-ui/Chip';

export default function ProfessionalSkills() {
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
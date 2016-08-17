import React from "react";
import FontIcon from "material-ui/FontIcon";

export default function Projects() {
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
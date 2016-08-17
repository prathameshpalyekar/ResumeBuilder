import React from "react";
import FontIcon from "material-ui/FontIcon";

export default function Achievements() {
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
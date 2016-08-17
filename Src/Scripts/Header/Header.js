import React from "react";
import FontIcon from "material-ui/FontIcon";

export default function Header() {
  return (
    <div style={{height: 150, width: "100%", backgroundColor: "#5f5555"}}>
      <div style={{float: "left", marginLeft: 30, marginTop: 50, color: "white"}}>
        <div style={{fontSize: 36, fontWeight: "bold"}} data-editable data-name="name">
          <p style={{margin: 0}}>
            FirstName LastName
          </p>
        </div>
        <div style={{fontSize: 20, marginTop: 15}} data-editable data-name="designation">
          <p style={{margin: 0}}>
            Designation
          </p>
        </div>
      </div>
      <div style={{float: "right", width: 230, marginTop: 25}}>
        <div style={{color: "white", fontSize: 14}} data-editable data-name="mobile">
          <FontIcon className="material-icons" color="white">call</FontIcon>
          <p style={{display: "block", marginTop: -28, marginLeft: 30, marginBottom: 4}}>+91 9900999009</p>
        </div>
        <div style={{color: "white", fontSize: 14}} data-editable data-name="email">
          <FontIcon className="material-icons" color="white">mail outline</FontIcon>
          <p style={{display: "block", marginTop: -27, marginLeft: 30, marginBottom: 4}}>xyz_emailid@gmail.com</p>
        </div>
        <div style={{color: "white", fontSize: 14}} data-editable data-name="current-city">
          <FontIcon className="material-icons" color="white">domain</FontIcon>
          <p style={{display: "block", marginTop: -25, marginLeft: 30, marginBottom: 4}}>Current city</p>
        </div>
        <div style={{color: "white", fontSize: 14}} data-editable data-name="home-city">
          <FontIcon className="material-icons" color="white">home</FontIcon>
          <p style={{display: "block", marginTop: -25, marginLeft: 30}}>HomeTown</p>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import FontIcon from "material-ui/FontIcon";

export default function Hobbies() {
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
import React from "react";
import FontIcon from "material-ui/FontIcon";
import FlatButton from "material-ui/FlatButton";
import Popover from "material-ui/Popover";
import MenuItem from "material-ui/MenuItem";

export default class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {popUp: false, hobbies: ["restaurant", "palette", "audiotrack", "videogame_asset"]}
  }

  openPopUp(event){
    event.preventDefault();
    this.setState({popUp: true, anchorEl: event.currentTarget});
  }

  closePopUp() {
    this.setState({popUp: false});
  }

  addHobby(value) {
    var hobbies = this.state.hobbies;
    hobbies.indexOf(value) == -1 ? hobbies.push(value) : "";
    this.setState({hobbies: hobbies});
  }

  render() {
    return (
      <div>
        <div>
          <div style={{padding: 10, fontSize: 20, color: "gray", paddingLeft: 32, paddingTop: 10}}>Hobbies</div>
          <hr style={{width: "70%", margin: 0, marginLeft: 30, border: "1px solid gray"}}/>
        </div>
        <div style={{marginLeft: 30, marginBottom: 14}}>
          {this.state.hobbies.map(function(element, index) {
            return <FontIcon style={{marginRight: 5}} className="material-icons" color="gray">{element}</FontIcon>
          })}
          <br/>
          <FlatButton className="icon-button" icon={<span className="icon">+</span>} style={{height: 34, width: 34, borderRadius: 17, margin: 0}} onClick={this.openPopUp.bind(this)}/>  
          <Popover open={this.state.popUp} anchorEl={this.state.anchorEl} anchorOrigin={{horizontal: "left", vertical: "bottom"}} targetOrigin={{horizontal: "left", vertical: "top"}} onRequestClose={this.closePopUp.bind(this)}>
            <MenuItem style={{lineHeight: 1.5, paddingTop: 10, paddingBottom: 10}}>
              <FontIcon style={{marginRight: 5}} className="material-icons" color="gray" onClick={this.addHobby.bind(this, "restaurant")}>restaurant</FontIcon>
              <FontIcon style={{marginRight: 5}} className="material-icons" color="gray" onClick={this.addHobby.bind(this, "palette")}>palette</FontIcon>
              <FontIcon style={{marginRight: 5}} className="material-icons" color="gray" onClick={this.addHobby.bind(this, "audiotrack")}>audiotrack</FontIcon>
              <FontIcon className="material-icons" color="gray" onClick={this.addHobby.bind(this, "videogame_asset")}>videogame_asset</FontIcon>
              <br/>
              <FontIcon style={{marginRight: 5}} className="material-icons" color="gray" onClick={this.addHobby.bind(this, "directions_bike")}>directions_bike</FontIcon>
              <FontIcon style={{marginRight: 5}} className="material-icons" color="gray" onClick={this.addHobby.bind(this, "pool")}>pool</FontIcon>
              <FontIcon style={{marginRight: 5}} className="material-icons" color="gray" onClick={this.addHobby.bind(this, "fitness_center")}>fitness_center</FontIcon>
              <FontIcon className="material-icons" color="gray" onClick={this.addHobby.bind(this, "local_library")}>local_library</FontIcon>
            </MenuItem>
          </Popover>
        </div>
      </div>
    );
  }
}

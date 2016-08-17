import React from "react";
import FontIcon from "material-ui/FontIcon";
import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';

export default function Education() {
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
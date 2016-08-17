import React from "react";
import {Step, Stepper, StepLabel, StepContent} from 'material-ui/Stepper';
import FontIcon from "material-ui/FontIcon";

export default function Work() {
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
            <div>
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
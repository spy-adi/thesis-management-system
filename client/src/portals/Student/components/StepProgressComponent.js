import React from "react";
import { Steps,Popover } from 'antd';
// import "./ProgStyle.css";

const {Step} = Steps;
// This React Functional Component takes two properties:
// 1) steps: an array of the labels of the steps involved
// 2) accomplished: the number of steps that have already been accomplished

function StepProgressComponent(props) {
  // const listItems = props.steps.map((step, index) => (
  //   <li
  //     className={
  //       props.accomplished >= index + 1 ? "accomplished" : "unaccomplished"
  //     }
  //     style={{ width: `${100 / props.steps.length}%` }}
  //   >
  //     {step}
  //   </li>
  // ));

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  return (
    <div className="container" style={{padding:'24px 0'}} responsive='true'>
      {/* <ul className="progressBar">{listItems}</ul> */}
      <Steps current={props.accomplished} progressDot={customDot}>
        <Step title="CE"/>
        <Step title="RPS"/>
        <Step title="JRF to SRF"/>
        <Step title="PSS"/>
        <Step title="Thesis Submission"/>
        <Step title="Thesis Evaluation"/>
        <Step title="Viva-voce"/>
        <Step title="PhD Degree"/>
      </Steps>
    </div>
  );
}

export default StepProgressComponent;

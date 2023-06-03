import React from "react";
import styled from "styled-components";

const ClassroomRouter = styled.div`
  border-bottom: 1px solid #b4b4b4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s linear;
  width: 100%;
  margin: 0 auto;

  .highlighted {
    color: #000000;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 4px solid #674ff1;
    }
  }
`;

const ClassNavOption = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 0 4.5rem 0.5rem;
  position: relative;
  color: #979797;
  cursor: pointer;
  text-transform: capitalize;
`;

interface navigatorProps {
  activeLink: string;
  navigationHandler: any;
  labelArr: string[];
}

const HorizontalNavigator = (props: navigatorProps) => {
  return (
    <ClassroomRouter>
      {props.labelArr.map((label, index) => {
        return (
          <ClassNavOption
            className={props.activeLink == label ? "highlighted" : undefined}
            onClick={() => props.navigationHandler(label)}
            key={index}
          >
            {label}
          </ClassNavOption>
        );
      })}
    </ClassroomRouter>
  );
};

export default HorizontalNavigator;

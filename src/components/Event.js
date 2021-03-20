import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

//TODO: replace with object destructuring
const EventBar = styled.div`
  display:flex;
  align-items:center;
  color: rgb(255,255,255);
  background: ${props => props.color};
  box-shadow: 0px 10px 15px 0px ${props => hexToRgba(props.color, 0.4)};
  padding-left:12px;
  border-top-left-radius: ${props => props.stretchLeft ? 0 : 4}px;
  border-bottom-left-radius: ${props => props.stretchLeft ? 0 : 4}px;
  border-top-right-radius: ${props => props.stretchRight ? 0 : 4}px;
  border-bottom-right-radius: ${props => props.stretchRight ? 0 : 4}px;
  margin-left: ${props => props.stretchLeft ? 0 : 3}px;
  margin-right: ${props => props.stretchRight ? 0 : 3}px;
`;


const OffsetUp = styled.span`
  margin-top: -1px;
  font-size: 1.3em;
`;

const Event = ({ task, ...other }) => {
    return (
        <EventBar {...other}>
            <OffsetUp>
                {task}
            </OffsetUp>
        </EventBar>
    );
};

export default Event;
import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const EventBar = styled.div`
  display:flex;
  align-items:center;
  color: rgb(255,255,255);
  background: ${props => props.color};
  box-shadow: 0px 10px 15px 0px ${props => hexToRgba(props.color, 0.4)};
  border-radius: 4px;
  padding-left:12px;
  font-size: 1.3em;
  margin-left:3px;
  margin-right:3px;
  height:2em;
`
const OffsetUp = styled.span`
  margin-top: -1px;
`
const Event = ({ className, color, task }) => {
    return (
        <EventBar className={className} color={color}>
            <OffsetUp>
                {task}
            </OffsetUp>
        </EventBar>
    );
}

export default Event;
import React from 'react';
import styled from 'styled-components';

const EventBar = styled.div`
  background: ${props => props.color};
  border-radius: 4px;
`
const Event = ({ className, color, task }) => {
    return (
        <EventBar className = {className} color={color}>
            {task}
        </EventBar>
    );
}

export default Event;
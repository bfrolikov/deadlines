import DateCell from './DateCell';
import styled from 'styled-components';
import moment from 'moment';
import Event from './Event';
import React, { useRef, useEffect } from 'react';



const Timetable = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.days}, minmax(120px,1fr));
  grid-template-rows: 50px;
  grid-auto-rows: 200px;
  overflow: auto;
`;

const DayCell = styled.div`
  border-bottom: 1px solid rgba(34,36,38,.1);
  border-right: 1px solid rgba(34,36,38,.1);
  grid-row:2;
  grid-column:${props => props.col} / ${props => props.col};
`;

const EventOnGrid = styled(Event)`
  grid-row: 2;
  grid-column: ${props => props.col}/span ${props => props.length};
  align-self:end;
  z-index: 2;
`;

const Table = ({ events }) => {
    const currentDayRef = useRef(null);
    useEffect(() => { currentDayRef.current.parentNode.scrollLeft = currentDayRef.current.offsetLeft - currentDayRef.current.parentNode.offsetLeft }, [])
    const renderedDays = 30;
    const from = renderedDays % 2 === 0 ? Math.round((renderedDays - 2) / 2) : Math.round((renderedDays - 1) / 2); //TODO: Replace with floor
    const offsets = []; //TODO: shit starts
    const days = [];
    const eventsToRender = []; //TODO:convert to an array of moments
    for (let i = -from, j = 1; i < renderedDays - from; i++, j++) {
        offsets.push(i);
        days.push(<DayCell col={j}/>);
    }
    const firstRenderedDate = moment().subtract(from, 'days');
    for (let i = 0; i < events.length; i++) {
        const col = moment.utc(events[i].startDate).local().diff(firstRenderedDate, 'days') + 1;
        const len = moment.utc(events[i].endDate).diff(moment.utc(events[i].startDate), 'days') + 1;
        eventsToRender.push(<EventOnGrid col={col} length={len} color="#4786ff" task="First task" />);
    } //TODO: shit ends
    return (
        <Timetable days={renderedDays}>
            {offsets.map(it => {
                return it === 0 ?
                    <DateCell id={it} ref={currentDayRef} offset={it} /> :
                    <DateCell offset={it} />
            })}
            {days}
            {eventsToRender}
        </Timetable>
    );
}
export default Table;
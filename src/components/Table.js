import DateCell from './DateCell';
import styled from 'styled-components';
import moment from 'moment';
import Event from './Event';
import React, { useRef, useEffect } from 'react';



const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.dayCount}, minmax(120px,1fr));
  grid-template-rows: 50px;
  grid-auto-rows: 200px;
  overflow: auto;
`;

const DayCell = styled.div`
  border-bottom: 1px solid rgba(34,36,38,.1);
  border-right: 1px solid rgba(34,36,38,.1);
  grid-row:2;
  grid-column:${props => props.col} / ${props => props.col + 1};
`;

const EventOnGrid = styled(Event)`
  grid-row: 2;
  grid-column: ${props => props.col}/span ${props => props.len};
  align-self:end;
  z-index: 2;
`;

const Table = ({ events }) => {
    const currentDayRef = useRef(null);
    useEffect(() => { currentDayRef.current.parentNode.scrollLeft = currentDayRef.current.offsetLeft - currentDayRef.current.parentNode.offsetLeft }, [])
    const renderedDays = 30;
    const from = Math.floor((renderedDays - 1) / 2) 
    const now = moment();
    const moments = Array.from({ length: renderedDays }, (v, i) => now.clone().add(-from + i, 'days'));
    return (
        <Grid dayCount={renderedDays}>
            {moments.map(it => {
                return it.isSame(now) ?
                    <DateCell ref={currentDayRef} date={it} /> :
                    <DateCell date={it} />
            })}
            {moments.map(it => {
                return <DayCell col={it.diff(now, 'days') + from + 1} />
            })}
            {events.map(it => {
                const col = moment.utc(it.startDate).local().diff(now, 'days') + from;
                const len = moment.utc(it.endDate).diff(moment.utc(it.startDate), 'days') + 1;
                return <EventOnGrid col={col} len={len} color="#4786ff" task="test task" />
            })}
        </Grid>
    );
}
export default Table;
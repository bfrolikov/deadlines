import DateCell from './DateCell';
import styled from 'styled-components';
import moment from 'moment';
import Event from './Event';
import React, { useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

const colors = {
    1: '#4786ff', //blue
    2: '#d32f2f', //red
    3: '#4caf50', //green
    4: '#9c27b0', //purple
    5: '#ffc107', //amber
    6: '#ff5722' //orange
};

const eventHeight = 2.6;
const eventSpacing = 1.5; //TODO: maybe place these somewhere 

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.dayCount}, minmax(120px,1fr));
  grid-template-rows: 50px;
  grid-auto-rows: ${props => (eventSpacing + eventHeight) * props.eventCount + 2 * eventSpacing}em;
  overflow: auto;
  font-size:14px;
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
  align-self:start;
  margin-top: ${props => (eventSpacing + eventHeight) * props.itemNumber + eventSpacing}em;
  height:2.6em;
  z-index: 2;
`;

const CurrentDateCell = styled(DateCell)`
  background:#DCDCDC;
`;

const Table = ({ events }) => {
    const currentDayRef = useRef(null);
    useEffect(() => { currentDayRef.current.parentNode.scrollLeft = currentDayRef.current.offsetLeft - currentDayRef.current.parentNode.offsetLeft; }, []);
    const renderedDays = 13;
    const from = Math.floor((renderedDays - 1) / 2);
    const now = moment();
    const moments = Array.from({ length: renderedDays }, (v, i) => now.clone().add(-from + i, 'days'));
    return (
        <Grid dayCount={renderedDays} eventCount={events.length}>
            {moments.map(it => {
                return it.isSame(now) ?
                    <CurrentDateCell key={nanoid()} ref={currentDayRef} date={it} /> :
                    <DateCell key={nanoid()} date={it} />;
            })}
            {moments.map(it => {
                return <DayCell key={nanoid()} col={it.diff(now, 'days') + from + 1} />;
            })}
            {events.map((v, i) => {
                const col = moment.utc(v.startDate).local().diff(now, 'days') + from;
                const len = moment.utc(v.endDate).diff(moment.utc(v.startDate), 'days') + 1;
                const eventProps = {
                    key: v.id,
                    itemNumber: i,
                    col: Math.max(Math.min(col, renderedDays), 1),
                    len: len,
                    color: colors[v.color],
                    task: v.task,
                    stretchLeft: col < 1,
                    stretchRight: col + len - 1 > renderedDays
                };
                // eslint-disable-next-line react/jsx-key
                return <EventOnGrid {...eventProps} />;
            })}
        </Grid>
    );
};
export default Table;
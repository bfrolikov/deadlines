import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const HeaderCell = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-top: 1px solid rgba(34,36,38,.1);
  border-bottom: 1px solid rgba(34,36,38,.1);
  background: #f9fafb;
`
const DateCell = React.forwardRef(({ date }, ref) => {
    /*const dayOfWeek = processedMoment.format('dddd');
    <Header>{dayOfWeek.charAt(0).toLocaleUpperCase() + dayOfWeek.substr(1)}</Header>
    */
    return (
        <HeaderCell ref={ref}>
            <Header as="h2">{date.format('DD.MM')}</Header>
        </HeaderCell>
    )
});
export default DateCell;
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import 'moment/locale/ru';
import { Header } from 'semantic-ui-react';
moment.locale('ru');

const HeaderCell = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-top: 1px solid rgba(34,36,38,.1);
  border-bottom: 1px solid rgba(34,36,38,.1);
  background: #f9fafb;
`
const DateCell = React.forwardRef(({ offset }, ref) => {
    const processedMoment = moment().add(offset, 'days');
    /*const dayOfWeek = processedMoment.format('dddd');
    <Header>{dayOfWeek.charAt(0).toLocaleUpperCase() + dayOfWeek.substr(1)}</Header>
    */
    return (
        <HeaderCell ref={ref}>
            <Header as="h2">{processedMoment.format('DD.MM')}</Header>
        </HeaderCell>
    )
});
export default DateCell;
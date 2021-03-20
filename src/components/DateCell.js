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
`;
const DateCell = React.forwardRef(({ date, className }, ref) => {
    return (
        <HeaderCell ref={ref} className={className}>
            <Header as="h2">{date.format('DD.MM')}</Header>
        </HeaderCell>
    );
});
DateCell.displayName = 'DateCell';
export default DateCell;
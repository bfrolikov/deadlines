/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Segment, Header, Dropdown, Grid, GridColumn } from 'semantic-ui-react';
import styled from 'styled-components';
import Table from './Table';
const events =
    [{
        id: 1,
        startDate: '2021-03-16T12:02:00', //UTC
        endDate: '2021-03-20T12:02:00', //UTC
        color: 1,
        task: 'Algorithms lab work'
    },
    {
        id: 2,
        startDate: '2021-03-07T12:02:00', //UTC
        endDate: '2021-03-16T12:02:00', //UTC
        color: 2,
        task: 'Discrete lab work'
    },
    {
        id: 3,
        startDate: '2021-03-07T12:02:00', //UTC
        endDate: '2021-03-16T12:02:00', //UTC
        color: 3,
        task: 'Discrete lab work'
    },
    {
        id: 4,
        startDate: '2021-03-07T12:02:00', //UTC
        endDate: '2021-03-16T12:02:00', //UTC
        color: 5,
        task: 'Discrete lab work'
    },
    {
        id: 6,
        startDate: '2021-03-17T12:02:00', //UTC
        endDate: '2021-03-19T12:02:00', //UTC
        color: 6,
        task: 'Сосать + лежать'
    }
    ];

const CustomPaddingSegment = styled(Segment)`
  padding:0px !important;
`;
const Centered = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Wrapper = styled(Centered)`
  height:100vh;
`;
const TableHeader = styled(Header)`
  margin-top:10px !important;
  margin-bottom:10px !important;
  font-size:1.9em !important;
`;
const TimelineScreen = () => {
    return (
        <div>
            <Wrapper>
                <Container>
                    <CustomPaddingSegment raised>
                        <Centered>
                            <TableHeader>
                                Timeline
                            </TableHeader>
                        </Centered>
                        <Table events={events} />
                    </CustomPaddingSegment>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>

                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Wrapper>
        </div>
    );
};

export default TimelineScreen;

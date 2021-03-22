/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import { Container, Segment, Header, Input, Grid, Button, Label, Dropdown } from 'semantic-ui-react';
import eventService from '../services/events';
import styled from 'styled-components';
import Table from './Table';
import { nanoid } from 'nanoid';
import moment from 'moment';

const CustomPaddingSegment = styled(Segment)`
  padding:0px !important;
`;
const Centered = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Stacked = styled.div`
  display:flex;
  flex-direction:column;
`;
const FullPageGrid = styled(Grid)`
  height:100vh;
`;
const TableHeader = styled(Header)`
  margin-top:10px !important;
  margin-bottom:10px !important;
  font-size:1.9em !important;
`;

const AddNewEventSection = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  @media(max-width:750px) {
      flex-direction:column;
      align-items:flex-start;
  }
`;
const InputWithSelectorAndButton = styled.div`
  display:flex;
  flex-grow:2;
  justify-content:space-between;
  margin-left:25px;
  @media(max-width:750px) {
      margin-left:0px;
      margin-top:10px;
      width:100%;
  }
  @media(max-width:600px) {
      flex-wrap:wrap;
  }
  @media(max-width:400px) {
      flex-wrap:nowrap;
      flex-direction:column;
  }
`;
const AddButton = styled(Button)`
  @media(max-width:478px){
    margin-top:15px !important;
  }
  @media(max-width:400px) {
       width:100%;
       margin-top:10px !important;
  }
`;
const ColorSelector = styled(Dropdown)`
  width:92px;
  margin-right:15px;
  @media(max-width:400px) {
       width:100%;
       margin-right:0px;
       margin-top:10px;
  }
`;
const EventNameInput = styled(Input)`
  margin-right:15px;
  flex-grow:2;
  max-width:500px;
  @media(max-width:400px) {
    margin-right:0px;
    width:100%;
  }
`;
const TransparentLabel = styled(Label)`
  background: transparent !important;
  width:90px;
  font-size:13px !important;
`;

const SelectorWithLabel = styled.div`
  display:flex;
  align-items:center;
`;

const colorOptions = [
    {
        key: 'Blue',
        text: 'Blue',
        value: 0
    },
    {
        key: 'Red',
        text: 'Red',
        value: 1
    },
    {
        key: 'Green',
        text: 'Green',
        value: 2
    },
    {
        key: 'Purple',
        text: 'Purple',
        value: 3
    },
    {
        key: 'Amber',
        text: 'Amber',
        value: 4
    },
    {
        key: 'Orange',
        text: 'Orange',
        value: 5
    }
];
const TimelineScreen = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [currentColor, setCurrentColor] = useState(0);
    const [currentTask, setCurrentTask] = useState('');
    useEffect(async () => {
        try {
            const res = await eventService.getEvents();
            setEvents(res);
        } catch (error) {
            console.log('Error loading data');
        }
    }, []);
    const createNewTask = async () => {
        const newEvent = {
            id: nanoid(),
            startDate: moment(startDate).utc().format(),
            endDate: moment(endDate).utc().format(),
            color: currentColor,
            task: currentTask
        };
        try {
            const res = await eventService.createNew(newEvent);
            setEvents(events.concat(res));
        } catch (error) {
            console.log('Error creating new task');
        }

    };
    return (
        <FullPageGrid verticalAlign='middle'>
            <Grid.Column>
                <Container>
                    <CustomPaddingSegment raised>
                        <Centered>
                            <TableHeader>
                                Timeline
                            </TableHeader>
                        </Centered>
                        <Table events={events} />
                    </CustomPaddingSegment>
                    <Segment>
                        <AddNewEventSection>
                            <Stacked>
                                <SelectorWithLabel>
                                    <TransparentLabel horizontal>Start date:</TransparentLabel>
                                    <DatePicker
                                        onChange={setStartDate}
                                        value={startDate}
                                    />
                                </SelectorWithLabel>
                                <SelectorWithLabel>
                                    <TransparentLabel horizontal>End date:</TransparentLabel>
                                    <DatePicker
                                        onChange={setEndDate}
                                        value={endDate}
                                    />
                                </SelectorWithLabel>
                            </Stacked>
                            <InputWithSelectorAndButton>
                                <EventNameInput
                                    value={currentTask}
                                    onChange={({ target }) => { setCurrentTask(target.value); }}
                                    placeholder='Enter task name...' />
                                <ColorSelector
                                    options={colorOptions}
                                    selection
                                    compact
                                    value={currentColor}
                                    onChange={(e, { value }) => { setCurrentColor(value); }} />
                                <AddButton primary onClick={createNewTask}>Add new</AddButton>
                            </InputWithSelectorAndButton>
                        </AddNewEventSection>
                    </Segment>
                </Container>
            </Grid.Column>
        </FullPageGrid>
    );
};

export default TimelineScreen;

import './App.css';
import React from 'react';
import moment from 'moment';
import { Container } from 'semantic-ui-react';
import Table from './components/Table';
const events =
    [{
        startDate: "2021-03-16T23:02:00", //UTC
        endDate: "2021-03-20T23:02:00", //UTC
        color: 1,
        task: "Algorithms lab work"
    },
    {
        startDate: "2021-03-07T23:02:00", //UTC
        endDate: "2021-03-16T23:02:00", //UTC
        color: 3,
        task: "Discrete lab work"
    }
    ];
const App = () => {
    return (
        <div className="App">
            <Container>
                <Table events={events} />
            </Container>
        </div>
    );
}

export default App;

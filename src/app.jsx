import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from './components/datePicker'

function App() {
    function select(date) {
        console.log(date)
    }

    return <DatePicker date="2019-8-25" onSelect={select} />
}

ReactDOM.render(<App />, document.getElementById('app'))

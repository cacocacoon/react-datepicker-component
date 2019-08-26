import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './components/calendar'

function App() {
    return <Calendar selectedDate="2019-2-25"/>
}

ReactDOM.render(<App />, document.getElementById('app'))

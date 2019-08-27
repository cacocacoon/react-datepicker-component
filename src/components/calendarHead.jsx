import React from 'react'

export default function CalendarHead({ back, clickHeadButton, forward, text }) {
    return (
        <div className="head">
            <div className="center pointer" onClick={back}>{"<"}</div>
            <div className="head-button center pointer" onClick={clickHeadButton}>{text}</div>
            <div className="center pointer" onClick={forward}>{">"}</div>
        </div>
    )
}
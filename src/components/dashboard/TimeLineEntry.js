import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';

export default function TimeLineEntry(props) {
    const bodyContainerStyle = {
        background: 'silver',
        margin: '0 10px 0 15px',
        padding: '5px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}
    return (
        <TimelineItem
            dateText={props.change_date}
            style={{ color: '#76bb7f' }}
            dateInnerStyle={{ background: '#76bb7f', color: '#000' }}
            bodyContainerStyle={bodyContainerStyle}>
                <h5>{props.user_name}</h5>
                <h6 style={{ color: 'blue' }}>{props.task_title}</h6>
                <p>
                    Change Status to <i style={{color: 'green'}}>{props.status}</i>
                </p>
        </TimelineItem>
    )
}

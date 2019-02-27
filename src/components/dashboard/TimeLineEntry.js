import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';

export default function TimeLineEntry(props) {
    const bodyContainerStyle = {
        background: 'lightgray',
        margin: '0 10px 0 15px',
        padding: '5px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}
        let statusColor = '';
        if (props.status === 'finished')
            statusColor = 'green'
        else if(props.status === 'waiting')
            statusColor = '#ffeb3b'
        else if(props.status === 'inprocess')
            statusColor = 'orangered'
        else
            statusColor = 'blue'
    return (
        <TimelineItem
            dateText={props.change_date}
            style={{ color: statusColor }}
            dateInnerStyle={{ background: statusColor, color: '#000' }}
            bodyContainerStyle={bodyContainerStyle}>
                <h4>{props.user_name}</h4>
                <h5 style={{ color: 'blue' }}>{props.task_title}</h5>
                <p>Change Status to <span style={{color: statusColor}}>{props.status}</span></p>
        </TimelineItem>
    )
}

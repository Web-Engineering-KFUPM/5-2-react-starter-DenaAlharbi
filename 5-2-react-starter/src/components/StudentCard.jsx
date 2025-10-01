import React from 'react';

function StudentCard(probs) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Student ID: {props.id}</p>
            <p>Department: {props.dept}</p>
        </div>
    );
}

export default StudentCard;

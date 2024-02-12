import React from 'react'

function Task(props) {
    // const array=props.p
    return (
        <div>
            <li className="shadow p-2 my-2 col-sm-9" style={{color:'black'}}>{props.value}</li>
            <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.sendData(props.id) }}>X</button>

        </div>
    )
}

export default Task;

import React from 'react';

const Edit = ({ log })=>{
    return(
        <div>
            <h1>Edit log</h1>
            <form action={'/log/${log._id}?_method=PUT'} method='POST'>
                <label>
                    Title: 
                    <input type='text' name='title' defaultValue={log.title} require />
                </label>
                <br />
                <label>
                    Entry: 
                    <textara name='entry' defaultValue={log.entry}  requires></textara>
                </label>
                <br /> 
                <label>
                    Is the ship broken? 
                    <input type='checkbox' name='shipIsBroken' defaultChecked={log.shipIsBroken} />   
                </label>
                <br /> 
                <button type='submit'> Update log</button>
            </form>
            <a href={'/logs/${log._id}'}> Cancel </a>
        </div>
    );
};

export default Edit; 

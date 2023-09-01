import React from 'react';

const New = () => {
    return(
        <div>
        <h1>Captain's log </h1>

        <form action='/logs' method='POST'>
           <label>
           Title:  
           <input type='text'  name='title' required />
            </label> 
            <br/> 
            <label>
                Entry: 
                <textarea name='entry' requires></textarea>
            </label>
            <br /> 
            <label>
                Is the ship broken? 
                <input type='checkbox' name='shipIsBroken' /> 
            </label>
            <br/> 
        <input type='submit' value='Create log' />

        <label>
            <input type='checkbox' name='shipIsBroken' value={true}/> 
        </label>

        </form>
        </div> 
    )}; 

export default New; 


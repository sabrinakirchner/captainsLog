import React from 'react'; 

const Show = ({ log }) => {
    return(
        <div>
            <h1>{log.title}</h1>
            <p>{log.entry}</p>
            <p>Ship is {log.shipIsBroken ? 'broken':'not broken'}</p>
            <a href='/logs'>Back to logs</a>
        </div>
    );
};

export default Show; 

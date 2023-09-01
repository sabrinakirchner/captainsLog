import React from 'react'; 


const Index = ({ logs }) => {
    return(
        <div>
            <h1>Captains logs </h1>
            <ul>
                {logs.map(log => (
                    <li key={log._id}>
                    <a href={'/logs/${log._id}'}>{log.title}</a>
                    <a href={'/logs/${log._id}/edit'}>Edit</a>
                    <form action={'logs/${log._id}?_method=DELETE'} method='POST'>
                        <button type='submit'>Delete</button>
                        </form>
                    </li>
                ))}
            </ul>
            <a href='/logs/new'>Create New Log</a>
        </div>
    );
};

export default Index; 
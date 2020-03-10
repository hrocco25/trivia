import React from 'react';
import './main.css';
import{Link} from 'react-router-dom'


function Main(props) {

    return (
        <div>
            <div className='main'>
                <Link to='/general'><h2>General Questions</h2></Link>
            </div>
            
        </div>
    )
}
export default Main
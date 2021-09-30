import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Friends from '../Friends/Friends';
const Friend=(props)=>{
    const {name,id, phone, website, address} = props.friend;
    const history= useHistory();
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px', 
        borderRadius: '10px'
    }
    const url =`/friend/${id}`;
    
    const handleClick =()=>{
    //   history.push('/home')   
      history.push(`/friend/${id}`)   
    }
    return(
     <div style={friendStyle}>
         <h1>i am {name}{id}</h1>
         <h3>call me {phone}</h3>
         <h3>visit {website}</h3>
         <h1>i am {address.city}</h1>
         <Link to={url}>Vist Me</Link>
         <br />
         <button onClick={handleClick}>Visit me2</button>
     </div>

    );
};
export default Friend
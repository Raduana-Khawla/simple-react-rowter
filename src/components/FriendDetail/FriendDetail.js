import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const FriendDetail=()=>{
    const { friendId} = useParams();
    const [friend, setFriend]=useState({})
    const history = useHistory();
    const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
    useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=> setFriend(data));
    },[])
    const handleonClick=()=>{
           history.push('/friends');
    }
    return(
           <div><h3>Friend Detail of: {friendId}</h3>
           <h1>{friend.name}</h1>
           <h1>{friend.phone}</h1>
           <h1>{friend.website}</h1>
           <p>works at:{friend.company?.name}</p>
         
           <button onClick={handleonClick}>See all Friends</button>
           </div>
    )
}
export default FriendDetail;
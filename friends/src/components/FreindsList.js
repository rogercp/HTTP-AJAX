import React from 'react'

import Friend from './Friend'

const FriendsList = (props)=>{

    return (
                <div>
                {props.friends.map(friend=>(
                    <Friend key={friend.id} friend={friend}/>
                ))} 
                </div>      
        )

}
export default FriendsList
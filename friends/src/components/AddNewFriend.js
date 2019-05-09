import React from 'react'

const AddNewFriend =(props)=> {
    
    return (
        <form onSubmit={props.addFriend}>
            <input
            type="text"
            placeholder="...name"
            name="newFriendName"
            onChange={props.onChange}
            value={props.data.newFriendName}
            />

            <input
            type="text"
            placeholder="...age"
            name="newFriendAge"
            onChange={props.onChange}
            value={props.data.newFriendAge}
            />

            <input
            type="text"
            placeholder="...email"
            name="newFriendEmail"
            onChange={props.onChange}
            value={props.data.newFriendEmail}
            />
        <button type="submit">Add</button>
        </form>

      );
    
}
 
export default AddNewFriend;
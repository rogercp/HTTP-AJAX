import React from 'react'

const AddNewFriend =(props)=> {
    
    return (
        <form>
            <input
            type="text"
            placeholder="...name"
            name="newFriendName"
            onChange={props.onChange}
            />

            <input
            type="text"
            placeholder="...age"
            name="newFriendAge"
            onChange={props.onChange}
            />

            <input
            type="text"
            placeholder="...email"
            name="newFriendEmail"
            onChange={props.onChange}
            />
        <button >Add</button>
        </form>

      );
    
}
 
export default AddNewFriend;
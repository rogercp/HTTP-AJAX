import React from 'react'


const Friend =(props)=>{

    return (
        
            <tr>
                <td>{props.friend.name}</td>
                <td>{props.friend.age}</td>
                <td>{props.friend.email}</td>
                <td><button onClick={e=>props.delete(e,props.friend.id)}>delete</button></td>
            </tr>
           
    )


}
export default Friend
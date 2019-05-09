import React from 'react'


class UpdateFriend extends React.Component{
    constructor(props){
        super(props);
        this.state={
            friend:{
            friendName:'roger',
            friendAge:'22',
            friendEmail:'roger.com',
            }
        }

    }

    handleChanges=e=>{
        this.setState({
            friend:{
                ...this.state.friend,
                [e.target.name]:e.target.value
            }
        })
    }

    putMessage=e=>{
        e.preventDefault();
        this.props.updateFriend(this.state.friend, 23)
    }



            render (){

                return (

                    <form onSubmit={this.putMessage}>
                            <input
                            type="text"
                            placeholder="...name"
                            name="newFriendName"
                            onChange={this.handleChanges}
                            value={this.state.friend.friendName}
                            />

                            <input
                            type="text"
                            placeholder="...age"
                            name="newFriendAge"
                            onChange={this.handleChanges}
                            value={this.state.friend.friendAge}
                            />

                            <input
                            type="text"
                            placeholder="...email"
                            name="newFriendEmail"
                            onChange={this.handleChanges}
                            value={this.state.friend.friendEmail}
                            />
                        <button type="submit">update</button>
                        </form>
                )
            }
}

export default UpdateFriend;
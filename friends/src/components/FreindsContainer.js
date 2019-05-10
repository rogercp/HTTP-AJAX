import React from 'react'
import axios from 'axios'

import FriendsList from './FreindsList'
import AddNewFriend from './AddNewFriend'
import UpdateFriend from './UpdateFriend'

class FriendsContainer extends React.Component {
    constructor(){
        super();
        this.state = {  
            friends:[],
            // error:'',
            newFriendName:'',
            newFriendAge:'',
            newFriendEmail:'',
            
        }
    }
    componentDidMount(){

        axios
        .get("http://localhost:5000/friends")
        .then(res=>{
              console.log(res)
                this.setState({friends:res.data});
        })
        .catch(error=>{
                console.log(error)
               this.setState({error:error})
            })

    }

    addNewFriend=e=>{
        e.preventDefault();
        const newFriend={
            id:this.state.friends.length+1,
            name:this.state.newFriendName,
            age:this.state.newFriendAge,
            email:this.state.newFriendEmail,
        }
        axios.post("http://localhost:5000/friends", newFriend)
        .then(res=>{
            this.setState({
                friends:res.data,
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    deleteFriend=(e,id)=>{
        e.preventDefault();

        axios.delete(`http://localhost:5000/friends/${id}`)
        .then(res=> this.setState({
            friends:res.data,
            }))
        .catch(error=>{
            console.log(error)
        })
    }

    updateFriend=(friend,id)=>{
        axios.put(`http://localhost:5000/friends/${id}`, friend)
        .then(res=>this.setState({friends:res.data,}))
        .catch(error=>{
            console.log(error)
        })
    }




    onChange=e=>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })


    }
    render() { 
       console.log(this.state.friends)
        return ( 
        <div>
            <FriendsList friends={this.state.friends}  delete={this.deleteFriend}/>
            <AddNewFriend onChange={this.onChange} addFriend={this.addNewFriend} data={this.state}/>
            <UpdateFriend updateFriend={this.updateFriend}/>
        </div>
           
         );
    }
}
 
export default FriendsContainer;
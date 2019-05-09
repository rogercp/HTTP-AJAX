import React from 'react'
import axios from 'axios'

import FriendsList from './FreindsList'
import AddNewFriend from './AddNewFriend'

class FriendsContainer extends React.Component {
    constructor(){
        super();
        this.state = {  
            friends:[],
            error:'',
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
            <FriendsList friends={this.state.friends}/>
            <AddNewFriend onChange={this.onChange}/>
        </div>
           
         );
    }
}
 
export default FriendsContainer;
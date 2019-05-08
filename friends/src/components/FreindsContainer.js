import React from 'react'
import axios from 'axios'

import FriendsList from './FreindsList'


class FriendsContainer extends React.Component {
    constructor(){
        super();
        this.state = {  
            friends:[],
            error:''
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

    render() { 
       console.log(this.state.friends)
        return ( 
            <FriendsList friends={this.state.friends}/>
         );
    }
}
 
export default FriendsContainer;
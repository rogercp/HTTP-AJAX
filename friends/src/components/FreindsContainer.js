import React from 'react'
import axios from 'axios'

import FriendsList from './FreindsList'

class FriendsContainer extends React.Component {
    constructor(){
        super()
        this.state = {  
            friends:[],
        }
    }
    componentDidMount(){

        axios
            .get('http://localhost:5000/friends')
            .then(res=>{
                console.log(res);
                this.setState({friends:res.friends})
            })
            .catch(error=>{
                console.log(error)
                this.setState({error:error.response.message})
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
import React, {Component} from 'react'
import axios from 'axios'
import './reset.css'
import './Posts.css'


export default class Posts extends Component{
    constructor(){
        super()
        this.state = {
            thePosts : []
        }
        
    }
       componentDidMount(){
           //axios call for posts
       }
    
    render(){
        let posts = this.state.thePosts.map((ele) =>{
            return(
                <div>
                    <h3>{ele.title}</h3>
                    <h4>{ele.date}</h4>
                    <p>{ele.content}</p>
                </div>
            )
        })
    return (
    
    <div className='mainDiv'>
        <h1 className='header'>Posts</h1>
        {posts}
        
    </div>)
}
}


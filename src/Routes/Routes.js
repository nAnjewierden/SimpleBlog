import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Posts from '../Components/Posts/Posts'
import NewPost from '../Components/NewPost/newPost'


export default(
<Switch>
    <Route exact path='/' component={Posts}/>
    <Route path='/newPost' component={NewPost}/>
</Switch>
)
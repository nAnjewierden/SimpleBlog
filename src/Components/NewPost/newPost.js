import React, {Component} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import './reset.css'
import './NewPost.css'


export default class NewPost extends Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    render(){
        
        return (
    <div className='mainDiv'>
        <h1 className='header'>New Post</h1>
        <Form>
            <FormGroup row>
                <Label for="exampleEmail">Title</Label>
                <Input type="email" name="email" id="postTitle" placeholder="Title of post" />
            </FormGroup>
            <FormGroup row>
                <Label for="exampleText">Content</Label>
                <Input type="textarea" name="text" id="postContent" />
                <Button color='primary' outline>Post</Button>
            </FormGroup>
        </Form>
    </div>
    )
}
}


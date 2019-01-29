import React, {Component} from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
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
            <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Content</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
        </Form>
    </div>
    )
}
}


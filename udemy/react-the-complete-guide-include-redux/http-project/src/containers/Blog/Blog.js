import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            selectedPostId: false,
            error: false
        }

        this.postSelectedHandler = this.postSelectedHandler.bind(this);
    }
    componentDidMount(){
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts =  posts.map( post => ( {...post, author: 'lukete'} ))
                this.setState({ posts: updatePosts})
            })
            .catch(err => this.setState({error: true}))
    }

    postSelectedHandler(id){
        this.setState({
            selectedPostId: id
        })
    }
    render () {
        return (
            <div>
                <section className="Posts">
                    {
                        (this.state.error) 
                            ? <p style={{textAlign: 'center'}}>Something went wrong!!</p> 
                            : this.state.posts.map(post => (
                                <Post  {...post} key={post.id} clicked={ () => this.postSelectedHandler(post.id)}/>
                              ))
                    }
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
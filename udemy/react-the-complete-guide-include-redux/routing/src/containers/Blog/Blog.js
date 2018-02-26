import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNePost = asyncComponent(() => {
    return import('../../hoc/asyncComponent');
});

import './Blog.css';
// import FullPost from './FullPost/FullPost';
class Blog extends Component {
   state = {
       auth: true
   }
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/posts">Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                            pathname: '/new-post',
                                            hash: '#submit',
                                            search: '?quick-submit=true'
                                            }}>
                                New post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ?  (<Route path="/new-post" component={AsyncNePost} />) : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>}/>
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    
                </Switch>
            </div>
        );
    }
}

export default Blog;
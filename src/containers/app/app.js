import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import FullPost from '../../components/full-post';
import PostGroup from '../../components/post-group';

class App extends Component {

  state = {
    posts: [],
    activePost: '',
    loading: true
  }  

  onClick = (id) => {
    const post = this.state.posts.find((p) => p.id === id);

    this.setState({
      activePost: post
    });
  }

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    const { getData } = this.props;

    getData()
      .then((posts) => {
        this.setState({
          posts,
          loading: false
        });
      });
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/post/:id" component={() => <FullPost data={this.state.activePost} />} />
            <Route path="/" component={() => <PostGroup onClick={this.onClick} data={this.state.posts} loading={this.state.loading}/>} />
            <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
          </Switch>
      </div>
    );
  }
}

export default App;

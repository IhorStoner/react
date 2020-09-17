import React, { Component } from 'react'
import { Comment, Loader } from 'semantic-ui-react'

export default class Comments extends Component {
  state = {
    comments: [],
    postId: this.props.postId,
    isCommentNotFetching: true,
  }

  componentDidMount = () => {
    this.setState({ isCommentNotFetching: false });

    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}/comments`)
      .then(response => response.json())
      .then(comments => {
        this.setState({ comments })
      })
  }
  
  render() {
    const { comments, isCommentNotFetching } = this.state;

    return (
      <div>
        <Loader size="small" active={isCommentNotFetching} inline />
        <Comment.Group>
        <h3>Comments:</h3>
        
          {
            comments.map(comment => (
              <Comment key={comment.id}>
              <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
              <Comment.Content>
              <Comment.Author>{comment.name}</Comment.Author>
                <Comment.Metadata>
                  <div>{comment.email}</div>
                </Comment.Metadata>
                <Comment.Text>
                  {comment.body}
                </Comment.Text>
              </Comment.Content>
              </Comment>
            ))
          }
      </Comment.Group>
      </div>
    )
  }
}

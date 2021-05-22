import React, {Component} from 'react'
import api from '../../api/api'

export default class Posts extends Component {
  state = {
    post: {},
  }
  
  async componentDidMount(){
    const { id } = this.props.match.params
    
    const response = await api.get(`/posts/${id}`)
    console.log(response)
    this.setState({ post: response.data })
  }
  render(){
    const { post } = this.state
    return (
      <div className="post-info">
        <h1>{post.title}a</h1>
        <p>{post.content}</p>

        <p>URL: <a href={post.url}>{post.url}dd</a></p>
      </div>
    )
  }
}

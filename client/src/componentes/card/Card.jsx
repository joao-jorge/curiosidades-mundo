import React, {Component} from 'react'
import CardItem from './CardItem'
import {Button} from '../several/Button'
import './Card.css'
import api from '../../api/api'

export class Card extends Component {
  state = {
    posts: [],
    postsInfo: {},
    page: 1,
  }
  
  componentDidMount(){
    this.loadPost()
  }

  loadPost = async (page = 1) => {
    const response = await api.get(`/posts?page=${page}`)

    const {docs, ...postsInfo} = response.data

    this.setState({posts: docs, postsInfo, page})

    
  }

  nextPage = () => {
    const {page, postsInfo} = this.state
    if(page === postsInfo.pages) return

    const pageNumber = page + 1

    this.loadPost(pageNumber)
  }

  prevPage = () => {
    const {page, postsInfo} = this.state
    if(page === 1) return

    const pageNumber = page - 1

    this.loadPost(pageNumber)
  }

  render(){
    return (
      <>
        <div className='cards'>
        <h1>Últimos Posts</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {this.state.posts.map(posts => (
                <CardItem 
                src='/img/logo.png'
                text={posts.content}
                label={posts.tag}
                path={`posts/show/${posts._id}`}
                title={posts.title}
                author={posts.author}
                date={posts.createdAt}
                
              />
              ))}
            </ul>
            <ul className="cards__items">
              {this.state.posts.map(posts => (
                <CardItem 
                src='/img/logo.png'
                text={posts.content}
                label={posts.tag}
                path={`posts/${posts._id}`}
                title={posts.title}
                author={posts.author}
                date={posts.createdAt}
                
              />
              ))}
            </ul>
            <ul className="cards__items">
              {this.state.posts.map(posts => (
                <CardItem 
                src='/img/logo.png'
                text={posts.content}
                label={posts.tag}
                path={`posts/${posts._id}`}
                title={posts.title}
                author={posts.author}
                date={posts.createdAt}
              />
              ))}
            </ul>
          </div>
          
        </div>   
        <div className="actions">
        <Button buttonStyle='btn--primary' 
        onClick={this.prevPage}
        disabled={this.state === 1}
        >Anterior</Button>

        <Button buttonStyle='btn--primary' 
        onClick={this.nextPage}
        disabled={this.state === this.state.pages}
        >Proximo</Button>
      </div>     
      </div>
     
      </>
    )
  }
}

export default Card

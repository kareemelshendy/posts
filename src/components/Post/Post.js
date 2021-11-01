import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "../../contexts/PostsContext"
import styles from "../Post/Post.module.scss"

import postImage from "../../img/post-img.jpg"
function Post(props) {
  const { posts, dispatch } = useContext(PostContext)

  function handleDelete() {
    console.log(posts.indexOf(props.post))
    dispatch({ type: "DELETE_POST", value: posts.indexOf(props.post) })
  }
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={postImage} alt="" />
      </div>
      <Link to={`/edit/${posts.indexOf(props.post) + 1}`} className={styles.cardEdit} title="Edit">
        <i className="fas fa-pen"></i>
      </Link>
      <button onClick={handleDelete} title="Delete" className={styles.cardDelete}>
        <i className="fas fa-trash"></i>
      </button>
      <div className={styles.cardBody}>
        <div className={styles.cardAuthor}>
          <div>
            <i className="fas fa-user"></i>
            <h4>{props.post.author}</h4>
          </div>
          <p>{props.post.createdAt}</p>
        </div>
        <div>
          <div className="mt-1 mb-1">
            <h3>{props.post.title}</h3>
          </div>
          <div className={`${styles.cardContent} mb-1`}>
            <p>{props.post.content}</p>
          </div>
        </div>
        <Link className={styles.cardLink} to="/posts">
          see more <i className="fas fa-greater-than"></i>
        </Link>
      </div>
    </div>
  )
}

export default Post

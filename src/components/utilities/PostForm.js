import React from "react"
import { withRouter } from "react-router"
import { useForm } from "react-hook-form"

function PostForm({ postData, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: postData?.title,
      author: postData?.author,
      content: postData?.content,
    },
  })

  return (
    <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-2">
        <div className="form__group">
          <label className="form__group-label" htmlFor="title">
            Title
          </label>
          <input autoFocus {...register("title", { required: "* Title is required", maxLength: { value: 30, message: "* Title must be 30 charachters" } })} className={`form__group-input form__group-${errors.title?'error':'normal'}`} type="text" placeholder="Add title" />
          {errors.title && <p className="requiredError">{errors.title.message}</p>}
        </div>
        <div className="form__group">
          <label className="form__group-label" htmlFor="Author">
            Author
          </label>
          <input {...register("author", { required: "* Author is required", maxLength: { value: 30, message: "* author must be 30 charachters" } })} className={`form__group-input form__group-${errors.author?'error':'normal'}`}  type="text" placeholder="Add Author" />
          {errors.author && <p className="requiredError">{errors.author.message}</p>}
        </div>
      </div>
      <div className="form__group mt-2">
        <label htmlFor="title" className="form__group-label">
          Content
        </label>
        <textarea {...register("content",{required:"* Content is required",maxLength:{value:100,message:'* content must be 100 charachters'}})} className={`form__group-textarea form__group-${errors.content?'error':'normal'}`}  name="content" id="Content" cols="30" rows="10" placeholder="Add Content"></textarea>
        {errors.content && <p className="requiredError">{errors.content.message}</p>}
      </div>
      <div className="form__button">
        <button type="submit" className="btn btn-noBorder  mt-2">
          Add Post
        </button>
      </div>
    </form>
  )
}

export default withRouter(PostForm)

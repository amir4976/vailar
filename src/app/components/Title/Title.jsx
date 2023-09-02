"use client"
import style from'./title.module.css'

function Title({title,desc}) {
  return (
    <div className={style.titleContainer}>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default Title

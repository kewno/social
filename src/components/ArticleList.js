import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
let {articl} = props;
const articleElement = articl.map((article, index) =>
  <li key = {articl.id}><Article article = {article} defaultOpen = {index == 0} /></li>
)
  return (
    <ul>
      {articleElement}
    </ul>
  )
}

import React from 'react'
import Publisher from "../Publisher/Publisher.js"
import './Publishers.css'


const Publishers = (props) => {
  const papers = props.papers

  return (
    <div className="publishers">
      {papers.map((paper,i) => {
        return (
          <Publisher
            key={i}
            paper={paper}
            addNews={props.addNews}
            getPaperNews={props.getPaperNews}
          />
        )
      })}
    </div>
  )
}

export default Publishers

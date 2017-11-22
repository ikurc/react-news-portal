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
            getPaperNews={props.getPaperNews}
            getFromInput={props.getFromInput}
            getFromServer={props.getFromServer}/>
        )
      })}
    </div>
  )
}

export default Publishers

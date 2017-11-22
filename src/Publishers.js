import React from 'react'
import Publisher from "./Publisher"

const Publishers = (props) => {
  const papers = props.papers

  return (
    <div className="publishers">
      {papers.map((paper,i) => <Publisher key={i} paper={paper} getPaperNews={props.getPaperNews} getFromInput={props.getFromInput} getFromServer={props.getFromServer}/>)}
    </div>
  )
}

export default Publishers

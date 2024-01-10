import React from 'react'

const YoutubeItem = (props) => {
  return (
    <div className="Youtube_item">
      <div className="Youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="Youtube-footer">
        <img src={props.avatar} alt="" className="Youtube-avatar" />
        <div className="Youtube-info">
          <h2 className="Youtube-title">{props.title || "This is title"}</h2>
          <h2 className="Youtube-author">
            {props.author || "This is name of author"}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default YoutubeItem
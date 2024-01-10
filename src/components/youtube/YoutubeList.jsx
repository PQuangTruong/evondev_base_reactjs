import React from 'react'
import { YoutubeData } from '../../Data'
import YoutubeItem from './YoutubeItem'

const YoutubeList = (props) => {
  return (
    <div className="Youtube-list">
    {props.children}
    {YoutubeData.map((item, index) => (
      <YoutubeItem
        key={item.id}
        image={item.image}
        avatar={item.avatar || item.image}
        title={item.title || "This is title"}
        author={item.author || "This is author name"}
      />
    ))}
  </div>
  )
}

export default YoutubeList
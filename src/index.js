import React from 'react'
import Dnd from './component/Dnd'
import styles from './styles.module.css'

export const VolkenoReactDnd = (props) => {
  
  return (
    <div className="volkeno-react-dnd-container">
      <Dnd showResult={props.showResult} data={props.data} setData={props.setData} />
    </div>
  )
}

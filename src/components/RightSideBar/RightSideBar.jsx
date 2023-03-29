import React from 'react'
import Widgets from './Widgets'
import WidgetTags from './WidgetTags'
import './RightSideBar.css'
const RightSideBar = () => {
  return (
    <div>
     <aside className='right-sidebar'>
      <Widgets/>
      <WidgetTags />

     </aside>
    </div>
  )
}

export default RightSideBar
import React from 'react'
import Widgets from './Widgets'
import WidgetTags from './WidgetTags'
import './RightSideBar.css'
const RightSideBarTest = () => {
  return (
    <div>
     <aside className='right-sidebar-test'>
      <Widgets/>
      <WidgetTags />

     </aside>
    </div>
  )
}

export default RightSideBarTest
import React from 'react'
import './RightSideBar.css'
import pen from '../../assets/pen-solid.svg'
import comment from '../../assets/message-solid.svg'
import stack from '../../assets/stack-overflow.svg'

const Widgets = () => {
  return (
     <div className="widget">
      <h4>The Overflow blog</h4>
      <div className="right-sidebar-div-1">
      <div className="right-sidebar-div-2">
        <img src={pen} className='pen' alt='pen' width='18'/>
        <p>Observability is key to the future of software (and your Devops carrer)</p> 
      </div>
      <div className="right-sidebar-div-2">
        <img src={pen} className='pen' alt='pen' width='18'/>
        <p>Podcast 374: How valuable is your screen name?</p> 
      </div>
      </div>
      <h4>Featured on Merits</h4>
      <div className="right-sidebar-div-1">
      <div className="right-sidebar-div-2">
        <img src={comment}  alt='comment' width='18'/>
        <p>Review queue workflows - Final release...</p> 
      </div>
      <div className="right-sidebar-div-2">
        <img src={comment}  alt='comment' width='18'/>
        <p>Please welcome Valued Associates: #958 -V2Blast #959 - SpencerG</p> 
      </div>
      <div className="right-sidebar-div-2">
        <img src={stack}  alt='comment' width='18'/>
        <p>Outdated Answers: accepted answer is now unpinned on Stac Overflow</p> 
      </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
      <div className="right-sidebar-div-2">
        <p>38</p>
        <p>Why was this spam flag declined, yet the question marked as spam?</p> 
      </div>
      <div className="right-sidebar-div-2">
        <p>20</p>
        <p>What is the best course of action when a user has high enough rep to...</p>
      </div>
      <div className="right-sidebar-div-2">
        <p>14</p>
        <p>Is a link to the "How to ask" help page a useful comment</p>
      </div>
      </div>
     </div>
  )
}

export default Widgets
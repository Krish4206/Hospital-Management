import React from 'react'
import UnfilledButton from './UnfilledButton'
import FilledButton from './FilledButton'
import "./OrgFooter.css"

const OrgFooter = ({btn1,btn2}) => {
  return (
    <div className='org-footer'>
      <UnfilledButton text={btn1.text} handler={btn1.clickHandler}/>
      <FilledButton text={btn2.text} handler={btn2.clickHandler}/>
    </div>
  )
}

export default OrgFooter

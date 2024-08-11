import React from 'react'
import Heading from '../../common/Heading'
import OrgInfo from './OrgInfo'
import OrgFooter from '../../common/OrgFooter'

const CreateNewOrg = () => {
  return (
    <div>
      <Heading content={"Create New Org"}/>
      <OrgInfo/>
      <OrgFooter btn1={{text:"Cancel",clickHandler:()=>{}}} btn2={{text:"Confirm",clickHandler:()=>{}}}/>
    </div>
  )
}

export default CreateNewOrg

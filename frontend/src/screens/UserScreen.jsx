import React, { lazy, Suspense } from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import contactData from "../json files/contact.json"

// lazy loading
const Menu=lazy(()=>import('../components/Menu')
)


const UserScreen = () => {
     
    
    

  return (
    <div>
        <Header/>
        {/* lazy loading component */}
        <Suspense fallback={<div>Menu is Loading</div>}><Menu  /></Suspense>
        <Contact contactData={contactData}/>
      
    </div>
  )
}

export default UserScreen

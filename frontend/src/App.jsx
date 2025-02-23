import { useState } from 'react'
import './css/App.css'

import Navbar from './components/Navbar'
import ContactCard from './components/ContactCard'


// Note: the images are the assets folder and the assets is configured as the publicDir in vite.config.js
// Files in the public directory are served at the root path.
// Instead of /src/assets/Cat_2.png, use /Cat_2.png.
//
// NOTE: another way to import images is to use the import statement in the component file
// import Cat_1 from '../assets/Cat_1.png'
// and then use the variable in the src attribute of the img tag:
// <img src={Cat_1} alt={contact.image} />

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="contact-list">
        <ContactCard contact={{ name: 'Mr. Whiskerson', email: 'mr.whiskaz@catsrule.com', phone: '212-555-1234', image:'/Cat_1.png' }} />
        <ContactCard contact={{ name: 'Fluffykins', email: 'Fluff@supercat.com', phone: '212-555-2345', image:'/Cat_2.png' }} />
        <ContactCard contact={{ name: 'Felix', email: 'Felix@hotmail.org', phone: '212-555-4567', image:'/Cat_3.png' }} />
        <ContactCard contact={{ name: 'Pumpkin', email: 'pumpkin@cathospital.org', phone: '800-CAT-KING', image:'/Cat_4.png' }} />
      </div>
    </>
  );
}

export default App

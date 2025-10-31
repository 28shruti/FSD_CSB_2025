import React from 'react'
import Profile from './Profile.jsx';
import './Gallery.css'
function Gallery() {
  const student=
  [{pic:'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    myname:"Shruti",
    branch:"CS",
    section:"B",
    college:"ABESEC"
  },
  {
    pic:'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    myname:"vaibhavi",
    branch:"CS",
    section:"B",
    college:"ABESEC"
  },
  {
    pic:'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    myname:"Shailja",
    branch:"CS",
    section:"B",
    college:"ABESEC"
  },
  {
    pic:'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    myname:"Vanshika",
    branch:"CS",
    section:"B",
    college:"ABESEC"
  }
]  
// array using [{}]
  return (
    <div className='gallery'>
    {/* <div><Profile name="Shruti" branch="CS" section="B" college="ABESEC"/></div>
    <div><Profile name="Vaibhavi" branch="CS" section="C" college="ABESEC"/></div>
    <div><Profile name="Shailja" branch="CS" section="D" college="ABESEC"/></div> */}

    {/* <Profile data={student} /> */}
    {
      student.map((ele,index)=>(
        <Profile data={ele}  key={index} />
      ))
    }
    </div>
  )
}

export default Gallery
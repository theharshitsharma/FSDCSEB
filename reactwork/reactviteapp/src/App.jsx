import React from 'react'
import Student from './Student';
function App()
{
  const h1=<h1>FSD:-React Work</h1>;
  const mystyle={
    color:'blue',
    backgroundColor:'orange'
  }
  const studentdata=[{
    college:"ABES engineering college",
    name:"Harshit sharma",
    branch:"cs a",
    roll:22,
    section:"A"
  },
  {
    college:"ABES engineering college",
    name:"Harshit verma",
    branch:"cs a",
    roll:24,
    section:"A"
  },
  {
    college:"ABES engineering college",
    name:"Harshit maurya",
    branch:"cs a",
    roll:"235",
    section:"A"
  }]
  return (
    <div> <h2> Hello using use state hook</h2>
    {/* <div><UseStudentState /></div> */}
    </div>

    // <div style={{backgroundColor:'red'}}>
    //   {h1}
    //   <div style={mystyle}> 
    //     ABES Engineering college
    //   </div>
    //   <div style={{display:"flex"}}>
    //     {
    //       studentdata.map(
    //         (ele)=>{
    //           return <Student data={ele}/>
    //         }
    //       )
    //     }
    //     {/* <Student data={studentdata[1]}/> */}
    //     {/* <Student college="ABES ENGINEERING COLLEGE"
    //     name="harshit"
    //     branch="cse"
    //     Roll="12"
    //     section="a" 
    //     pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>}
    //    />

    //     <Student college="ABES ENGINEERING COLLEGE"
    //     name="sharma"
    //     branch="cse"
    //     Roll="13"
    //     section="b" />
    //      <Student college="ABES ENGINEERING COLLEGE"
    //     name="sharma"
    //     branch="cse"
    //     Roll="13"
    //     section="a" />*/}

    //   </div> 

    // </div>
  )
}
export default App
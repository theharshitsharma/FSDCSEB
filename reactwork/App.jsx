import React from 'react'
import Student from './Student';
function App()
{
  const h1=<h1>hello world</h1>;
  const mystyle={
    color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div style={{backgroundColor:'blueviolet'}}>
      {h1}
      <div style={mystyle}> 
        ABes Engineering college
      </div>
      <div>
        <Student college="ABES ENGINEERING COLLEGE"
        name="harshit"
        branch="cse"
        Roll="12"
        section="a" 
        pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>}
       />

        <Student college="ABES ENGINEERING COLLEGE"
        name="verma"
        branch="cse"
        Roll="13"
        section="a" />
         <Student college="ABES ENGINEERING COLLEGE"
        name="verma"
        branch="cse"
        Roll="13"
        section="a" />

      </div>
    </div>
  )
}
export default App
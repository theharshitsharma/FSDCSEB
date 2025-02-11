import React from 'react'
import Child1 from './component/Child1'

function AppProps() {
const data={
    name:"harshit sharma",
    branch:"cse",
    section:"b"
}
  return (
    <div>AppProps
        <Child1 child1data={data}/>
    </div>
  )
}

export default AppProps
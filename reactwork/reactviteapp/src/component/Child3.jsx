import React from 'react'

 function Child3({child3data}) {
  return (
    <div>Child3
        Name:{child3data.name}
        <br />
        Branch:{child3data.branch}
        <br />
        Section:{child3data.section}
    </div>
  )
}
export default Child3
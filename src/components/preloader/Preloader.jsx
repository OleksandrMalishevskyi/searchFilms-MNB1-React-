import React from 'react'

function Preloader() {
  return (
    <React.Fragment>
        <div className="progress">
            <div className="determinate" style="width: 70%"></div>
        </div>
    </React.Fragment>
  )
}

export default Preloader
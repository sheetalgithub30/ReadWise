import React from 'react'
import { ThreeCircles} from 'react-loader-spinner'

function Spinner() {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#7600bc"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
  )
}

export default Spinner
import React from "react";
import { connect, useSelector } from "react-redux";

const Shop = ()=> {

  const device = useSelector(state => state.deviceStore)
  console.log(device)

  return (
    <div>
      Shop
    </div>
  )
}

export default connect(null)(Shop);
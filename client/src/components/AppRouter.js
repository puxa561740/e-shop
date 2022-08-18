import React, { useState } from "react";
import {authRoutes, publickRoutes} from '../routes';
import {Routes, Router, Navigate, Route} from 'react-router-dom';
import Auth from "../pages/Auth";
import { SHOP_ROUTE } from "../utils/consts";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const AppRouter = ()=> {
    const user = useSelector(state=>state.user);
    console.log(user)
  return (
    <Routes>
      {user.Auth && authRoutes.map(({path, Component})=> 
          <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {publickRoutes.map(({path, Component})=> 
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      <Route path="*" element={<Navigate to ={SHOP_ROUTE} />}/>
    </Routes>
  )
}

export default connect(null)(AppRouter);
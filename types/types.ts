import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Component } from "react";

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({reducer:rootReducer})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch:() => AppDispatch = useDispatch



export interface UserInfo {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
  nationalId:string;
  profile: string;
}

export interface LoginInfo{
  email: string;
  password: string;
}


export interface UserName{
  username: string
}


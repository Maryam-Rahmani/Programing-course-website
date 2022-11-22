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

export interface CourseInfo{
  capacity: string;
  cost:  string;
  endDate: string;
  
}

export interface TeacherInfo{
  email: string;
  fullName: string;
  profile: string;
  id: string;

}

export interface LessonInfo{
  startDate: string;
  id: string;
  topics: string[];
  lessonName: string;
  description: string;

}

export interface CourseProps{
  teacher: string;
  description: string;
  lesson: string;
  cost: string;
  id: string;
  title: string;
}

export interface CourseList{
  teacher: TeacherInfo;
  lesson: LessonInfo;
  course: CourseInfo;
  cost: string;
  id: string;
  title: string;
}

export interface CourseListProps{
  courseList: CourseList[];
}


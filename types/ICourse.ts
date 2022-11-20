export interface ICourse {
    capacity:number;
    cost:number;
    endDate:string;
    lesson:Object;
    startDate:string;
    students?:Array<Object>;
    teacher:Object;
    title:string;
    _id:string;
  }
  
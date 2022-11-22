import { useState } from "react"
import { CourseProps} from "../../types/types"

const AddCourse: React.FC<CourseProps> = ({
  teacher,
  description,
  lesson,
  cost,
  id,
  title,
}) => {
    

    return(
        <div className="card" style={{width: "18rem;"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{lesson}</li>
          <li className="list-group-item">{cost}</li>
          <li className="list-group-item">{teacher}</li>
        </ul>
        <div className="card-body">
          <a href="#" className={id}>see course</a>
        </div>
      </div>
    )
}

export default AddCourse
import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
export interface SurveyProps {}

const Survey: React.FunctionComponent<SurveyProps> = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    axios
      .post("http://querateam1.herokuapp.com/api/course/like", {
        courseId: "60e9bef7cf9a610015612787",
        userId: "628284559a4090194c4c94bb",
      })
      .then((response) => {
        console.log(response.data);
      });

    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      alert("shoma ye bar like kardi ");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  ///
  const handleDisikeClick = () => {
    axios
      .post("http://querateam1.herokuapp.com/api/course/dislike", {
        courseId: "60e9bef7cf9a610015612787",
        userId: "628284559a4090194c4c94bb",
      })
      .then((response) => {
        console.log(response.data);
      });
    http: if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      alert("shoma ye ba deslike kardi");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <>
      <div className="btn-container">
        <button
          className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
          onClick={handleLikeClick}
        >
          <span className="material-symbols-rounded">
            {" "}
            <AiTwotoneLike />
          </span>
          Like {likeCount}
        </button>

        <button
          className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
          onClick={handleDisikeClick}
        >
          <span className="material-symbols-rounded">
            <AiTwotoneDislike />
          </span>
          Dislike {dislikeCount}
        </button>
      </div>
    </>
  );
};

export default Survey;

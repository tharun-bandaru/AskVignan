import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import "./HomeMainBar.css";
import QuestionList from "./QuestionList";
const HomeMainBar = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const user = useSelector((state) => state.currentUserReducer);
  const questionsList = useSelector((state) => state.questionsReducer);
  // console.log("checking", questionsList);
  // var questionsList = [
  //   {
  //     id: 1,
  //     votes: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be?",
  //     questionTags: ["java", "node js", "react js", "mongodb"],
  //     userPosted: "mono",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },

  //   {
  //     id: 2,
  //     votes: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "it meant to be?",
  //     questionTags: ["javascript", "R", "Python"],
  //     userPosted: "mono",
  //     askedOn: "jan 1",
  //     userId: "1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     votes: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "it meant to be?",
  //     questionTags: ["java", "node js", "react js", "mongodb"],
  //     userPosted: "mono",
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];

  const checkAuth = () => {
    if (user === null) {
      alert("login or sign up to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestions");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button to="/AskQuestions" onClick={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;

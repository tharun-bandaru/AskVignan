import React, { useState } from "react";
import moment from "moment";
import copy from "copy-to-clipboard";

import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowDownlg from "../../assets/ArrowDownLg.svg";
import ArrowUplg from "../../assets/ArrowUpLg.svg";
import Avatar from "../../Avtar/Avtar.jsx";
import DisplayAnswer from "./DisplayAnswer";
import "./Questions.css";
import {
  postAnswer,
  deleteQuestion,
  voteQuestion,
} from "../../actions/question";

const QuestionDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);

  //   var questionsList=[{
  //       id:'1',
  //       votes:3,
  //       upVotes:3,
  //       downVotes:2,
  //       noOfAnswers:2,
  //       questionTitle:"What is a function?",
  //       questionBody:"It meant to be?",
  //       questionTags:["java","node js","react js","mongodb"],
  //       userPosted:"mono",
  //       userId:1,
  //       askedOn:"jan 1",
  //       answer:[{
  //         answerBody:'Answer',
  //         userAnswered:'kumar',
  //         answeredOn: 'jan 2',
  //         userId:2,
  //       }]
  //     },

  //       {
  //         id:'2',
  //         votes:3,
  //         upVotes:3,
  //         downVotes:2,
  //         noOfAnswers:0,
  //         questionTitle:"What is a function?",
  //         questionBody:"it meant to be?",
  //         questionTags:["javascript","R","Python"],
  //         userPosted:"mono",
  //         askedOn:"jan 1",
  //         userId:'1',
  //         answer:[{
  //           answerBody:'Answer',
  //           userAnswered:'kumar',
  //           answeredOn: 'jan 2',
  //           userId:2,
  //         }]

  //       },
  //       {
  //         id:'3',
  //         votes:3,
  //         upVotes:3,
  //         downVotes:2,
  //         noOfAnswers:0,
  //         questionTitle:"What is a function?",
  //         questionBody:"it meant to be?",
  //         questionTags:["java","node js","react js","mongodb"],
  //         userPosted:"mono",
  //         askedOn:"jan 1",
  //         answer:[{
  //           answerBody:'Answer',
  //           userAnswered:'kumar',
  //           answeredOn: 'jan 2',
  //           userId:2,
  //         }]
  //       }];

  const [Answer, setAnswer] = useState("");
  const User = useSelector((state) => state.currentUserReducer);

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "https://stack-overflow-mhyb.onrender.com";

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied to Url" + url + location.pathname);
  };

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("login or signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        <div>{console.log("user checking", User)}</div>;
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  // const handleUpVote = () => {
  //   console.log("upvote meohto", id, User.result._id);

  //   dispatch(voteQuestion(id, "upVote", User.result._id));
  // };

  // const handleDownVote = () => {
  //   console.log("downvote meohto", id, User.result._id);
  //   dispatch(voteQuestion(id, "downVote", User.result._id));
  // };
  // const handleUpVote = () => {
  //   console.log(id, "upvote");
  //   dispatch(voteQuestion(id, "upVote", User.result._id));
  // };

  // const handleDownVote = () => {
  //   console.log(id, "downvote");
  //   dispatch(voteQuestion(id, "downVote", User.result._id));
  // };
  const handleUpVote = () => {
    console.log("upvote user id", User.result._id);

    dispatch(voteQuestion(id, "upVote", User.result._id));
  };

  const handleDownVote = () => {
    console.log("downvote user id", User.result._id);
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };

  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question.id}>
                <section className="question-details-container-1">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={ArrowUplg}
                        alt=""
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={ArrowDownlg}
                        alt=""
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>

                          {User?.result?._id === question?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p> asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                          >
                            <Avatar backgroundColor="orange" px="8px" py="10px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer
                      key={question.id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      id=""
                      name=""
                      rows="10"
                      cols="30"
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    browse other questions tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      Ask you Question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;

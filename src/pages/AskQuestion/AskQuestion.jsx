import React, { useState } from "react";
import "./AskQuestion.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User?.result?._id,
        },
        navigate
      )
    );

    //console.log({ questionTitle, questionTags, questionBody });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a Public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                type="text"
                id="ask-ques-title"
                placeholder="e.g Is there an R function"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyPress={handleEnter}
                id="ask-ques-body"
                rows="8"
                col="25"
              />
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                type="text"
                id="ask-ques-tags"
                placeholder="e.g (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            className="review-btn"
            value="Review your question"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;

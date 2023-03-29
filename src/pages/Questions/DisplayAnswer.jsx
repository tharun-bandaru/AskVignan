import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../Avtar/Avtar";
import "./Questions.css";
import { deleteAnswer } from "../../actions/question";

const DisplayAnswer = ({ question, handleShare }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans.id}>
          <p>{ans.answerBody}</p>
          <div className="question-action-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p style={{ marginBottom: "0%" }}>
                asked {moment(ans.answeredOn).fromNow()}
              </p>
              <div>{console.log("ans userId", ans.userId)}</div>
              <Link
                to={`/User/${question.userId}`}
                className="user-link"
                style={{ color: "#0086d8", textDecoration: "none" }}
              >
                <Avatar backgroundColor="green" px="8px" py="10px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;

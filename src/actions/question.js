import * as api from "../API/index";

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    console.log(data, "check data");
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllquestions();

    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const voteQuestion = (id, value) => async (dispatch) => {
//   try {
//     console.log("voted questoin exe1", id, value);
//     await api.voteQuestion(id, value);
//     console.log("voted questoin exe1", id, value);
//     dispatch(fetchAllQuestions());
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const voteQuestion = (id, value, userId) => async (dispatch) => {
//   try {
//     await api.voteQuestion(id, value, userId);
//     console.log("actiuonss", id, value, userId);
//     dispatch(fetchAllQuestions());
//   } catch (error) {
//     console.log(error);
//   }
// };

export const voteQuestion = (id, value, userId) => async (dispatch) => {
  try {
    console.log("actiuonss", id, value, userId);
    await api.voteQuestion(id, value, userId);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};
export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
    console.log("answer data", answerData);
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered,
      userId
    );
    console.log("post answer", data);
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    console.log("delete console");
    await api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

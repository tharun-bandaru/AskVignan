import { BrowserRouter as Router } from "react-router-dom";
import Allroutes from "./Allroutes";
import Navbar from "./components/Navbar/Navbar";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "./actions/users";

function App() {
  const dispatch = useDispatch();

  //this useEffect will run and the daata is stored in redux
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;

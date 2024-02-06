import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./redux/modules/calculator";

function App() {
  const dispatch = useDispatch();
  const totalNumber = useSelector((state) => state.calculator.totalNumber);
  const onChangeHandler = (event) => {
    setNumber(+event.target.value);
  };
  const plusNumber = () => {
    dispatch(plus(number));
  };
  const minusNumber = () => {
    dispatch(minus(number));
  };
  const [number, setNumber] = useState();

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={onChangeHandler} /> 만큼을
        <button onClick={plusNumber}>더할게요</button>
        <button onClick={minusNumber}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{totalNumber}</p>
      </div>
    </div>
  );
}

export default App;

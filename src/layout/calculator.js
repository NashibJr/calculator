import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LastButtons from "../components/lastButtonComponent";
import Row from "../components/numbers";
import {
  addNumbers,
  handleAnswer,
  handleDelete,
  handleReset,
} from "../redux/numbers/numberSlice";
import { layoutNumbers, lastButtons } from "../components/data";

const Calculator = () => {
  const dispatch = useDispatch();
  const numbers = useSelector((state) => state.numbers.numbers);

  const handleAnswers = () => {
    dispatch(handleAnswer());
  };

  const handleNumbers = (event) => {
    dispatch(addNumbers(event.target.value));
  };

  return (
    <div className="content">
      <h2>Calculator</h2>
      <div className="display">{numbers}</div>
      <div className="table-content">
        <table>
          {layoutNumbers.map((row, index) => (
            <Row
              key={index}
              index={index}
              values={row}
              addNumbers={handleNumbers}
              handleDelete={() => dispatch(handleDelete())}
              handleReset={() => dispatch(handleReset())}
            />
          ))}
          <tr>
            {lastButtons.map((button) => (
              <LastButtons
                values={button}
                handleAnswer={handleAnswers}
                handleNumbers={handleNumbers}
              />
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;

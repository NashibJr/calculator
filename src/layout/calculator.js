import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumbers,
  handleAnswer,
  handleDelete,
  handleReset,
} from "../redux/numbers/numberSlice";

const Calculator = () => {
  const dispatch = useDispatch();
  const handleNumbers = (event) => {
    dispatch(addNumbers(event.target.value));
  };
  const numbers = useSelector((state) => state.numbers.numbers);
  return (
    <div className="content">
      <h2>Calculator</h2>
      <div className="display">{numbers}</div>
      <div className="table-content">
        <table>
          <tr>
            <td>
              <input type="button" value="9" onClick={handleNumbers} />
            </td>
            <td>
              <input
                type="button"
                value="C"
                onClick={() => dispatch(handleReset())}
              />
            </td>
            <td>
              <input
                type="button"
                value="x"
                onClick={() => dispatch(handleDelete())}
              />
            </td>
            <td>
              <input type="button" value="+" onClick={handleNumbers} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="6" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="7" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="8" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="-" onClick={handleNumbers} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="3" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="4" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="5" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="/" onClick={handleNumbers} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="0" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="1" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="2" onClick={handleNumbers} />
            </td>
            <td>
              <input type="button" value="*" onClick={handleNumbers} />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="="
                onClick={() => {
                  dispatch(handleAnswer());
                }}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;

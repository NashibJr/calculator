import React from "react";

const Calculator = () => {
  const number = [];
  let number_ = 0;
  return (
    <div className="content">
      <h2>Calculator</h2>
      <div className="display">{number_}</div>
      <div className="table-content">
        <table>
          <tr>
            <td>
              <input type="button" value="9" />
            </td>
            <td>
              <input type="button" value="C" />
            </td>
            <td>
              <input type="button" value="x" />
            </td>
            <td>
              <input type="button" value="+" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="6" />
            </td>
            <td>
              <input type="button" value="7" />
            </td>
            <td>
              <input type="button" value="8" />
            </td>
            <td>
              <input type="button" value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="3" />
            </td>
            <td>
              <input type="button" value="4" />
            </td>
            <td>
              <input type="button" value="5" />
            </td>
            <td>
              <input type="button" value="/" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="0" />
            </td>
            <td>
              <input type="button" value="1" />
            </td>
            <td>
              <input type="button" value="2" />
            </td>
            <td>
              <input type="button" value="*" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="=" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;

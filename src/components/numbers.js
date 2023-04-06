import React from "react";

const Row = ({
  values: { num1, num2, num3, sign },
  addNumbers,
  handleDelete,
  handleReset,
  index,
}) => {
  return (
    <tr>
      <td>
        <input type="button" value={num1} onClick={addNumbers} />
      </td>
      <td>
        <input
          type="button"
          value={num2}
          onClick={index === 0 ? handleReset : addNumbers}
        />
      </td>
      <td>
        <input
          type="button"
          value={num3}
          onClick={index === 0 ? handleDelete : addNumbers}
        />
      </td>
      <td>
        <input type="button" value={sign} onClick={addNumbers} />
      </td>
    </tr>
  );
};

export default Row;

import React from "react";

const LastButtons = ({
  values: { point, equal },
  handleAnswer,
  handleNumbers,
}) => {
  return (
    <div>
      <td>
        <input type="button" value={point} onClick={handleNumbers} />
      </td>
      <td>
        <input type="button" value={equal} onClick={handleAnswer} />
      </td>
    </div>
  );
};

export default LastButtons;

import React from "react";

interface IAlrtProps {}

const Alrt: React.FunctionComponent<IAlrtProps> = () => {
  return (
    <div className="Alrt">
      <div className="conform">
        <div className="heading">
          <h3>Are you sure?</h3>
        </div>
        <div className="heading-p">
          <p>would you like to delete</p>
        </div>
        <div className="buttons">
          <div className="btn-1">
            <button>Yes</button>
          </div>
          <div className="btn-2">
            <button>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alrt;

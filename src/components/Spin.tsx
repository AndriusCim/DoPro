import React from "react";
import { Spinner } from "evergreen-ui";

const Spin: React.FC = () => {
  return (
    <div
      style={{ height: 730 }}
      className="cs-d-flex cs-align-items-center cs-justify-content-center"
    >
      <Spinner size={50} />
    </div>
  );
};

export default Spin;

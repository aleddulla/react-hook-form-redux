import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => (
    <div>
        <ClipLoader
          css={null}
          size={23}
          color={"#123abc"}
          loading={true}
        />
    </div>
);

export default LoadingSpinner;

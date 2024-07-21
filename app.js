import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
  return <h1>title</h1>;
};

const Heading = () => (
  <>
    <Title></Title>
    <Title />
    {(() => {
      return <h1>title</h1>;
    })()}
    <h1>Namste Reaction</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

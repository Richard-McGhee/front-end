import React from "react";
import propTypes from "prop-types";

export default function App(props) {
  const { greeting } = props;

  return <h1>{greeting}</h1>;
}

App.propTypes = {
    greeting: propTypes.string
}
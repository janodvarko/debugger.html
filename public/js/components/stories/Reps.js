"use strict";

const { DOM: dom, createElement, createFactory } = require("react");
const { storiesOf } = require("./utils");

const Rep = createFactory(require("devtools-foo/client/shared/components/reps/rep").Rep);

const { grip1 } = require("../../test/fixtures");

// const style = {
//   width: "300px",
//   margin: "auto",
//   paddingTop: "100px" };

// const component = dom.div({style}, (createFactory(Reps));

function renderReps(data) {
  return Rep({ object: data });
}

storiesOf("Reps", module)
  .add("grip1", () => renderReps(grip1));

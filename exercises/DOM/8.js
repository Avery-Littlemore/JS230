// <!-- Implement a function that converts a nested array of nodeNames (see Nodes to Array exercise for examples) to nodes. 
// Go over the sample code and the corresponding return values below as a guide for what you will implement. -->

        
function arrayToNodes(nodes) {
  const parent = document.createElement(nodes[0]);
  const children = nodes[1];

  if (children.length === 0) {
    return parent;
  } else {
    for (let i = 0; i < children.length; i += 1) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }

  return parent;
}

// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

arrayToNodes(nodes);

/*
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
*/

// Example 2
// // Nested array of nodes
// const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

// // OR
// //
// // ["BODY", [
// //   ["DIV", [
// //     ["DIV", []],
// //     ["DIV", [
// //       ["DIV",[]]]]]],
// //   ["DIV", []],
// //   ["DIV", [
// //     ["DIV", []],
// //     ["DIV", []],
// //     ["DIV", []]]]]]

// arrayToNodes(nodes);

/*
<body>
  <div>
    <div></div>
    <div>
      <div></div>
    </div>
  </div>
  <div></div>
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</body>
*/
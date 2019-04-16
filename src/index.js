import createElement from './createElement'
import updateElement from './updateElement'
import {
  initDOM,
  addNode,
  removeNode,
  changeNode
} from './VDOMStates'

import './styles.scss'

const rootElement = document.getElementById("root");
rootElement.appendChild(createElement(initDOM));

const buttons = document.getElementById("buttons");

const initNodeButton = document.createElement("button");
initNodeButton.innerText = "Init";
buttons.appendChild(initNodeButton);
initNodeButton.addEventListener("click", () => {
  updateElement(rootElement, initDOM, initDOM);
});

const addNodeButton = document.createElement("button");
addNodeButton.innerText = "Add";
buttons.appendChild(addNodeButton);
addNodeButton.addEventListener("click", () => {
  updateElement(rootElement, addNode, initDOM);
});

const removeNodeButton = document.createElement("button");
removeNodeButton.innerText = "Remove";
buttons.appendChild(removeNodeButton);
removeNodeButton.addEventListener("click", () => {
  updateElement(rootElement, removeNode, addNode);
});

const changeNodeButton = document.createElement("button");
changeNodeButton.innerText = "Change";
buttons.appendChild(changeNodeButton);
changeNodeButton.addEventListener("click", () => {
  updateElement(rootElement, changeNode, removeNode);
});

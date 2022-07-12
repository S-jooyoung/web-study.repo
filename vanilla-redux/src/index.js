import { legacy_createStore as createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const countModifier = (count = 0, action) => {
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "minus") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "add" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "minus" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());

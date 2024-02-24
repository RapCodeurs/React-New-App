import { store } from "../redux/store/store";
import "../redux/actions/index";

const counterContenair = document.querySelector("#counter");
const body = document.querySelector("body");

const render = () => {
  const { color, counter } = store.getState();
  counterContenair.innerHTML = counter.counter;
  body.style.background = color.color;
};

render();
store.subscribe(render);

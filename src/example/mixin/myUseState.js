import { render } from "../../index";
import { data } from "../../index";

const myUseState = (initialValue) => {
  let currentIndex = data.index;
  data._state[currentIndex] =
    data._state[currentIndex] === undefined
      ? initialValue
      : data._state[currentIndex];
  const setState = (newValue) => {
    data._state[currentIndex] = newValue;
    console.log(data._state);
    render();
  };
  data.index += 1;
  return [data._state[currentIndex], setState];
};

export default myUseState;

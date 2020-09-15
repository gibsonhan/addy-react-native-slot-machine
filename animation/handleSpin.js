import { Animated, Easing } from 'react-native';
import { genRanNum } from '../util/handleRandNum';

const start = (ref, delay) => {
  Animated.sequence([
    Animated.timing(ref, {
      delay: delay * 100,
      toValue: -95,
      duration: 2000,
      easing: Easing.in(),
    }),
    Animated.loop(
      Animated.timing(ref, {
        toValue: 900,
        duration: 500,
      }),
      { iterations: 1000 },
    ),
  ]).start();
};

function stop(num, delay, ref) {
  Animated.sequence([
    Animated.decay(ref, {
      velocity: -0.333,
      deceleration: 0.888,
    }),
    Animated.timing(ref, {
      delay: delay,
      toValue: num * 100,
      duration: 3000,
    }),
  ]).start();
}

function handleSpinAll(arr, state, setState) {
  if (state) return;
  setState(true);

  arr.map((slot, indx) => {
    start(slot.ref, indx);
  });
}

const handleStopAll = async (arr, state, setState) => {
  if (!state) return;
  let _randNum = genRanNum(100000, 999999);
  let _randNumArr = Array.from(String(_randNum));

  arr.map((slot, indx) => {
    stop(_randNumArr[indx], indx, slot.ref);
  });

  setState(false);
};
console.log('sup2');

export { handleStopAll, handleSpinAll };

import { Animated, Easing } from 'react-native';

const start = (ref, delay, value, preload, spinTime, spinDiffTime) => {
  console.log(value);
  Animated.sequence([
    Animated.loop(
      Animated.timing(ref, {
        delay: 100 * delay,
        toValue: (preload - 1) * 100,
        duration: spinDiffTime,
      }),
      { iterations: Math.floor(spinTime / spinDiffTime) },
    ),
    Animated.timing(ref, {
      toValue: 0,
      duration: 1000,
    }),
    Animated.timing(ref, {
      delay: 300 * delay,
      toValue: 100 * value,
      easing: Easing.bounce,
      duration: 2000,
    }),
  ]).start();
};

function handleSpinAll(arr, config) {
  arr.map((slot, indx) => {
    console.log(slot);
    start(
      slot.ref,
      indx,
      slot.result,
      slot.preloadNum,
      config.spinTime,
      config.spinDifferenceTime,
    );
  });
}

export { handleSpinAll };

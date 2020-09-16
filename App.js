import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

import Slot from './components/Slot';
import Btn from './components/Btn';

import { isEmpty } from './util/handleIsEmpty';
import { handleSpinAll, handleStopAll } from './animation/handleSpin';

import { fakeResponse } from './util/handleFakeResponse';
import { END_SPINNERCONFIG, DEFAULT_SPINNERCONFIG } from './assets/data';

export default function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [slots, setSlots] = useState([]);
  const [spinnerConfig, setSpinnerConfig] = useState({});

  useEffect(() => {
    async function fetchInital() {
      const response = await fakeResponse(END_SPINNERCONFIG, 0);
      setSpinnerConfig(response);
    }
    fetchInital();
  }, []);

  useEffect(() => {
    if (isEmpty(spinnerConfig)) return;
    const reelCount = [...Array(spinnerConfig.reelCount).keys()];
    const arr = reelCount.map((indx) => {
      let spinAnim = new Animated.Value(0);
      return {
        num: indx,
        ref: spinAnim,
        result: spinnerConfig.result[indx],
        preloadNum: spinnerConfig.preloadedNumbers[indx],
      };
    });

    setSlots(arr);
  }, [spinnerConfig]);

  const spinAll = () => {
    if (isEmpty(spinnerConfig)) return;
    isSpinning ? setIsSpinning(true) : setIsSpinning(false);
    handleSpinAll(slots, spinnerConfig);
  };

  if (isEmpty(spinnerConfig)) return <></>;
  return (
    <View style={styles.container}>
      <View style={styles.slotContainer}>
        {slots.map((slot, indx) => (
          <Slot
            key={slot}
            slotNum={indx}
            animate={slot.ref}
            preloadNum={slot.preloadNum}
          />
        ))}
      </View>
      <Btn color="green" text="Spin" onPress={spinAll} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotContainer: {
    flexDirection: 'row',
  },
});

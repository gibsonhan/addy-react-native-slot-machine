import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

import Slot from './components/Slot';
import Btn from './components/Btn';
import { handleSpinAll, handleStopAll } from './animation/handleSpin';

export default function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const slotOneAnim = useRef(new Animated.Value(0)).current;
  const slotTwoAnim = useRef(new Animated.Value(0)).current;
  const slotThreeAnim = useRef(new Animated.Value(0)).current;
  const slotFourAnim = useRef(new Animated.Value(0)).current;
  const slotFiveAnim = useRef(new Animated.Value(0)).current;
  const slotSixAnim = useRef(new Animated.Value(0)).current;
  const slots = [
    { num: 1, ref: slotOneAnim },
    { num: 2, ref: slotTwoAnim },
    { num: 3, ref: slotThreeAnim },
    { num: 4, ref: slotFourAnim },
    { num: 5, ref: slotFiveAnim },
    { num: 6, ref: slotSixAnim },
  ];

  const test = [1, 2, 3, 4, 5, 6];

  let obj = test.map((item) => {
    let spinAnim = useRef(new Animated.Value(0).current);
    return { num: item, ref: spinAnim };
  });

  const spinAll = () => handleSpinAll(slots, isSpinning, setIsSpinning);
  const stopAll = () => handleStopAll(slots, isSpinning, setIsSpinning);

  useEffect(() => {
    console.log(slotOneAnim);
  }, [slotOneAnim]);
  return (
    <View style={styles.container}>
      <View style={styles.slotContainer}>
        {slots.map((slot) => (
          <Slot key={slot} slotNum={slot.num} animate={slot.ref} />
        ))}
      </View>
      <Btn color="grey" text="Spin" onPress={spinAll} />
      <Btn color="red" text="Stop" onPress={stopAll} />
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

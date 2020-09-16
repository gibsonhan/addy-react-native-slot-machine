import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';

const Slot = ({ animate, slotNum, preloadNum }) => {
  return (
    <View style={styles.slotContainer}>
      <ItemContainer
        key={slotNum}
        animate={animate}
        slotNum={slotNum}
        preloadNum={preloadNum}
      />
    </View>
  );
};

const ItemContainer = ({ slotNum, animate, preloadNum }) => {
  const items = [...Array(preloadNum).keys()].reverse();
  const calcOffset = -1 * ((100 * preloadNum) / 2);
  const offset = preloadNum % 2 === 0 ? calcOffset + 50 : calcOffset - 50;
  return (
    <View
      style={[styles.itemContainer, { transform: [{ translateY: offset }] }]}
    >
      <Animated.View
        style={{
          transform: [{ translateY: animate }],
        }}
      >
        {items.map((item) => {
          return (
            <Item key={'slotNum_' + slotNum + '_idx_' + item}>{item}</Item>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({ children }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slotContainer: {
    display: 'flex',
    width: 100,
    height: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'column',
    position: 'absolute',
  },
  itemContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Slot;

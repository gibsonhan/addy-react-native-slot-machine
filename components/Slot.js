import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import Btn from './Btn';

const Slot = ({ animate, slotNum }) => {
  return (
    <View style={styles.slotContainer}>
      <ItemContainer key={slotNum} animate={animate} slotNum={slotNum} />
    </View>
  );
};

const ItemContainer = ({ slotNum, animate }) => {
  const items = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
  return (
    <View style={[styles.itemContainer, { transform: [{ translateY: -400 }] }]}>
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
    justifyContent: 'flex-start',
    height: 100,
    width: 100,
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

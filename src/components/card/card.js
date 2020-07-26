import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CustomCard extends Component {
  render() {
    let propsData = this.props.data;
    return (
      <View
        style={[
          styles.card,
          {
            backgroundColor: propsData.backgroundColor,
            color: propsData.color,
            borderColor: propsData.border,
          },
        ]}>
        <Text style={styles.text}>{propsData && propsData.title}</Text>
        <Text style={styles.text}>{propsData && propsData.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    marginHorizontal: 10,
    margin: 10,
    elevation: 4,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 21,

  },
});


import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const App = (props) => {
  const [selectedValue, setSelectedValue] = useState('Pakistan');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 250}}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          props.ChangeCounrty(itemValue);
        }}>
        <Picker.Item label="Pakistan" value="Pakistan" />
        <Picker.Item label="Afghanistan" value="Afghanistan" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Bangladesh" value="Bangladesh" />
        <Picker.Item label="Iran" value="Iran" />
        <Picker.Item label="Turkey" value="Turkey" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
});

export default App;
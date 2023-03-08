import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function AppTextInput(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enable, setEnable] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const TextView = () => {
    return (
      <View style={styles.displayView}>
        <Text style={styles.textStyle}>
          {'USERNAME : '}
          <Text style={[styles.textStyle, {color: 'red', textAlign: 'right'}]}>
            {name}
          </Text>
        </Text>
        <Text style={styles.textStyle}>
          {'EMAIL ID : '}
          <Text style={[styles.textStyle, {color: 'red', textAlign: 'right'}]}>
            {email}
          </Text>
        </Text>
      </View>
    );
  };

  const SwitchView = () => {
    return (
      <View style={styles.displayView}>
        <Switch
          value={enable}
          onValueChange={newValue => setEnable(newValue)}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={enable ? '#f5dd4b' : '#f4f3f4'}
        />

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  };

  return (
    <>
      <View style={styles.parentContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={'white'}
          onChangeText={name => setName(name)}
          value={name}
        />
        <TextInput
          placeholder="Email ID"
          placeholderTextColor={'white'}
          onChangeText={email => setEmail(email)}
          value={email}
        />
      </View>
      <TextView />
      <SwitchView />
    </>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  parentContainer: {
    height: 100,
    backgroundColor: 'dodgerblue',
  },
  displayView: {
    height: 100,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    textAlign: 'left',
  },
});

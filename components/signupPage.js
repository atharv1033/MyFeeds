import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Icon } from 'react-native-elements';

export default function Signup({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);

  const _signup = async () => {
    try {
      const value = await AsyncStorage.getItem('@credentials_store')
      if (value !== null) {
        let jsonValue = JSON.parse(value);
        console.log(value);
        jsonValue.push({
          'username': username,
          'password': password
        });
        AsyncStorage.setItem('@credentials_store', JSON.stringify(jsonValue));

        navigation.navigate('Feeds');
      } else {
        let jsonValue = [
          {
            'username': username,
            'password': password
          }
        ];
        AsyncStorage.setItem('@credentials_store', JSON.stringify(jsonValue));

        navigation.navigate('Feeds');
      }
    } catch (e) {
      console.log('AsyncStorage Error: ', e);
      alert('Error while Sign In');
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.textContainer} >
        <Text style={styles.bigText}>
          Signup
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={username => setUsername(username)}
        defaultValue={username}
        placeholder='username'
      />
      <View style={styles.passwordContainer} >
        <TextInput
          style={{ width: 270, fontSize: 15 }}
          onChangeText={password => setPassword(password)}
          defaultValue={password}
          secureTextEntry={hide}
          placeholder='password'
        />
        <Icon name="visibility" onPress={() => { setHide(!(hide)) }} style={{}} size={27} color={'#000000'} />
      </View>
      <View style={{ marginTop: 50 }} >
        <Button
          onPress={_signup}
          title="Sigin Up"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center"
  },

  textContainer: {
    marginTop: 70,
    marginBottom: 50
  },

  bigText: {
    fontSize: 50
  },

  input: {
    width: 300,
    fontSize: 15,
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: '#000000'
  },

  passwordContainer: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: '#000000',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: "center"
  }

});
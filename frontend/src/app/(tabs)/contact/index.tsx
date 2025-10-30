import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  TextInput,
  Linking,
  Alert,
  StyleSheet,
  TouchableOpacity
} from "react-native";



export default function YourPageName() {

  const [value, onChangeText] = useState('');


  const handleSubmit = () => {
    console.log('Submitted:', value);
    Alert.alert('Success', 'Feedback submitted!');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact and Feedback page</Text>

      <View>
        <TextInput editable 
          multiline 
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}/> 
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 60,   
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '"#C74F4A"',
    padding: 200,
    width: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8B0000',  // Match your maroon header
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
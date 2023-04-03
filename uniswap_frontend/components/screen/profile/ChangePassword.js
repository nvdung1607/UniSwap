import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { useSelector } from 'react-redux';

const ChangePassword = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');

  const [isValid, setIsValid] = useState(false);

  const password = useSelector((state) => state.user.password);

  useEffect(() => {
    setIsValid(currentPassword && newPassword && confirmPassword);
  }, [currentPassword, newPassword, confirmPassword]);

  const handleChange = () => {
    if (currentPassword !== password) {
      setErrorMessage1('Current password is incorrect');
      return;
    } else if (currentPassword === password) {
      setErrorMessage1('');
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage2('Confirmation password is incorrect');
      return;
    } else if (newPassword !== confirmPassword) {
      setErrorMessage1('');
    }

    if (errorMessage1 === '' && errorMessage2 === '') {
      Alert.alert('Change password successfuly!');
      navigation.navigate('Profile');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Current password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCurrentPassword}
          value={currentPassword}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Text style={styles.error}>{errorMessage1}</Text>
        <Text style={styles.label}>New password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNewPassword}
          value={newPassword}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Text style={styles.error}>{errorMessage2}</Text>
        <Pressable
          style={[styles.btn, !isValid && styles.disable]}
          onPress={handleChange}>
          <Text style={styles.btnLabel}>CHANGE PASSWORD</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2fa',
    alignItems: 'flex-start',
    position: 'relative',
  },
  content: { marginTop: 30, paddingRight: 20, paddingLeft: 20, width: '100%' },
  label: { fontWeight: 'bold' },
  input: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#ff7b00',
    width: '100%',
    marginTop: 50,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnLabel: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  disable: {
    opacity: 0.3,
  },
  error: { color: 'red', marginTop: 5, marginBottom: 5 },
});

export default ChangePassword;

import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { login } from '../redux/authReducer';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/userReducer';

const Login = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const dispatch = useDispatch();
  const handleBack = () => {
    setOpenLogin(false);
  };
  const handleOpen = () => {
    setOpenLogin(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {openLogin && (
          <Pressable onPress={handleBack} style={styles.back}>
            <BackIcon name="arrow-left" color="#000" size={30} solid></BackIcon>
          </Pressable>
        )}
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{ uri: 'https://uniswap.org/favicon.ico' }}
          />
          <Text style={styles.title}>Baka Swap</Text>
        </View>
        <Text style={styles.desc}>Register account BaKa Swap</Text>
        {openLogin ? (
          <AccountLogin />
        ) : (
          <View style={styles.list}>
            <Pressable style={styles.item} onPress={handleOpen}>
              <Icon
                name="user"
                color="#3b5998"
                size={20}
                style={styles.icon}
                solid></Icon>
              <Text style={styles.itemText}>Uses Baka Account</Text>
            </Pressable>
            <Pressable style={styles.item} onPress={() => dispatch(login())}>
              <Icon
                name="google"
                color="#ff0000"
                size={20}
                style={styles.icon}
                solid></Icon>
              <Text style={styles.itemText}>Login with Google</Text>
            </Pressable>
            <Pressable style={styles.item} onPress={() => dispatch(login())}>
              <Icon
                name="facebook-square"
                color="#3b5998"
                size={20}
                style={styles.icon}
                solid></Icon>
              <Text style={styles.itemText}>Login with Facebook</Text>
            </Pressable>
          </View>
        )}
        <Text style={styles.dntHaveAcc}>
          Your continued agreement to our
          <Text style={styles.policy}> Terms of Use and Policies</Text>
        </Text>
      </View>
    </View>
  );
};
const AccountLogin = () => {
  const [email, onChangeText] = useState('');
  const [username, setUsername] = useState('');

  const [password, onChangePassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setIsValid(regex.test(email) && password.length >= 6);
  }, [email, password]);
  const handleLoginWithAccout = async () => {
    dispatch(
      loginUser({
        email,
        username,
        password,
        gender: 'male',
        birthday: '',
        phone: '',
        bio: '',
      })
    );
    dispatch(login());
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Enter username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={email}
        keyboardType="email-address"
        placeholder="Enter email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Pressable
        onPress={handleLoginWithAccout}
        style={[styles.button, !isValid && styles.disable]}>
        <Text style={styles.buttonTitle}>SIGN UP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  wrapper: {
    width: '90%',
    backgroundColor: '#fff',
    margin: 'auto',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 70,
    height: 70,
  },
  logo: {
    width: 50,
    height: 50,
    top: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  desc: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
    marginTop: 10,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
  item: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ff7b00',
    borderStyle: 'solid',
    margin: 10,
    padding: 10,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 8,
    left: 10,
    width: 50,
    marginRight: 20,
  },
  itemText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 4,
    outline: 'none',
    borderColor: '#ff7b00',
  },
  button: {
    width: '100%',
    backgroundColor: '#ff7b00',
    padding: 12,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  disable: {
    opacity: 0.3,
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  dntHaveAcc: {
    textAlign: 'center',
  },
  policy: {
    color: 'blue',
  },
});
export default Login;

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
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
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
        <Text style={styles.desc}>Log in to BaKa Swap</Text>
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
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.dntHaveAcc}>
            Don't have account? <Text style={styles.signup}>Sign up</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
const AccountLogin = () => {
  const [username, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const _username = useSelector((state) => state.user.username);
  const _password = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsValid(username.length >= 3 && password.length >= 6);
  }, [username, password]);
  const handleLoginWithAccout = () => {
    if (_username === username && _password === password) {
      dispatch(login());
    } else {
      Alert.alert('Incorrect account or password');
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="Enter username"
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
        <Text style={styles.buttonTitle}>LOG IN</Text>
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
  signup: {
    fontWeight: 'bold',
  },
});
export default Login;

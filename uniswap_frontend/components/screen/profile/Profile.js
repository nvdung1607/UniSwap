import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import ModalInput from '../../modal/ModalInput';
import ModalGender from '../../modal/ModalGender';
import ModalCalendar from '../../modal/ModalCalendar';
import ModalLogout from '../../modal/ModalLogout';
import BackIcon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import {
  changeGender,
  changePhone,
  changeEmail,
  changeBio,
} from '../../redux/userReducer';

const Profile = ({navigation}) => {
  const genderList = ['Male', 'Female', 'Other'];
  const [modalVisible, setModalVisible] = useState(false);
  const [modalGender, setModalGender] = useState(false);
  const [modalCalendar, setModalCalendar] = useState(false);
  const [modalPhone, setModalPhone] = useState(false);
  const [modalEmail, setModalEmail] = useState(false);
  const [modalBio, setModalBio] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);

  const _username = useSelector((state) => state.user.username);
  const _email = useSelector((state) => state.user.email);
  const _gender = useSelector((state) => state.user.gender);
  const _date = useSelector((state) => state.user.birthday);
  const _bio = useSelector((state) => state.user.bio);
  const _phone = useSelector((state) => state.user.phone);

  const [date, setDate] = useState(_date);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <Image
          style={styles.bg}
          source={{
            uri: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/CRYPTOS_020222_UNI-1.png',
          }}
        />
        <View style={styles.avatar}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://223092959.e.cdneverest.net/boxstudio/user_avatar/2022/11/14/4fc9a0b505525a5aff58da673f97b609.jpg',
            }}
          />
        </View>
        <View style={styles.info}>
          <Pressable style={styles.item}>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.name}>{_username}</Text>
          </Pressable>
          <ModalGender
            onPress={setModalGender}
            visible={modalGender}
            genderList={genderList}
            gender={_gender}
            setGender={changeGender}
          />
          <Pressable style={styles.item} onPress={() => setModalGender(true)}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.name}>{_gender}</Text>
          </Pressable>
          <ModalCalendar
            onPress={setModalCalendar}
            visible={modalCalendar}
            setDate={setDate}
          />
          <Pressable style={styles.item} onPress={() => setModalCalendar(true)}>
            <Text style={styles.label}>Birdthday</Text>
            <Text style={styles.name}>{date}</Text>
          </Pressable>
          <ModalInput
            onPress={setModalPhone}
            visible={modalPhone}
            username={_phone}
            _dispatch={changePhone}
            title={'Update phone number'}
          />
          <Pressable style={styles.item} onPress={() => setModalPhone(true)}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.name}>{_phone}</Text>
          </Pressable>
          <ModalInput
            onPress={setModalEmail}
            visible={modalEmail}
            username={_email}
            _dispatch={changeEmail}
            title={'Update email'}
          />
          <Pressable style={styles.item} onPress={() => setModalEmail(true)}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.name}>{_email}</Text>
          </Pressable>
          <ModalInput
            onPress={setModalBio}
            visible={modalBio}
            username={_bio}
            _dispatch={changeBio}
            title={'Bio'}
          />

          <Pressable style={styles.item} onPress={() => setModalBio(true)}>
            <Text style={styles.label}>Bio</Text>
            <Text style={[styles.name, styles.bio]}>{_bio}</Text>
          </Pressable>
          <Pressable style={styles.password} onPress={() => navigation.navigate('ChangePassword')}>
            <BackIcon
              name="lock-open"
              color="#ff7b00"
              size={26}
              solid></BackIcon>
            <Text style={styles.passwordTitle}>Change password</Text>
            <BackIcon
              name="keyboard-arrow-right"
              color="#ff7b00"
              size={26}
              solid></BackIcon>
          </Pressable>
          <Pressable style={styles.logout} onPress={() => setModalLogout(true)}>
            <BackIcon name="logout" color="#ff7b00" size={26} solid></BackIcon>
            <Text style={styles.logoutTitle}>Logout</Text>
          </Pressable>
          <ModalLogout visible={modalLogout} onPress={setModalLogout} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef8',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: 2000,
    overflow: 'auto',
    backgroundColor: '#ffeef8',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    position: 'relative',
    paddingTop: 50,
  },
  bg: {
    width: '100%',
    height: 100,
  },
  avatar: {
    marginTop: 20,
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    top: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#ff7b00',
  },
  info: { marginTop: 70, padding: 10 },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  label: { marginBottom: 10, fontSize: 16 },
  name: { fontWeight: 'bold', fontSize: 18 },
  bio: { fontSize: 14, fontWeight: 600 },
  password: {
    marginTop: 10,
    padding: 10,
    paddingRight: 5,
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  passwordTitle: {
    flex: 1,
    color: '#ff7b00',
    marginLeft: 30,
    marginTop: 4,
  },
  logout: {
    marginTop: 10,
    marginBottom: 100,

    padding: 10,
    paddingRight: 5,
    flexDirection: 'row',
    alignItem: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
  },
  logoutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 30,
    color: '#ff7b00',
  },
});

export default Profile;

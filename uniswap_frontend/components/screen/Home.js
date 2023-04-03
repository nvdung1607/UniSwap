import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DownIcon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/MaterialIcons';
import ModalConfirmSwap from '../modal/ModalConfirmSwap';
import ModalChooseToken from '../modal/ModalChooseToken';
import { useSelector } from 'react-redux';

import { TOKENLIST } from '../data';
const Home = () => {
  const [token1, setToken1] = useState(TOKENLIST[0]);
  const [token2, setToken2] = useState(TOKENLIST[1]);
  const [amountToken1, setAmountToken1] = useState('');
  const [amountToken2, setAmountToken2] = useState('');

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [chooseToken1, setChooseToken1] = useState(false);
  const [chooseToken2, setChooseToken2] = useState(false);
  const [tokens, setTokens] = useState(TOKENLIST);

  const handleSwap = () => {
    setOpenModal(true);
  };
  const handleReverse = () => {
    setToken1(token2);
    setToken2(token1);
  };

  useEffect(() => {
    if (!amountToken1.trim()) {
      return;
    } else {
      const rate = token1.price / token2.price;
      const amount = (parseInt(amountToken1) * rate).toFixed(5);
      setAmountToken2(amount.toString());
    }
  }, [amountToken1, token1, token2]);

  const username = useSelector((state) => state.user.username);

  inputRef = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://223092959.e.cdneverest.net/boxstudio/user_avatar/2022/11/14/4fc9a0b505525a5aff58da673f97b609.jpg',
              }}
            />
            <Text style={styles.username}>Hi, {username}!</Text>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.searchInput}
              onChangeText={setSearchValue}
              value={searchValue}
              placeholder="Search tokens"
              placeholderTextColor="#9ca4c2"
            />
            <Pressable
              style={[
                styles.searchIcon,
                {
                  transform: [{ translateY: '-11%' }],
                },
              ]}>
              <SearchIcon
                name="search"
                color="#000"
                size={26}
                solid></SearchIcon>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.reverse} onPress={handleReverse}>
          <Icon
            name="arrow-down-thin"
            color="#000"
            size={35}
            style={styles.icon}
            solid></Icon>
        </Pressable>
        <View style={styles.box}>
          <TextInput
            ref={inputRef}
            style={styles.amount}
            onChangeText={setAmountToken1}
            value={amountToken1}
            placeholder="0"
            placeholderTextColor="#9ca4c2"
          />
          <Pressable style={styles.token} onPress={() => setChooseToken1(true)}>
            <Text style={styles.sym}>{token1.tokensymbol}</Text>
            <Image
              style={styles.logo}
              source={{
                uri: token1.tokenimage,
              }}
            />
            <DownIcon
              name="chevron-small-down"
              color="#000"
              size={30}
              solid></DownIcon>
          </Pressable>
          <ModalChooseToken
            visible={chooseToken1}
            onPress={setChooseToken1}
            setToken1={setToken1}
            token1={token1}
          />
        </View>
        <View style={styles.box}>
          <TextInput
            style={styles.amount}
            onChangeText={setAmountToken2}
            value={amountToken2}
            placeholder="0"
            placeholderTextColor="#9ca4c2"
          />
          <Pressable style={styles.token} onPress={() => setChooseToken2(true)}>
            <Text style={styles.sym}>{token2.tokensymbol}</Text>
            <Image
              style={styles.logo}
              source={{
                uri: token2.tokenimage,
              }}
            />
            <DownIcon
              name="chevron-small-down"
              color="#000"
              size={30}
              solid></DownIcon>
          </Pressable>
          <ModalChooseToken
            visible={chooseToken2}
            onPress={setChooseToken2}
            setToken1={setToken2}
            token1={token2}
          />
        </View>
        <Pressable onPress={handleSwap} style={styles.button}>
          <Text style={styles.buttonTitle}>SWAP</Text>
        </Pressable>
        <ModalConfirmSwap
          visible={openModal}
          onPress={setOpenModal}
          setAmountToken1={setAmountToken1}
          setAmountToken2={setAmountToken2}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  wrapper: {
    width: '100%',
    padding: 20,
    position: 'relative',
    marginTop: 80,
  },
  reverse: {
    position: 'absolute',
    top: '57%',
    left: '50%',
    width: 50,
    height: 50,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'white',
    zIndex: 2,
    backgroundColor: '#f5f6fc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ff7b00',
    backgroundColor: '#f5f6fc',

    height: 80,
    borderRadius: 10,
    marginTop: 10,
    postion: 'relative',
  },
  amount: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 22,
    outline: 'none',
    paddingRight: 20,
    padding: 10,
    paddingLeft: 20,
  },
  token: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ff7b00',
    backgroundColor: '#e8ecfb',
    padding: 6,
    borderRadius: 50,
  },
  sym: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
  button: {
    width: '100%',
    backgroundColor: '#ff7b00',
    borderRadius: 10,
    padding: 20,
    marginTop: 40,
  },
  buttonTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  header: {
    width: '100%',
    marginBottom: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: { width: '100%', position: 'relative' },
  searchInput: {
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 40,
    fontSize: 16,
    borderRadius: 40,
  },
  searchIcon: { postion: 'absolute', left: '88%', top: -24 },
  avatar: {
    marginTop: 10,
    marginBottom: 30,
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
  username: { marginLeft: 20, fontSize: 18, fontWeight: 700 },
});

export default Home;

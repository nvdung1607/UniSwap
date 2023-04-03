import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TOKENLIST } from '../data';

const ModalChooseToken = ({ visible, onPress, setToken1, token1 }) => {
  const [searchValue, setSearchValue] = useState('');
  const [tokens, setTokens] = useState(TOKENLIST);

  useEffect(() => {
    if (searchValue.trim() === '') {
      setTokens(TOKENLIST);
    } else {
      const tokens = [];

      TOKENLIST.forEach((token) => {
        if (
          token.tokenname.toUpperCase().indexOf(searchValue.toUpperCase()) >
            -1 ||
          token.tokensymbol.toUpperCase().indexOf(searchValue.toUpperCase()) >
            -1
        ) {
          tokens.push(token);
        }
      });

      setTokens(tokens);
    }
  }, [searchValue]);

  const handlechooseToken = (token) => {
    setToken1(token);
    onPress(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.wrapperHeader}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Choose a token</Text>
                <Pressable onPress={() => onPress(false)}>
                  <Icon
                    name="close"
                    color="rgb(119, 128, 160);"
                    size={30}
                    solid></Icon>
                </Pressable>
              </View>
              <View style={styles.search}>
                <TextInput
                  style={styles.tokenInput}
                  onChangeText={setSearchValue}
                  value={searchValue}
                  placeholder="Search token"
                  placeholderTextColor="#9ca4c2"
                />
                <Icon
                  style={styles.iconSearch}
                  name="search"
                  color="rgb(119, 128, 160);"
                  size={30}
                  solid></Icon>
              </View>
            </View>
            <ScrollView style={styles.content}>
              {tokens.map((token) => {
                return (
                  <Pressable
                    style={styles.token}
                    onPress={() => handlechooseToken(token)}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: token.tokenimage,
                      }}
                    />
                    <View style={styles.wrapperTokenName}>
                      <Text style={styles.tokenSymbol}>
                        {token.tokensymbol}
                      </Text>
                      <Text style={styles.tokenName}>{token.tokenname}</Text>
                    </View>
                    {token.tokenname === token1.tokenname && (
                      <CheckIcon
                        style={styles.iconCheck}
                        name="check"
                        color="#ff7b00"
                        size={25}
                        solid></CheckIcon>
                    )}
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'backgroundColor: rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 20,

    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  wrapperHeader: {
    borderBottomWidth: 1,
    borderColor: '#9ca4c2',
    borderStyle: 'solid',
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 16 },
  search: {
    position: 'relative',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  tokenInput: {
    borderWidth: 1,
    borderColor: '#9ca4c2',
    borderStyle: 'solid',
    width: '100%',
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 16,
    borderRadius: 10,
  },
  iconSearch: { position: 'absolute', left: 5, top: 6 },
  content: {
    height: 200,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 20,
  },
  tokenName: { color: '#000' },
  image: { width: 30, height: 30, borderRadius: '50%' },
  token: {
    flexDirection: 'row',
    paddingTop: 6,
    paddingBottom: 6,
    alignItems: 'center',
  },
  wrapperTokenName: { marginLeft: 20 },
  tokenSymbol: { fontWeight: 'bold' },
  iconCheck: { marginLeft: 'auto' },
});

export default ModalChooseToken;

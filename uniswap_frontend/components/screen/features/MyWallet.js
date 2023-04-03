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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TOKENLIST } from '../../data';

const ChangePassword = ({ navigation }) => {
  const username = useSelector((state) => state.user.username)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.balance}>4235 $</Text>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.actionWrapper}>
          <Pressable
            style={styles.action}
            onPress={() => navigation.navigate('Deposit')}>
            <View style={styles.actionIcon}>
              <Icon
                name="keyboard-arrow-up"
                color="#fff"
                size={26}
                solid></Icon>
            </View>
            <Text style={styles.actionName}>Deposit</Text>
          </Pressable>
          <Pressable
            style={styles.action}
            onPress={() => navigation.navigate('Withdraw')}>
            <View style={styles.actionIcon}>
              <Icon
                name="keyboard-arrow-down"
                color="#fff"
                size={26}
                solid></Icon>
            </View>

            <Text style={styles.actionName}>Withdraw</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.contentTitle}>All tokens</Text>

        {TOKENLIST.map((token) => {
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
                <Text style={styles.tokenSymbol}>{token.tokensymbol.toUpperCase()}</Text>
                <Text style={styles.tokenName}>{token.tokenname}</Text>
              </View>
                <Text style={styles.price}>{token.price.toFixed(2)} {token.tokensymbol.toUpperCase()}</Text>

            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: 'white',
    alignItems: 'flex-start',
    position: 'relative',
  },
  header: {
    backgroundColor: '#0376c2',
    width: '100%',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 0,
  },
  balance: { color: 'white', fontSize: 36, fontWeight: 'bold' },
  username: { color: 'white', marginTop: 10, fontSize: 18 },
  actionWrapper: {width: '100%', flexDirection: 'row', justifyContent: 'space-between', },
  action: { alignItems: 'center', margin: 40, marginBottom: 20 },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.3)',
  },
  actionName: { color: 'white', marginTop: 10, fontSize: 18 },
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
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
  },
  wrapperTokenName: { marginLeft: 20 },
  tokenSymbol: { fontWeight: 'bold' },
  contentTitle: {marginBottom: 20},
  price: {marginLeft: 'auto', fontWeight: 'bold'}
});

export default ChangePassword;

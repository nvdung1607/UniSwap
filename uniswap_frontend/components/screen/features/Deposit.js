import React, { useState, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import { TOKENLIST } from '../../data';
import ModalConfirm from '../../modal/ModalCofirm'

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState(TOKENLIST[0]);
  const [openModal, setOpenModal] = useState(false)

  const [visible, setVisible] = useState(false);

  const inputRef = useRef(null);

  const handelChooseToken = (chooseToken) => {
    setToken(chooseToken);
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.box} onPress={() => setVisible(true)}>
        <Image
          style={styles.logo}
          source={{
            uri: token.tokenimage,
          }}
        />
        <Text style={styles.name}>{token.tokenname}</Text>
        <BackIcon
          name="keyboard-arrow-down"
          color="#ff7b00"
          size={26}
          style={styles.icon}
          solid></BackIcon>

        <Text style={styles.label}>Choose Token</Text>
      </Pressable>
      {visible && (
        <ScrollView style={styles.wallet}>
          <View style={styles.header}>
            <Text style={styles.headerLabel}>Tokens</Text>
            <Text style={styles.headerLabel}>Price</Text>
          </View>
          <View style={styles.tokenList}>
            {TOKENLIST.map((token) => {
              return (
                <Pressable
                  style={styles.tokenItem}
                  onPress={() => handelChooseToken(token)}>
                  <View style={styles.token}>
                    <Image
                      style={styles.logo}
                      source={{
                        uri: token.tokenimage,
                      }}
                    />
                    <Text style={styles.tokenName}>{token.tokenname}</Text>
                  </View>
                  <Text style={styles.amount}>${token.price.toFixed(2)}</Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      )}

      <View style={[styles.box, styles.boxAmount]}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="Enter the amount"
          placeholderTextColor={'rgba(255, 0, 0, 0.4)'}
        />
        <Text style={styles.name}>{token.tokensymbol.toUpperCase()}</Text>

        <Text style={styles.label}>Amount</Text>
      </View>
      <Pressable style={styles.btn} onPress={() => setOpenModal(true)}>
        <Text style={styles.btnLabel}>DEPOSIT</Text>
      </Pressable>
      <ModalConfirm visible={openModal} onPress={setOpenModal} setAmount={setAmount}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2fa',
    alignItems: 'center',
    position: 'relative',
  },
  box: {
    width: '90%',
    marginTop: 60,
    borderColor: '#ff7b00',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 10,
    position: 'relative',
  },
  boxAmount: {paddingRight: 20},
  logo: { width: 30, height: 30, borderRadius: '50%' },
  name: { marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: '#ff7b00' },
  icon: { marginLeft: 'auto' },
  label: {
    position: 'absolute',
    top: -16,
    left: 20,
    color: '#ff7b00',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#fff2fa',
  },
  input: { color: 'red', width: '80%', fontSize: 20 },
  btn: {
    backgroundColor: '#ff7b00',
    width: '90%',
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnLabel: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  wallet: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    top: '20%',
    zIndex: 999,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff7b00',
    borderStyle: 'solid',
    height: 400,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLabel: { color: 'red', fontSize: 16, fontWeight: 700 },
  tokenList: { marginTop: 20 },
  tokenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#ff7b00',
    borderStyle: 'solid',
    paddingBottom: 20,
    paddingTop: 20,
  },
  token: { flexDirection: 'row', alignItems: 'center' },
  tokenName: {
    marginLeft: 10,
    fontSize: 18,
    color: '#ff7b00',
    fontWeight: 'bold',
  },
  amount: { color: '#ff7b00', fontSize: 16, fontWeight: 'bold' },
});

export default Deposit;

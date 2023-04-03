import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const ModalConfirmSwap = ({ visible, onPress, setAmountToken1, setAmountToken2 }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>
              Are you sure to execute the transaction?
            </Text>
            <View style={styles.btn}>
              <Pressable style={styles.cancel} onPress={() => onPress(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.ok}
                onPress={() => {
                  onPress(false);
                  setAmountToken1('')
                  setAmountToken2('')
                  Alert.alert('Successful transaction!')
                }}>
                <Text style={styles.okText}>OK</Text>
              </Pressable>
            </View>
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
    padding: 15,
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
  text: { width: '100%', textAlign: 'center', fontSize: 14, fontWeight: '700' },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
  },
  cancel: {
    marginRight: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff7b00',
    borderStyle: 'solid',
    padding: 20,
    paddingTop: 8,
    paddingBottom: 8,
  },
  cancelText: {},
  ok: {
    marginLeft: 35,
    borderRadius: 10,
    backgroundColor: '#ff7b00',
    padding: 20,
    paddingTop: 8,
    paddingBottom: 8,
  },
  okText: { fontWeight: 'bold', color: 'white' },
});

export default ModalConfirmSwap;

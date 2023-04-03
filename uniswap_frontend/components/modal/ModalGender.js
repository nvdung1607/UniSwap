import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';


const ModalGender = ({ onPress, visible, genderList, setGender, gender }) => {
  const dispatch = useDispatch();
  const handleUpdate = (item) => {
    dispatch(setGender({genDer: item}))
    onPress(false);
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable onPress={() => onPress(false)}>
                <BackIcon
                  name="close"
                  color="#000"
                  size={25}
                  solid
                  style={styles.buttonClose}></BackIcon>
              </Pressable>
              <Text style={styles.headerTitle}>Select gender</Text>
            </View>
            <View style={styles.list}>
              {genderList.map((item, index) => {
                return (
                  <Pressable
                    style={styles.genderItem}
                    onPress={() => handleUpdate(item)}>
                    <Text key={index} style={styles.genderText}>
                      {item}
                    </Text>
                    {gender === item && (
                      <BackIcon
                        name="check"
                        color="#ff7b00"
                        size={25}
                        solid
                        style={styles.buttonClose}></BackIcon>
                    )}
                  </Pressable>
                );
              })}
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
    justifyContent: 'flex-end',
    backgroundColor: 'backgroundColor: rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    width: '100%',
    height: '50%',
    backgroundColor: '#ffeef8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },

  modalHeader: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ff7b00',
  },
  buttonClose: {
    borderColor: 'transparent',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgb(82, 82, 82)',
    flex: 1,
    textAlign: 'center',
  },
  list: {
    margin: 'auto',
    padding: 10,
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  genderItem: {
    marginTop: 15,
    marginBottom: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  genderText: {
    fontWeight: 700,
    fontSize: 16,
  },
});

export default ModalGender;

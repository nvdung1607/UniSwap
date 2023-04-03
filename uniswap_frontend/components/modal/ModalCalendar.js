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
import Calendar from './Calendar';
const ModalCalendar = ({ onPress, visible, setDate }) => {

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
              <Text style={styles.headerTitle}>Select date of birth</Text>
            </View>
            <View>
              <Calendar setdate={setDate} onPress={onPress}/>
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
    height: '60%',
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
    elevation: 2,
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
});

export default ModalCalendar;

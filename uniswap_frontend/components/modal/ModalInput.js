import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch} from 'react-redux';

const ModalInput = ({ onPress, visible, username, title, _dispatch }) => {
  const [userName, setUsername] = useState(username);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(_dispatch({userName}))
    onPress(false)
  }
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
              <Text style={styles.headerTitle}>{title}</Text>
              <Pressable onPress={handleUpdate}>
                <Text style={styles.update}>Update</Text>
              </Pressable>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={userName}
            />
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
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(82, 82, 82)',
  },
  buttonClose: {
    borderColor: 'transparent',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgb(82, 82, 82)',
  },
  update: {
    fontSize: 16,
    color: '#ff7b00',
  },
  input: {
    marginTop: 10,
    width: '92%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    fontWeight: 700,
    outline: 'none',
    fontSize: 18,
  }
});

export default ModalInput;

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default Calendar = ({setdate, onPress}) => {
  const [selectedStartDate, setDate] = useState('');

  const format = (date) => {
    switch (date.toString().split(' ')[1]) {
      case 'Jan':
        return `${date.toString().split(' ')[3]}/01/${
          date.toString().split(' ')[2]
        }`;
      case 'Feb':
        return `${date.toString().split(' ')[3]}/02/${
          date.toString().split(' ')[2]
        }`;
      case 'Mar':
        return `${date.toString().split(' ')[3]}/03/${
          date.toString().split(' ')[2]
        }`;
      case 'Apr':
        return `${date.toString().split(' ')[3]}/04/${
          date.toString().split(' ')[2]
        }`;
      case 'May':
        return `${date.toString().split(' ')[3]}/05/${
          date.toString().split(' ')[2]
        }`;
      case 'Jun':
        return `${date.toString().split(' ')[3]}/06/${
          date.toString().split(' ')[2]
        }`;
      case 'Jul':
        return `${date.toString().split(' ')[3]}/07/${
          date.toString().split(' ')[2]
        }`;
      case 'Aug':
        return `${date.toString().split(' ')[3]}/08/${
          date.toString().split(' ')[2]
        }`;
      case 'Sep':
        return `${date.toString().split(' ')[3]}/09/${
          date.toString().split(' ')[2]
        }`;
      case 'Oct':
        return `${date.toString().split(' ')[3]}/10/${
          date.toString().split(' ')[2]
        }`;
      case 'Nov':
        return `${date.toString().split(' ')[3]}/11/${
          date.toString().split(' ')[2]
        }`;
      default:
        return `${date.toString().split(' ')[3]}/12/${
          date.toString().split(' ')[2]
        }`;
    }
  };
  const handleDateChange = (date) => {
    setdate(format(date))
    onPress(false)
  };
  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={handleDateChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef8',
    marginTop: 10,
  },
});

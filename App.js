import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, TextInput} from 'react-native';
let list = [];
let count = 0;
let asdasd = {phoneNum : ''};
export default function App() {
  const [IsAdd, setIsAdd] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [listEmpty, setListEmpty] = useState(true);
  const addPress = () => {
    setIsAdd(true);
  };
  const savePress = () => {
    asdasd = {phoneNumber: `${phoneNum}`};
    list[count] = asdasd;
    setIsAdd(false);
  }
  const InputPhone = (num) => {
    setPhoneNum(num);
  }
     
    if(!IsAdd){
      if(list.length === 0){
        return (
          <View style={styles.container}>
              {console.log(list[0])}
              <View>
                <Text>
                  새 번호를 추가해 보세요!
                </Text>
              </View>
              <TouchableOpacity style={styles.add_btn} onPress={addPress}>
                <Text>전화번호 추가</Text>
              </TouchableOpacity>
            <StatusBar style="auto" />
          </View>
        );
      } else{
        return (
          <View style={styles.container}>
              {console.log(list[0])}
              <View>
                <Text>
                  {
                  list[0].phoneNumber
                  }
                </Text>
              </View>
              <TouchableOpacity style={styles.add_btn} onPress={addPress}>
                <Text>전화번호 추가</Text>
              </TouchableOpacity>
            <StatusBar style="auto" />
          </View>
        );
      }
     
    } else{
      return(
        <View style={styles.container}>
            <TextInput
            onChangeText={InputPhone}
            placeholder="아무거나 입력해주세요."
            />
            <TouchableOpacity style={styles.add_btn} onPress={savePress}>
              <Text>저장</Text>
            </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add_btn: {
    backgroundColor:'gray'
  }
});

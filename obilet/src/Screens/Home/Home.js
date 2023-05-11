import React, {useState, Component} from 'react';
import {
  Text,
  View,
  Button,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import {SelectList} from 'react-native-dropdown-select-list';
import {Calendar} from 'react-native-calendars';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  function valuesFunc() {
    const values = {
      userName: text,
      userTc: number,
      userNereden: nereden,
      userNereye: nereye,
      userRota: value,
    };
    console.log(nereden);
    navigation.navigate(navigationStrings.PROFILE, {values});

    console.log(values);
  }

  

  const [showModal, setShowModal] = React.useState(false);
  const [nereden, setNereden] = React.useState('');
  const [nereye, setNereye] = React.useState('');

  const categories = [
    {key: 'bursa', value: 'Bursa'},
    {key: 'izmir', value: 'Izmir'},
    {key: 'istanbul', value: 'Istanbul'},
    {key: 'balikesir', value: 'Balikesir'},
    {key: 'ankara', value: 'Ankara'},
    {key: 'cesme', value: 'Cesme'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerBack}>
        <Text style={styles.headerFirst}>biletara.</Text>
        <Text style={styles.headerSecond}>com</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonsOpac}>
          <Text>
            <FontAwesome
              name="bus"
              style={{color: 'black', fontSize: 27}}></FontAwesome>
          </Text>
          <Text style={{fontSize: 15}}>Otobus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsOpac}>
          <Text>
            <FontAwesome
              name="plane"
              style={{
                color: 'black',
                fontSize: 30,
                marginRight: 20,
              }}></FontAwesome>
          </Text>
          <Text style={{fontSize: 15}}>Ucak</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsOpac}>
          <Text>
            <FontAwesome
              name="hotel"
              style={{color: 'black', fontSize: 30}}></FontAwesome>
          </Text>
          <Text>Otel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsOpac}>
          <Text>
            <FontAwesome
              name="car"
              style={{color: 'black', fontSize: 30}}></FontAwesome>
          </Text>
          <Text>Arac</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: 66,
            height: 50,
          }}>
          <Text>
            <MaterialCommunityIcons
              name="ferry"
              style={{color: 'black', fontSize: 30}}></MaterialCommunityIcons>
          </Text>
          <Text>Feribot</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.homeBack}>
        <View style={styles.card}>
          <Text
            style={{
              marginStart: 15,
              marginTop: 5,
              color: 'red',
              fontWeight: 'bold',
            }}>
            NEREDEN
          </Text>
          <SelectList
            boxStyles={{margin: 10}}
            dropdownStyles={{margin: 10}}
            setSelected={val => setNereden(val)}
            data={categories}
            placeholder={'Nereden'}
            search={true}
          />
          <Text
            style={{
              marginStart: 15,
              marginTop: 5,
              color: 'red',
              fontWeight: 'bold',
            }}>
            NEREYE
          </Text>
          <SelectList
            boxStyles={{margin: 10}}
            dropdownStyles={{margin: 10}}
            setSelected={val1 => setNereye(val1)}
            data={categories}
            placeholder={'Nereye'}
            search={true}
          />
        </View>
        <View style={styles.card}>
          <Text
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: StyleSheet.hairlineWidth,
              margin: 10,
            }}>
            Gidis Tarihi:
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
            }}
            onPress={() => setShowModal(true)}>
            <Text style={{fontSize: 22, color: 'white'}}>Tarih Sec</Text>
          </TouchableOpacity>
          <Modal visible={showModal} animationType="fade">
            <Calendar
              style={{borderRadius: 10, elevation: 4, margin: 40}}
              onDayPress={date => {
                console.log(date);
                setShowModal(false); //
              }}
            />
          </Modal>
          <View style={styles.calendarButton}>
            <Pressable
              style={styles.today}
              title="Bugun"
              onPress={() => {
                console.log('Bugun');
              }}>
              <Text style={{fontSize: 15, margin: 8}}>Bugun</Text>
            </Pressable>
            <Pressable
              style={styles.tomorrow}
              title="Yarin"
              onPress={() => {
                console.log('Yarin');
              }}>
              <Text style={{fontSize: 15, margin: 8}}>Yarin</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.deneme}>
          <Button
            color={'#3EB489'}
            onPress={valuesFunc}
            title="Otobus Bileti Bul"
          />
        </View>
        <View></View>

        <Text style={styles.navigationText}>
          Kesintisiz Iade Hakki ve 0 Komisyon
        </Text>
      </View>
    </View>
  );
};
export default Home;

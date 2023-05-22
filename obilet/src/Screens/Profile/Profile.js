import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  FlatList,
  Alert,
  Dimensions,
  StatusBar,
} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SliderButton from '../../components/buttons/SliderButton/SliderButton';
import SiralaButton from '../../components/buttons/SiralaButton/SiralaButton';
import Modal from 'react-native-modal';
import Card from '../../components/Card';

const {width, height} = Dimensions.get('window');

const Profile = ({navigation, route}) => {
  const [showFiltreModal, setShowFiltreModal] = useState(false);
  const [visible, setVisible] = useState(true);
  const [sirala, setSirala] = useState(false);

  const buttonsData = [
    'FİLTRE',
    '2+1',
    'Sabaha Karşı',
    'Sabah',
    'Öğle',
    'Akşam',
    'Bağlayan Gece',
  ];
  //const {title} = route.params;
  const {values} = route.params;
  //console.log("VALUES: ", values)

  /*function rota(){
    if(values.userRota==0){
      values.userRota='gidis';
    }else if(values.userRota==1){
      values.userRota='donus';
    }else{
      values.userRota='gidis-donus';
    }
  }
  
  rota();
  
  */
  function gecis() {
    navigation.navigate(navigationStrings.EXPLORE, {});
  }

  const renderButtons = ({item}) => {
    setVisible(true);
    let themeVal = 'secondary';
    let icon = '';
    let clickFunc = () => Alert.alert('Butona Basıldı', item);

    if (item === 'FİLTRE') {
      themeVal = 'primary';
      icon = 'filter';
      clickFunc = () => setShowFiltreModal(!showFiltreModal);
    }
    return (
      <SliderButton
        icon={icon}
        press={clickFunc}
        theme={themeVal}
        textString={item}
        style={{margin: 10, borderWidth: 1, padding: 10, borderRadius: 10}}
      />
    );
  };

  return (
    <View style={{backgroundColor: '#d33b38'}}>
      <StatusBar backgroundColor="#d33b38" />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'white', margin: 8, fontSize: 19}}>
          {values.nereden}
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 5,
            padding: 1,
          }}>
          <MaterialIcons
            name="compare-arrows"
            style={{
              color: 'white',
              fontSize: 19,
              alignSelf: 'center',
            }}></MaterialIcons>
        </View>

        <Text style={{color: 'white', margin: 8, fontSize: 19}}>
          {values.nereye}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-around',
        }}>
        {/* ÖNCEKİ BUTTON START */}
        <Pressable
          style={{
            margin: 5,
            borderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 8,
            borderColor: 'white',
            width: '26%',
          }}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{color: 'white', padding: 0, margin: 0}}>
              {'<'} Önceki
            </Text>
          </View>
        </Pressable>
        {/* ÖNCEKİ BUTTON END */}

        {/* TARİH BUTTON START */}
        <Pressable
          style={{
            flexDirection: 'row',
            flex: 1,
            margin: 5,
            borderWidth: 1,
            padding: 5,
            borderRadius: 8,
            borderColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            style={{
              color: 'white',
              fontSize: 19,
              alignSelf: 'center',
            }}></MaterialCommunityIcons>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{color: 'white'}}>{values.gidisTarihiString}</Text>
          </View>
        </Pressable>
        {/* TARİH BUTTON END */}

        {/* SONRAKI BUTTON START */}
        <Pressable
          style={{
            margin: 5,
            borderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 8,
            borderColor: 'white',
            width: '25%',
          }}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{color: 'white', padding: 0, margin: 0}}>
              Sonraki{'>'}
            </Text>
          </View>
        </Pressable>
      </View>
      {/* SONRAKI BUTTON END */}

      <View
        style={{backgroundColor: 'white', flexDirection: 'row', padding: 5}}>
        <FlatList
          horizontal
          data={buttonsData}
          ListHeaderComponent={SiralaButton}
          renderItem={renderButtons}
        />
      </View>

      {/* FİLTRE MODAL START */}
      <Modal
        isVisible={showFiltreModal}
        onBackButtonPress={() => setShowFiltreModal(!showFiltreModal)}
        onBackdropPress={() => setShowFiltreModal(!showFiltreModal)}
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        style={{
          width: width,
          height: (height / 3) * 2,
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            width: width,
            height: (height / 3) * 2,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: '#d33b38',
            }}>
            <Pressable
              style={{flexDirection: 'row'}}
              onPress={() => Alert.alert('SIFIRLA Basıldı')}>
              <MaterialCommunityIcons
                name="rotate-3d-variant"
                style={{color: 'white', fontSize: 19}}></MaterialCommunityIcons>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                {' '}
                SIFIRLA
              </Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: -10,
              }}>
              <MaterialCommunityIcons
                name="filter"
                style={{color: 'white', fontSize: 19}}></MaterialCommunityIcons>
              <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
                {' '}
                FİLTRE
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowFiltreModal(!showFiltreModal)}>
              <MaterialCommunityIcons
                name="close"
                style={{color: 'white', fontSize: 28}}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View style={{padding: 15}}>
            <Text style={{fontWeight: 'bold', fontSize: 35}}>
              FİLTRE ÖZELLİKLERİ BURAYA GELECEK
            </Text>
          </View>
        </View>
      </Modal>
      {/* FİLTRE MODAL END */}

      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Boşluk</Text>
      </View>

      <Card
        saat="21:00"
        fiyat="179 TL"
        logo="https://cdn-cf.cms.flixbus.com/drupal-assets/ogimage/kamilkoc.png"
        sure="4s 10dk*"
        koltuk="2+1"
        nereden="Bursa Otogarı"
        nereye="İstanbul Otogarı"
        indirimKodu="70 TL indirim kodu"
        otoban="Yeni Otoban"
        incele="incele"
      />

      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Boşluk</Text>
      </View>

      <Card
        saat="22:00"
        fiyat="199 TL"
        logo="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0023/7870/brand.gif?itok=_vPaQDdd"
        sure="4s 40dk*"
        koltuk="2+1"
        nereden="Bursa Otogarı"
        nereye="İstanbul Otogarı"
        indirimKodu="50 TL indirim kodu"
        otoban="Yeni Otoban"
        incele="incele"
      />
      
    </View>
  );
};
export default Profile;

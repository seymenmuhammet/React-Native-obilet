import React, {useState, Component} from 'react';
import {
  Text,
  View,
  Button,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';
import {Calendar} from 'react-native-calendars';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import allCities from '../../../src/cities.json'
import { format } from 'date-fns'

const {width, height} = Dimensions.get("window")

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
  

  const [showNeredenModal, setShowNeredenModal] = useState(false);
  const [showNereyeModal, setShowNereyeModal] = useState(false);
  
  const [showTarihModal, setShowTarihModal] = useState(false);
  const [nereden, setNereden] = useState('Ankara');
  const [nereye, setNereye] = useState('Bursa');
  const [gidisTarihi, setGidisTarihi] = useState("Gidiş Tarihi Seçiniz");

  const categories = [
    {id: '0', value: 'İstanbul Avrupa'},
    {id: '1', value: 'İstanbul Anadolu'},
    {id: '2', value: 'Ankara'},
    {id: '3', value: 'İzmir'},
    {id: '4', value: 'Adana'},
    {id: '5', value: 'Bursa'},
    {id: '6', value: 'Antalya'},
    {id: '7', value: 'Eskişehir'},
    {id: '8', value: 'Konya'},
    {id: '9', value: 'Mersin'},
  ];


  const cities = categories;

  const renderCities = ({item}) => {
    return(
      <TouchableOpacity style={{padding:10, borderBottomWidth:1}} onPress={() => {setNereden(item.value);setShowNeredenModal(!showNeredenModal);console.log(item.value)} } >
        <Text style={{color:'black', fontSize:12, fontWeight:'bold'}}>{item.value}</Text>
      </TouchableOpacity>
    )
  }
  const renderCitiesNereye = ({item}) => {
    return(
      <TouchableOpacity style={{padding:10, borderBottomWidth:1}} onPress={() => {setNereye(item.value);setShowNereyeModal(!showNereyeModal);console.log(item.value)} } >
        <Text style={{color:'black', fontSize:12, fontWeight:'bold'}}>{item.value}</Text>
      </TouchableOpacity>
    )
  }

  const digerDuraklar = () => {
    return(
      <View>
        <View style={{backgroundColor:'lightgray', padding:5}}>
          <Text style={{color:'black', fontSize:12}}>Diğer Duraklar</Text>
          </View>
      <FlatList data={allCities["cities"]} renderItem={renderCities} />
      </View>
    )
  }
  const enCokKullanilanDuraklar = () => {
    return(
      <View>
        <View style={{backgroundColor:'lightgray', padding:5}}>
          <Text style={{color:'black', fontSize:12}}>En Çok Kullanılan Duraklar</Text>
          </View>
      <FlatList data={cities} renderItem={renderCities} />
      </View>
    )
  }
  const digerDuraklarNereye = () => {
    return(
      <View>
        <View style={{backgroundColor:'lightgray', padding:5}}>
          <Text style={{color:'black', fontSize:12}}>Diğer Duraklar</Text>
          </View>
      <FlatList data={allCities["cities"]} renderItem={renderCitiesNereye} />
      </View>
    )
  }
  const enCokKullanilanDuraklarNereye = () => {
    return(
      <View>
        <View style={{backgroundColor:'lightgray', padding:5}}>
          <Text style={{color:'black', fontSize:12}}>En Çok Kullanılan Duraklar</Text>
          </View>
      <FlatList data={cities} renderItem={renderCitiesNereye} />
      </View>
    )
  }


  const handleDayPress = (day) => {
    const dateString = day.dateString;
    const date = new Date(dateString);
    const options = { month: 'long', weekday: 'long'  };
    const dateStringFormatted = date.toLocaleDateString('tr-TR', options);
    const dateAsString = day.day + " " +  dateStringFormatted
    console.log(dateAsString);
    setGidisTarihi(dateAsString)
    setShowTarihModal(false)
  };


  const handleTodaysDate = () => {
    const day = new Date().getDay()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const date = new Date(year, month, day);
    const options = { month: 'long', weekday: 'long'  };
    const dateFormatted = day + " " + date.toLocaleDateString("tr-TR", options)
    setGidisTarihi(dateFormatted)
    console.log(dateFormatted)
  };

  const handleTomorrowsDate = () => {
    const day = new Date().getDay() + 1
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const date = new Date(year, month, day);
    const options = { month: 'long', weekday: 'long'  };
    const dateFormatted = day + " " + date.toLocaleDateString("tr-TR", options)
    setGidisTarihi(dateFormatted)
    console.log(dateFormatted)
  };

  // _____  _   _  _______  ______  _____   ______             _____  ______ 
  // |_   _|| \ | ||__   __||  ____||  __ \ |  ____|    /\     / ____||  ____|
  //   | |  |  \| |   | |   | |__   | |__) || |__      /  \   | |     | |__   
  //   | |  | . ` |   | |   |  __|  |  _  / |  __|    / /\ \  | |     |  __|  
  //  _| |_ | |\  |   | |   | |____ | | \ \ | |      / ____ \ | |____ | |____ 
  // |_____||_| \_|   |_|   |______||_|  \_\|_|     /_/    \_\ \_____||______|


  return (
    <View style={styles.container}>

{/* ******************* BANNER START ******************* */}
      <View style={styles.headerBack}>
        <Text style={styles.headerFirst}>biletara.</Text>
        <Text style={styles.headerSecond}>com</Text>
      </View>
{/* ******************* BANNER END ******************* */}

{/* ******************* BUTTONS START ******************* */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonsOpac}>
          <Text> <FontAwesome name="bus" style={{color: 'black', fontSize: 27}}></FontAwesome> </Text>
          <Text style={{fontSize: 15}}>Otobüs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsOpac}>
          <Text> <FontAwesome name="plane" style={{ color: 'black', fontSize: 30, marginRight: 20, }}></FontAwesome> </Text>
          <Text style={{fontSize: 15}}>Uçak</Text>
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
{/* ******************* BUTTONS END ******************* */}

{/*****************
****HOME START*****
*****************/}
      <View style={styles.homeBack}>
        
{/* NEREDEN NEREYE CARD START */}
        <View style={styles.card}>

          <Text style={styles.neredenNereyeTitle}>NEREDEN</Text>
          <TouchableOpacity style={{marginLeft:15}} onPress={() => setShowNeredenModal(true) }>
              <Text style={styles.neredenNereyeSecimText}>{nereden}</Text>
          </TouchableOpacity>

          <View style={styles.neredenNereyeDivider} />
          
          <Text style={styles.neredenNereyeTitle}>NEREYE</Text>
          <TouchableOpacity style={{marginLeft:15}} onPress={() => setShowNereyeModal(true)}>
            <Text style={styles.neredenNereyeSecimText}>{nereye}</Text>
          </TouchableOpacity>

        </View>
{/* NEREDEN NEREYE CARD END */}


{/* GİDİŞ TARİHİ CARD START */}
        <View style={styles.card}>

            <Text style={styles.gidisTarihiTitle}> Gidis Tarihi: </Text>

          <TouchableOpacity style={{}} onPress={() => setShowTarihModal(true)}>
            <Text style={styles.gidisTarihiTextValue}>{gidisTarihi}</Text>
          </TouchableOpacity>

          <View style={styles.gidisTarihiDivider} />


          <View style={styles.calendarButtons}>
            <Pressable
              style={styles.today}
              title="Bugün"
              onPress={handleTodaysDate}>
              <Text style={{fontSize: 15, margin: 6,textAlign:'center'}}>Bugün</Text>
            </Pressable>

            <Pressable
              style={styles.tomorrow}
              title="Yarın"
              onPress={handleTomorrowsDate}>
              <Text style={{fontSize: 15, margin: 6,textAlign:'center', color:'white',}}>Yarın</Text>
            </Pressable>
            
          </View>

        </View>
{/* GİDİŞ TARİHİ CARD END */}
        
{/* ******************* BİLETBUL BUTTON START ******************* */}
          <Pressable onPress={valuesFunc} style={styles.biletBulButton}>
            <Text style={styles.biletBulButtonText}>
              Otobüs Bileti Bul
            </Text>
          </Pressable>
{/* ******************* BİLETBUL BUTTON END ******************* */}


{/* ******************* FOOTER START ******************* */}
        <Text style={styles.footerText}>
          Kesintisiz İade Hakkı ve 0 Komisyon
        </Text>
{/* ******************* FOOTER END ******************* */}


      </View>

{/*****************
******HOME END*****
*****************/}


{/* ******************* TARİH MODAL START ******************* */}
<Modal 
        isVisible={showTarihModal} 
        onBackButtonPress={() => setShowTarihModal(!showTarihModal)}
        onBackdropPress={() => setShowTarihModal(!showTarihModal)}
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        style={{width:width, height:height/2, margin:0, justifyContent:'flex-end'}}
      >
        <View style={{width:width, height:height/2, backgroundColor:'white'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', paddingHorizontal:15, paddingVertical:10, backgroundColor:'#d33b38'}}>
              <View style={{flexDirection:"row",alignItems:'center'}}>
                <MaterialCommunityIcons name="calendar" style={{color: 'white', fontSize: 19}}></MaterialCommunityIcons>
                <Text style={{color:"white", fontSize:14, fontWeight:'bold'}}> GİDİŞ TARİHİ</Text>
                </View>
              <TouchableOpacity onPress={() => setShowTarihModal(!showTarihModal)}>
                <MaterialCommunityIcons name="close" style={{color: 'white', fontSize: 28}}></MaterialCommunityIcons>
              </TouchableOpacity> 
          </View>
          <View>
            <Calendar
              style={{borderRadius: 10, elevation: 4, margin: 0}}
              onDayPress={handleDayPress}
            />
          </View>
        </View>
      </Modal>
{/* ******************* TARİH MODAL END ******************* */}

{/* ******************* NEREDEN MODAL START ******************* */}
      <Modal 
        isVisible={showNeredenModal} 
        onBackButtonPress={() => setShowNeredenModal(!showNeredenModal)}
        onBackdropPress={() => setShowNeredenModal(!showNeredenModal)}
        statusBarTranslucent={false}
        animationType="fade"
        transparent={false}
        style={{width:"100%", height:"100%", backgroundColor:'green', margin:0, justifyContent:'flex-start'}}

      >
        <View style={{backgroundColor:'#bb1111', flex:1}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'white',fontSize:11, fontWeight:'600',marginLeft:15, marginTop:10}}>NEREDEN</Text>
            <TouchableOpacity onPress={() => setShowNeredenModal(!showNeredenModal)}>
              <MaterialCommunityIcons
              name="close"
              style={{color: 'white', fontSize: 26,marginTop:10, marginRight:6}}></MaterialCommunityIcons>
              </TouchableOpacity> 
            </View>
          <View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',alignItems:'center', margin:15, padding:0,borderRadius:4}}>

          <TextInput placeholder='İl veya ilçe adı yazın' style={{flex:1,borderRadius:5, padding:5, paddingLeft:15}} />
          <MaterialCommunityIcons
              name="magnify"
              style={{color: 'gray', fontSize: 21, marginTop:3, marginRight:6}}></MaterialCommunityIcons>

          </View>
          <FlatList ListHeaderComponent={enCokKullanilanDuraklar} ListFooterComponent={digerDuraklar} style={{backgroundColor:'white', flex:1}} />
        </View>
      </Modal>
{/* ******************* NEREDEN MODAL END ******************* */}


{/* ******************* NEREYE MODAL START ******************* */}
      <Modal 
        isVisible={showNereyeModal} 
        onBackButtonPress={() => setShowNereyeModal(!showNereyeModal)}
        onBackdropPress={() => setShowNereyeModal(!showNereyeModal)}
        statusBarTranslucent={false}
        animationType="fade"
        transparent={false}
        style={{width:"100%", height:"100%", backgroundColor:'green', margin:0, justifyContent:'flex-start'}}

      >
        <View style={{backgroundColor:'#bb1111', flex:1}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'white',fontSize:11, fontWeight:'600',marginLeft:15, marginTop:10}}>NEREYE</Text>
            <TouchableOpacity onPress={() => setShowNereyeModal(!showNereyeModal)}>
              <MaterialCommunityIcons
              name="close"
              style={{color: 'white', fontSize: 26,marginTop:10, marginRight:6}}></MaterialCommunityIcons>
              </TouchableOpacity> 
            </View>
          <View style={{backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',alignItems:'center', margin:15, padding:0,borderRadius:4}}>

          <TextInput placeholder='İl veya ilçe adı yazın' style={{flex:1,borderRadius:5, padding:5, paddingLeft:15}} />
          <MaterialCommunityIcons
              name="magnify"
              style={{color: 'gray', fontSize: 21, marginTop:3, marginRight:6}}></MaterialCommunityIcons>

          </View>
          <FlatList ListHeaderComponent={enCokKullanilanDuraklarNereye} ListFooterComponent={digerDuraklarNereye} style={{backgroundColor:'white', flex:1}} />
        </View>
      </Modal>
{/* ******************* NEREYE MODAL END ******************* */}


    </View> //container
  );
};
export default Home;
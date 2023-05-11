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
  
  const [showModal, setShowModal] = React.useState(false);
  const [nereden, setNereden] = React.useState('Ankara');
  const [nereye, setNereye] = React.useState('Bursa');

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
          <TouchableOpacity style={{marginLeft:15}} onPress={() => setShowNeredenModal(true) }>
              <Text style={{fontWeight:'400', color:'black', marginVertical:8}}>{nereden}</Text>
          </TouchableOpacity>

          <View style={{height:0.8, width:"90%",borderTopColor:"gray", borderTopWidth:1, marginHorizontal:10}} />
          
          <Text
            style={{
              marginStart: 15,
              marginTop: 5,
              color: 'red',
              fontWeight: 'bold',
            }}>
            NEREYE
          </Text>

          <TouchableOpacity style={{marginLeft:15}} onPress={() => setShowNereyeModal(true)}>
            <Text style={{fontWeight:'400', color:'black', marginVertical:8}}>{nereye}</Text>
          </TouchableOpacity>


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
            <Text style={{fontSize: 22, color: 'white'}}>Tarih Seç</Text>
          </TouchableOpacity>

          
          
{/*           
      <Modal visible={showModal} animationType="fade">
        <Calendar
          style={{borderRadius: 10, elevation: 4, margin: 40}}
          onDayPress={date => {
            console.log(date);
            setShowModal(false); //
          }}
        />
      </Modal> 
*/}

          <View style={styles.calendarButton}>
            <Pressable
              style={styles.today}
              title="Bugün"
              onPress={() => {
                console.log('Bugün');
              }}>
              <Text style={{fontSize: 15, margin: 8}}>Bugün</Text>
            </Pressable>
            <Pressable
              style={styles.tomorrow}
              title="Yarın"
              onPress={() => {
                console.log('Yarın');
              }}>
              <Text style={{fontSize: 15, margin: 8}}>Yarın</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.deneme}>
          <Button
            color={'#3EB489'}
            onPress={valuesFunc}
            title="Otobüs Bileti Bul"
          />
        </View>
        <View></View>

        <Text style={styles.navigationText}>
          Kesintisiz İade Hakkı ve 0 Komisyon
        </Text>
      </View>

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


    </View>
  );
};
export default Home;

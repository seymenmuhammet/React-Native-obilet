import { SafeAreaView, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './Nereden.styles.js'
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import allCities from '../../../cities.json'

const NeredenNereye = ({viz}) => {


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
      const [nereden, setNereden] = React.useState('Ankara');
      
      
      
      const renderCities = ({item}) => {
        return(
          <TouchableOpacity style={{padding:10, borderBottomWidth:1}} onPress={() => {setNereden(item.value);console.log(item.value)} } >
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




    return (
        <Modal 
        isVisible={viz} 
        onBackButtonPress={() => console.log("pressed")}
        onBackdropPress={() => console.log("pressed")}
        statusBarTranslucent={false}
        animationType="fade"
        transparent={false}
        style={{width:"100%", height:"100%", backgroundColor:'green', margin:0, justifyContent:'flex-start'}}

      >
        <View style={{backgroundColor:'#bb1111', flex:1}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'white',fontSize:11, fontWeight:'600',marginLeft:15, marginTop:10}}>NEREDEN</Text>
            <TouchableOpacity onPress={() => console.log("x buton")}>
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
    )
}

export default NeredenNereye;
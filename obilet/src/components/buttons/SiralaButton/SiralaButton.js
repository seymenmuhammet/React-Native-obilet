import { SafeAreaView, Text, View, Pressable } from 'react-native'
import React from 'react'
import styles from './SiralaButton.styles.js'
import ExpanableList from 'react-native-expandable-section-flatlist';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SliderButton from '../SliderButton/SliderButton.js';

const SiralaButton = () => {
    const icon = "order-alphabetical-ascending"

    const _renderRow = (rowItem, rowId, sectionId) => (
    <SliderButton 
        press={() => console.log("pressed→: ", rowItem)} 
        theme={"secondary"} 
        textString={rowItem.title}
    />
    )

    
    const _renderSection = (section, sectionId)  => (
        <View style={styles.container}>
                  <MaterialCommunityIcons name={icon} style={styles.iconS} />
                  <Text style={{fontSize:15,color:'white'}}>
                    {section}
                  </Text>
              </View>
       )
        const mockData = [
          {
            title: 'SIRALA',
            member: [
              {
                title: 'Saate Göre',
              },
              {
                title: 'Fiyata Göre',
              },
            ]},];
  
    return (
        <ExpanableList
        rowEnabled
          dataSource={mockData}
          headerKey="title"
          memberKey="member"
          renderRow={_renderRow}
          renderSectionHeaderX={_renderSection}
          openOptions={[1,2,]}
       />
    );
  }

export default SiralaButton;
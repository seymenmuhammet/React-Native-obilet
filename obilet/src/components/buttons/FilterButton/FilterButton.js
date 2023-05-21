import { Pressable, Text } from 'react-native'
import React from 'react'
import styles from './FilterButton.styles.js'

const FilterButton = ({press,title}) => {
    return(
        <Pressable onPress={press} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default FilterButton;
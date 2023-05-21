import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const darkRedColor = "#d33b38"

export default styles = StyleSheet.create({
    // MODAL START
    modal: {
        width: width,
        height: (height / 3) * 2,
        margin: 0,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        width: width,
        height: (height / 3) * 2,
        backgroundColor: 'white'
    },
    modalContainer2: {
        flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: darkRedColor,
    },
    clearButton: {
        flexDirection:'row',
    },
    clearButtonIcon: {
        color: 'white', 
        fontSize: 19,
    },
    clearButtonText: {
        color:'white', 
        fontSize:15,
        fontWeight:'bold',
    },
    modalMain: {
        padding:15,
    },
    modalMainText: {
        fontWeight:'bold',
        fontSize:35,
    },
    modalCloseIcon: {
        color: 'white', 
        fontSize: 28,
    },
    modalTitleText:{
        color: 'white', 
        fontSize: 14, 
        fontWeight: 'bold',
    },
    modalFilterIcon: {
        color: 'white', 
        fontSize: 19
    },
    modalTitleContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft:-30
    }

    //MODAL END




})
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#d33b38'
    },
    fromToContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    fromText: {
        color:'white',
        margin:8,
        fontSize:19,
    },
    fromToIconContainer: {
        borderWidth:1,
        borderColor:'white',
        borderRadius:5,
        padding:1,
    },
    fromToIcon: {
        color: 'white',
        fontSize: 19,
        alignSelf:'center',
    },
});

export default styles;
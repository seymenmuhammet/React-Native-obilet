import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
    container:{
        margin:5,
        paddingHorizontal:15,
        paddingVertical:2,
        borderWidth:1,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:15
    },
    iconS: {
        color: 'white', 
        fontSize: 19,
        alignSelf:'center',
        marginRight:5,
    }
});

export default styles = StyleSheet.create({
    primary: {
        container:{
            ...base_style.container,
            backgroundColor:'#d33b38',


        },
        text: {
            ...base_style.text,
            color:'white'
        },
        iconS:{
            ...base_style.iconS,
        }
    },
    secondary: {
        container:{
            ...base_style.container,
            backgroundColor:'white'

        },
        text: {
            ...base_style.text,
            color:'gray',
            paddingVertical:5,
        },
        iconS: {
            ...base_style.iconS,
        }
    },
})
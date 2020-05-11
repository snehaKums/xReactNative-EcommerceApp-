import {
    StyleSheet,
    Dimensions,
  } from 'react-native';
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
      backgroundColor:"#eeeeee"
    },
    headerStyle:{
      fontSize:20,
      fontWeight:'bold',
      color:'#00BFFF',
      textAlign:'center'
    },
    userList:{
      flex:1,
    },
    cardContent: {
      marginLeft:20,
      marginTop:10
    },
    image:{
      width:90,
      height:90,
      borderRadius:45,
      resizeMode:'contain'
    },
    Detailimage:{
      width:110,
      height:170,
      resizeMode:'contain'
    },
      card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      marginVertical: 10,
      marginHorizontal:20,
      backgroundColor:"white",
      flexBasis: '46%',
      padding: 10,
      flexDirection:'row'
    },
    price:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
    },
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
    },
    detailButton: {
      marginTop:10,
      height:35,
      width:100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    detailButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
    popup: {
      backgroundColor: 'white',
      marginTop: 80,
      marginHorizontal: 20,
      borderRadius: 7,
    },
    popupOverlay: {
      backgroundColor: "#00000057",
      flex: 1,
      marginTop: 30
    },
    popupContent: {
      margin: 5,
      height:250,
    },
    popupHeader: {
      marginBottom: 45
    },
    popupButtons: {
      marginTop: 15,
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: "#eee",
      justifyContent:'center'
    },
    popupButton: {
      flex: 1,
      marginVertical: 16
    },
    btnClose:{
      height:20,
      backgroundColor:'#20b2aa',
      padding:20
    },
    modalInfo:{
      alignItems:'center',
      justifyContent:'center',
    }
  }); 

  export default styles
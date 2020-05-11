import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions,ScrollView } from 'react-native';
var { width } = Dimensions.get("window")
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Cart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataCart:[],
    };
 }
 componentDidMount()
  {
    AsyncStorage.getItem('cart').then((cart)=>{
      if (cart !== null) {
        const cartfood = JSON.parse(cart)
        this.setState({dataCart:cartfood})
      }
      else{
        alert('Cart is empty')
      }
    })
    .catch((err)=>{
      alert(err)
    })
  }
  onChangeQual(i,type)
  {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    if (type) {
     cantd = cantd + 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(i,1)
     this.setState({dataCart:dataCar})
    } 
  }
  render() {
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <View style={{height:20}} />
         <Text style={{fontSize:32,fontWeight:"bold",color:"#00BFFF"}}>Cart Items</Text>
         <View style={{height:10}} />

         <View style={{flex:1}}>

           <ScrollView>
             {
               this.state.dataCart.map((item,i)=>{
                 return(
                   <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                     <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.food.img}} />
                     <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"space-between"}}>
                       <View>
                         <Text style={{fontWeight:"bold", fontSize:20}}>{item.food.name}</Text>
                       </View>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text style={{fontWeight:'600',color:"black",fontSize:20}}>Rs.{item.food.price*item.quantity}</Text>
                         <View style={{flexDirection:'row', alignItems:'center'}}>
                           <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                             <Icon name="ios-remove-circle" size={35} color={"#00BFFF"} />
                           </TouchableOpacity>
                           <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.quantity}</Text>
                           <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                             <Icon name="ios-add-circle" size={35} color={"#00BFFF"} />
                           </TouchableOpacity>
                         </View>
                       </View>
                     </View>
                   </View>
                 )
               })
             }
           </ScrollView>

         </View>

      </View>
    );
  }
}
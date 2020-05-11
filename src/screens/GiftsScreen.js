import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Components/styles';
var {width} = Dimensions.get('window');

export default class GiftsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: require('../../Json/gifts.json'),

    };
  }

  clickEventListener = (item) => {
    this.setState({userSelected: item}, () =>{
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onClickAddCart(data){

    const itemcart = {
      food: data,
      quantity:  1,
      price: data.price
    }
 
    AsyncStorage.getItem('cart').then((datacart)=>{
        if (datacart !== null) {
          const cart = JSON.parse(datacart)
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        else{
          const cart  = []
          cart.push(itemcart)
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        alert("Added to Cart")
      })
      .catch((err)=>{
        alert(err)
      })
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
         <Text style={styles.headerStyle}>GIFTS</Text>  
        <FlatList 
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={data['gifts'] }
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image style={styles.image} source={{uri: item.img}}/>
              <View style={styles.cardContent}>
                <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                <TouchableOpacity style={styles.detailButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.detailButtonText}>Details</Text>  
                </TouchableOpacity>
              </View>
            </View>
          )}}/>

      <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <Image style={styles.Detailimage} source={{uri: this.state.userSelected.img}}/>
                    <Text style={styles.name}>{this.state.userSelected.name}</Text>
                    <Text style={styles.price}>Ratings: {this.state.userSelected.review}</Text>
                    <Text style={styles.price}>Price: {this.state.userSelected.price}</Text>
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
              <TouchableOpacity
                   onPress={()=>this.onClickAddCart(this.state.userSelected)}
                    style={{
                      width:(width/2)-40,
                      backgroundColor:'#20b2aa',
                      marginRight:10,
                      flexDirection:'row',
                      alignItems:'center',
                      justifyContent:"center",
                      padding:4
                    }}>
            <Text style={styles.txtClose}>Add Cart</Text>
            <View style={{width:10}} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}


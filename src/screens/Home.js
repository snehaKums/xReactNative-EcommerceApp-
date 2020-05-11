import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,ImageBackground
} from "react-native";

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Books')}
                    style={{marginBottom:10}}>
                    <View>
                    <ImageBackground style={{height:218,width:380}}
                        source={{uri: 'https://media.istockphoto.com/photos/books-picture-id949118068?k=6&m=949118068&s=612x612&w=0&h=JQ8TsVv0Bx36l1KwwhOaAz564l8MIDSRFebHbLqGjIA=', }}>
                        <Text style={{color:'white',fontSize:30,fontWeight:'bold',margin:10}}>Books</Text>
                    </ImageBackground>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Electronics')}
                    style={{marginBottom:10}}>
                    <View>
                    <ImageBackground style={{height:218,width:380}}
                        source={{uri: 'https://www.ansys.com/-/media/ansys/corporate/blog/semiconductor-blogs/what-is-crosstalk-electromagnetic-challenges-trends-electronics/what-is-crosstalk-electromagnetic-challenges-trends-electronics-modelling.jpg?h=662&w=1000&la=en&hash=CD20B406A007E344286D3D14346A07984E605FCA', }}>
                        <Text style={{color:'white',fontSize:30,fontWeight:'bold',margin:10}}>Electronics</Text>
                    </ImageBackground>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Gifts')}
                    style={{marginBottom:10}}>
                    <View>
                    <ImageBackground style={{height:218,width:380}}
                        source={{uri: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }}>
                        <Text style={{color:'white',fontSize:30,fontWeight:'bold',margin:10}}>Gifts</Text>
                    </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
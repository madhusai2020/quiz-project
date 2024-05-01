import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function CuatroScreen(props) {
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Fruits Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>Where do pineapples originate from?</Text>
            <Image style={{height:50, width:100, marginBottom:100}}source={{uri:"https://media.self.com/photos/5b4371cc4d0c3c282a8878d3/4:3/w_2560%2Cc_limit/pineapple.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{fontSize:20}}>America</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('CorrectScreen')}><Text style={{ fontSize:20}}>South America</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{fontSize:20}}>Africa</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{ fontSize:20}}>Australia</Text></TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={{ paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:200, height:60,
  backgroundColor:"pink" }} 
   onPress={()=>props.navigation.navigate('NewScreen')}
  >
    
  
    <Text style={{color:"black", fontSize:40,fontWeight:"90", marginLeft:10, alignItems:"center"}}>Next -{'>'}</Text></TouchableOpacity>
            </View>
        </View>
    )
}

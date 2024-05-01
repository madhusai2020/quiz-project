import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function TresScreen(props) {
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
          <ScrollView>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Fruits Quiz</Text>
            <Text style={{fontSize:40, marginBottom:30}}>What fruit produces potassium?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=pexels-matheus-cenali-2487443.jpg&fm=jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'CuatroScreen'})}><Text style={{fontSize:20}}>Oranges</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'CuatroScreen'})}><Text style={{ fontSize:20}}>Apples</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'CuatroScreen'})}><Text style={{fontSize:20}}>Tomatoes</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:100, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100}} onPress={()=>props.navigation.navigate('CorrectScreen', {data2:'CuatroScreen'})}><Text style={{ fontSize:20}}>Bananas</Text></TouchableOpacity>
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
            </ScrollView>
        </View>
    )
}

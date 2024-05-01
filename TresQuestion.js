import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function TresQuestion(props) {
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Movie Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>Who was the actor of "Iron Man"?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen', {data2:'CuatroQuestion'})}><Text style={{fontSize:40}}>Robert Downey Jr.</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1305}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {data2:'CuatroQuestion'})}><Text style={{ fontSize:40}}>Chris Hemsworth</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {data2:'CuatroQuestion'})}><Text style={{fontSize:40}}>Chris Pratt</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1305}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {data2:'CuatroQuestion'})}><Text style={{ fontSize:40}}>Paul Rudd</Text></TouchableOpacity>
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
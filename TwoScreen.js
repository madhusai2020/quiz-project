import { useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function TwoScreen(props) {
  const route = useRoute()
  const [PScoreMath, setPScoreMath] = useState(route.params.data1);
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Math Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>What is 297 + 548?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1159691840/photo/1-12-written-on-blackboard.jpg?s=612x612&w=0&k=20&c=C7RgImxJ5-85zhVjbGU3p3ioHXNWe21KSKcv4fsLjHU="}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen' , {data2:'ThreeScreen'})}><Text style={{fontSize:40}}>850</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'ThreeScreen'})}><Text style={{ fontSize:40}}>865</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen', {data2:'ThreeScreen'})}><Text style={{fontSize:40}}>845</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'ThreeScreen'})}><Text style={{ fontSize:40}}>855</Text></TouchableOpacity>
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
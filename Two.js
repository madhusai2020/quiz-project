import { useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function Two(props) {
  const route = useRoute()
  const [PScoreCoding, setPScoreCoding] = useState(route.params.data1);
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Coding Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>Which one of these are not a Coding language?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://img.freepik.com/premium-vector/people-walk-public-park-family-going-with-children-dog-pet-eating-ice-cream-kid-riding-bicycle-couple-sitting-grass_102902-5898.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'Three'})}><Text style={{fontSize:40}}>Java</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'Three'})}><Text style={{ fontSize:40}}>Python</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen', {data2:'Three'})}><Text style={{fontSize:40}}>Bite</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen', {data2:'Three'})}><Text style={{ fontSize:40}}>JavaScript</Text></TouchableOpacity>
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
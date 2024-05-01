import { useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function SecondQuestion(props) {
  const route = useRoute()
  const [PScoreMovie, setPScoreMovie] = useState(route.params.data1);
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Movie Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>Who was the actor for Jack Sparrow in Pirates of the Carrabien?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://i.pinimg.com/236x/ee/27/0c/ee270c0881811f3e866615f520990575.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie' , {data2:'TresQuestion'})}><Text style={{fontSize:40}}>Tom Cruise</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreenMovie' , {data2:'TresQuestion'})}><Text style={{ fontSize:40}}>Adam Sandler</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie',{data2:'TresQuestion'})}><Text style={{fontSize:40}}>Tom Hanks</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('CorrectScreen', {data2:'TresQuestion'})}><Text style={{ fontSize:40}}>Johhny Depp</Text></TouchableOpacity>
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
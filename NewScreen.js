import { useRoute } from '@react-navigation/core'
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function NewScreen(props) {
  const route = useRoute()
  const [PScore,setPScore] =useState(route.params.data1);
  
    return (
        <View style={{alignItems:"center", justifyContent:"center"}}>
            
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Spanish Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>How do you say "How are you?" in Spanish?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://i.pinimg.com/736x/26/bb/54/26bb54150f0c4e7fa39f3f8b2fdec295.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen',{data2:'ThirdQuestion'})}><Text style={{fontSize:30}}>Comment allez-vous</Text></TouchableOpacity>
            <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('WrongScreen',{data2:'ThirdQuestion'})}><Text style={{ fontSize:40}}>You How</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:50 }}>  
          <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen',{data2:'ThirdQuestion'})}><Text style={{fontSize:30}}>Cómo te llamas?</Text></TouchableOpacity>
            <TouchableOpacity style={{height:90, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>props.navigation.navigate('CorrectScreen',{data2:'ThirdQuestion'})}><Text style={{ fontSize:40}}>Cómo estás?</Text></TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={{ paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:200, height:60,
  backgroundColor:"pink" }} 
   onPress={()=>props.navigation.navigate('NewScreen')}
  >
    
  
    <Text style={{color:"black", fontSize:40,fontWeight:"90", marginLeft:10, alignItems:"center"}}>Next -{'>'}</Text></TouchableOpacity>
    <Text> Total Score: {PScore}</Text>
            </View>
        </View>
    )
}

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function ThreeQuiz(props) {
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Science Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>At what temperature are Celsius and Fahrenheit equal?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Raumthermometer_Fahrenheit%2BCelsius.jpg/640px-Raumthermometer_Fahrenheit%2BCelsius.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:150, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreenScience', {data2:'FourQuiz'})}><Text style={{fontSize:40}}>Never</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:2000}} onPress={()=>props.navigation.navigate('WrongScreenScience', {data2:'FourQuiz'})}><Text style={{ fontSize:40}}>0</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:150, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen', {data2:'FourQuiz'})}><Text style={{fontSize:40}}>-40</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:150, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:2050}} onPress={()=>props.navigation.navigate('WrongScreenScience', {data2:'FourQuiz'})}><Text style={{ fontSize:40}}>100</Text></TouchableOpacity>
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
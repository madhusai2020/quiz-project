import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function OneScreen(props) {

  const ScreenNameMath='TwoScreen'
  const [ScoreMath,setScoreMath]=useState(0)
  function CorrectMath(){
    setScoreMath(ScoreMath+5)
  }
  function WrongMath(){
    setScoreMath(ScoreMath+0)
  }
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Math Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>What is 10 x 10?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://selfsufficientkids.com/wp-content/uploads/2017/07/multiplication-math-facts.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>{WrongMath();props.navigation.navigate('WrongScreen' , {data1:ScoreMath, data2:ScreenNameMath})}}><Text style={{fontSize:40}}>200</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>{CorrectMath();props.navigation.navigate('CorrectScreen', {data1:ScoreMath, data2:ScreenNameMath})}}><Text style={{ fontSize:40}}>100</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>{WrongMath();props.navigation.navigate('WrongScreen', {data1:ScoreMath, data2:ScreenNameMath})}}><Text style={{fontSize:40}}>10x10</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>{WrongMath();props.navigation.navigate('WrongScreen', {data1:ScoreMath, data2:ScreenNameMath})}}><Text style={{ fontSize:40}}>20</Text></TouchableOpacity>
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
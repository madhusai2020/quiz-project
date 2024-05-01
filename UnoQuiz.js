import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


export default function UnoQuiz(props) {

  const ScreenNameFruits='DosQuiz'
  const [ScoreFruits,setScoreFruits]=useState(0)
  function CorrectFruits(){
    setScoreFruits(ScoreFruits+5)
  }
  function WrongFruits(){
    setScoreFruits(ScoreFruits+0)
  }
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Fruits Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>What type of vitamins do oranges produce?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>{WrongFruits();props.navigation.navigate('WrongScreen' , {data1:ScoreFruits, data2:ScreenNameFruits})}}><Text style={{fontSize:40}}>Vitamin A</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>{WrongFruits();props.navigation.navigate('WrongScreen', {data1:ScoreFruits, data2:ScreenNameFruits})}}><Text style={{ fontSize:40}}>Vitamin B</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>{CorrectFruits();props.navigation.navigate('CorrectScreen', {data1:ScoreFruits, data2:ScreenNameFruits})}}><Text style={{fontSize:40}}>Vitamin C</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:300, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>{WrongFruits();props.navigation.navigate('WrongScreen', {data1:ScoreFruits, data2:ScreenNameFruits})}}><Text style={{ fontSize:40}}>Vitamin D</Text></TouchableOpacity>
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
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function ScreenOne(props) {
  const ScreenNameLA= 'ScreenTwo'
  const [ScoreLA, setScoreLA] = useState(0)
function CorrectLA (){
setScoreLA(ScoreLA + 5)
}
function WrongLA(){
setScoreLA(ScoreLA + 0)
}
    return (
     
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Language Arts Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>What is the verb in the sentence: "He is running away from the park"?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://img.freepik.com/premium-vector/people-walk-public-park-family-going-with-children-dog-pet-eating-ice-cream-kid-riding-bicycle-couple-sitting-grass_102902-5898.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>{WrongLA();props.navigation.navigate('WrongScreen', {data1:ScoreLA, data2:ScreenNameLA})}}><Text style={{fontSize:40}}>"away"</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1625}} onPress={()=>{WrongLA();props.navigation.navigate('WrongScreen', {data1:ScoreLA, data2:ScreenNameLA})}}><Text style={{ fontSize:40}}>"is"</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>{props.navigation.navigate('WrongScreen', {data1:ScoreLA, data2:ScreenNameLA})}}><Text style={{fontSize:40}}>"park"</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1625}} onPress={()=>{CorrectLA();props.navigation.navigate('CorrectScreen', {data1:ScoreLA, data2:ScreenNameLA})}}><Text style={{ fontSize:40}}>"running"</Text></TouchableOpacity>
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
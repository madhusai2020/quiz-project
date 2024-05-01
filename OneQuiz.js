import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function OneQuiz(props) {
  const ScreenNameScience = 'TwoQuiz'

  const [ScoreScience, setScoreScience] = useState(0)
  function CorrectScience (){
    setScoreScience(ScoreScience + 5)
  }
  function WrongScience(){
    setScoreScience (ScoreScience + 0)
  }
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Science Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>What is the hardest material in the world?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/176982445/photo/ruby-xl.jpg?s=612x612&w=0&k=20&c=XjNZgXXR6ipGOVkSsV7UNnBbEaD48VbkB3wyKg-ArAk="}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>{CorrectScience();props.navigation.navigate('CorrectScreenScience', {data1:ScoreScience, data2:ScreenNameScience})}}><Text style={{fontSize:40}}>Diamond</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:2000}} onPress={()=>{WrongScience();props.navigation.navigate('WrongScreenScience', {data1:ScoreScience, data2:ScreenNameScience})}}><Text style={{ fontSize:40}}>Emerald</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:150, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"red", textAlign:"center"}} onPress={()=>{WrongScience();props.navigation.navigate('WrongScreenScience', {data1:ScoreScience, data2:ScreenNameScience})}}><Text style={{fontSize:40}}>Ruby</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:200, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:2050}} onPress={()=>{WrongScience();props.navigation.navigate('WrongScreenScience',{data1:ScoreScience, data2:ScreenNameScience})}}><Text style={{ fontSize:40}}>Sapphire</Text></TouchableOpacity>
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
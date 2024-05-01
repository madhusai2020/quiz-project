import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function FirstQuestion(props) {
  const ScreenNameMovie = 'SecondQuestion'

  const [ScoreMovie, setScoreMovie] = useState(0)
  function CorrectMovie (){
    setScoreMovie(ScoreMovie + 5)
  }
  function WrongMovie(){
    setScoreMovie (ScoreMovie + 0)
  }
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Movie Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>What is the highest grossing movie of all time?</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://images2.alphacoders.com/131/1315111.jpg"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center"}} onPress={()=>{WrongMovie();props.navigation.navigate('WrongScreenMovie', {data1:ScoreMovie, data2:ScreenNameMovie})}}><Text style={{ fontSize:40}}>Avengers: Endgame</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", marginLeft:1300}} onPress={()=>{CorrectMovie();props.navigation.navigate('CorrectScreen', {data1:ScoreMovie, data2:ScreenNameMovie})}}><Text style={{fontSize:40}}>Avatar</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>{WrongMovie();props.navigation.navigate('WrongScreenMovie', {data1:ScoreMovie, data2:ScreenNameMovie})}}><Text style={{fontSize:40}}>Avengers: Infinity War</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:400, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1300}} onPress={()=>{WrongMovie();props.navigation.navigate('WrongScreenMovie', {data1:ScoreMovie, data2:ScreenNameMovie})}}><Text style={{ fontSize:40}}>Titanic</Text></TouchableOpacity>
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
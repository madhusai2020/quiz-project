import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function ScreenFour(props) {
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Language Arts Quiz</Text>
            <Text style={{fontSize:50, marginBottom:30}}>Which is the correct way to punctuate the following sentence:
            My dad said clean your room.</Text>
            <Image style={{height:250, width:500, marginBottom:100}}source={{uri:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}}></Image>
          <View style={{flexDirection:"row", marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:800, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center"}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{fontSize:40}}>My dad said, "clean your room."</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:800, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:1000}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{ fontSize:40}}>My dad said "Clean your room"</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:100, marginBottom:100 }}>  
          <TouchableOpacity style={{height:50, width:800, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center"}} onPress={()=>props.navigation.navigate('CorrectScreen')}><Text style={{fontSize:40}}>My dad said, "Clean your room."</Text></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:800, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:1000}} onPress={()=>props.navigation.navigate('WrongScreen')}><Text style={{ fontSize:40}}>My dad said "clean your room."</Text></TouchableOpacity>
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
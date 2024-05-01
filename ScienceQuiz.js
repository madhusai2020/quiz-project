import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function Quizzes(props) {
    return (
        <View>
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:40}}>Quiz Details</Text>
            <Image style={{width:500, height:350, borderRadius:10, marginLeft:40, marginTop:10, justifyContent:'center', alignItems:"center"}} source={{uri:"https://img.freepik.com/free-vector/hand-drawn-colorful-science-education-background_23-2148475858.jpg"}}></Image>
            <Text style={{textDecorationLine:"underline", fontWeight:"bold", fontSize:40, marginLeft:40, marginBottom:10}}>Science Quiz:</Text>
        </View>
        <Text style={{fontSize:20, marginLeft:10, marginBottom:20}}>This is a quiz based on your understanding in Science. Let's see if you are a true expert in Science or a student. Try your best and strive to get 100% on the test! This test will be filled with challenging and hard problems. Try your best and good Luck!!</Text>
        <Text style={{fontSize:30, textDecorationLine:"underline", fontWeight:"bold", marginLeft:10}}>Rules:</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- No looking up answers online</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- Dont't try to ask others for help, as it is a test to see how much you know not what others know.</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- No using any Perodic tables or searching things up on the internet </Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- Try your best and get 100%</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- With every answer you get correct you will recieve 5 points, so try to get every answer correct.</Text>
        <Text style={{fontSize:20, marginLeft:20, marginBottom:40}}>-- Getting every answer correct will get more points. So try to answer everything correctly. Good Luck and try your best!</Text>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity
     style={{paddingVertical:6,
            paddingHorizontal:16,
             width:180, height:25,marginLeft:30,marginRight:100,
            backgroundColor:"lime" }} 
             onPress={()=>props.navigation.navigate('OneQuiz')}
            >
              
            
              <Text style={{color:"white", fontSize:15,fontWeight:"900", marginLeft:10}}>Play Game</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{width:180, height: 20, backgroundColor:"red"}} onPress={()=>props.navigation.navigate('Catalog')}>
                   <Text style={{color:"white", fontSize:15, fontWeight:900, marginLeft:40,marginBottom:1}}>Cancel</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

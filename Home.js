import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Image } from 'react-native';

export default function Home(props) {
  return (
    
    <View style={{flex:1}}>
 <Text style={{fontSize:20, color:"#6B5B95", fontWeight:"bold"}}><i>Quizzin</i></Text>
 <Text style={{textAlign:"center", fontSize: 50, marginBottom:80, color:"blue"}}>Welcome to Quizzin - a quiz website!</Text>
 <View style={{ flexDirection:"row", marginBottom:10}}>
<View>


<Text style={{marginLeft:20, textDecorationLine:'underline', marginBottom:30, fontWeight:'bold', fontSize:40}}>Easy to Use:</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Our website is one that has features that is accessible for your kids and is ranked #1 in the world for these easy to use features. </Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Lorem ipsum once said that by the dawn we stand for you will find that we are the champions.</Text>   
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Our website is one that has features that is accessible for your kids and is ranked #1 in the world for these easy to use features. </Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Lorem ipsum once said that by the dawn we stand for you will find that we are the champions.</Text>  <Text style={{marginBottom:5, marginLeft:20, fontSize:20}}>Our website is one that has features that is accessible for your kids and is ranked #1 in the world for these easy to use features. </Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Lorem ipsum once said that by the dawn we stand for you will find that we are the champions.</Text>  <Text style={{marginBottom:5, marginLeft:20, fontSize:20}}>Our website is one that has features that is accessible for your kids and is ranked #1 in the world for these easy to use features. </Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>
<Text style={{marginLeft:20, marginBottom:20, fontSize:20}}>Lorem ipsum once said that by the dawn we stand for you will find that we are the champions.</Text>  
 </View>


 <Image style={{width:300, height :350, borderRadius:10, marginLeft:100, marginTop:50}} source={{uri:"https://www.shutterstock.com/image-vector/modern-gold-easy-use-vector-260nw-214245091.jpg"}}></Image>
 </View>
 

<View style={{flexDirection:'row', marginBottom:10}}>
<View>
<Text style={{marginLeft:20, textDecorationLine:'underline', marginBottom:30, fontWeight:'bold', fontSize:40}}>Interactive:</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Our website is one that has features that is accessible for your kids and is ranked #1 in the world for these easy to use features. </Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Interactive is very and like it is very cool to use as well.</Text>  
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Our website is one that has features that is accessible for your kids and is ranked #1 in the world for these easy to use features. </Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Lorem ipsum once said that by the dawn we stand for you will find that we are the champions.</Text>  <Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Our website is one that has features that is accessible for your kids and is ranked #1 in the world for these easy to use features. </Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>
<Text style={{marginLeft:20,marginBottom:30, fontSize:20}}>Lorem ipsum once said that by the dawn we stand for you will find that we are the champions.</Text>  
</View>
<Image style={{width:500, height :350, margin:20, marginLeft:40}} source={{uri:"https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png"}}></Image>
</View>
<Text style={{marginBottom:10, fontSize:15, color:"red", fontWeight:"bold"}}>To view our quizzes click on the button below:</Text>
<TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:120, height:30,
  backgroundColor:"black" }} 
   onPress={()=>props.navigation.navigate('Catalog')}
  >
    
  
    <Text style={{color:"white", fontSize:15,fontWeight:"900", marginLeft:10}}> Catalog </Text>
  </TouchableOpacity>
    </View>

    
  );
}


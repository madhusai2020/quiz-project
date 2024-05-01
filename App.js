
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home'
import Catalog from'./Screens/Catalog'
import Quizzes from './Screens/SpanishQuiz/Quizzes'
import Game from './Screens/SpanishQuiz/Game'
import CorrectScreen from './Screens/SpanishQuiz/CorrectScreen'
import NewScreen from './Screens/SpanishQuiz/NewScreen'
import MathQuiz from './Screens/MathQuiz/MathQuiz'
import OneScreen from './Screens/MathQuiz/OneScreen'
import TwoScreen from './Screens/MathQuiz/TwoScreen'
import ThreeScreen from './Screens/MathQuiz/ThreeScreen'
import FourScreen from './Screens/MathQuiz/FourScreen'
import ScienceQuiz from './Screens/ScienceQuiz/ScienceQuiz'
import OneQuiz from './Screens/ScienceQuiz/OneQuiz'
import LanguageArts from'./Screens/LanguageArtsQuiz/LanguageArts'
import ScreenOne from './Screens/LanguageArtsQuiz/ScreenOne'
import CodingQuiz from './Screens/CodingQuiz/CodingQuiz'
import CorrectCoding from './Screens/CodingQuiz/CorrectCoding'
import One from './Screens/CodingQuiz/One'
import Two from './Screens/CodingQuiz/Two'
import Three from './Screens/CodingQuiz/Three'
import Four from './Screens/CodingQuiz/Four'
import ThirdQuestion from './Screens/SpanishQuiz/ThirdQuestion'
import FourthQuestion from'./Screens/SpanishQuiz/FourthQuestion'
import CorrectScreenScience from './Screens/ScienceQuiz/CorrectScreenScience'
import TwoQuiz from './Screens/ScienceQuiz/TwoQuiz'
import ThreeQuiz from './Screens/ScienceQuiz/ThreeQuiz'
import FourQuiz from './Screens/ScienceQuiz/FourQuiz'
import ScreenTwo from './Screens/LanguageArtsQuiz/ScreenTwo'
import ScreenThree from './Screens/LanguageArtsQuiz/ScreenThree'
import ScreenFour from './Screens/LanguageArtsQuiz/ScreenFour'
import Basketbal1Quiz from './Screens/Basketball/BasketballQuiz'
import CorrectBasketball from './Screens/Basketball/CorrectBasketball'
import OneQuestion from './Screens/Basketball/OneQuestion'
import TwoQuestion from './Screens/Basketball/TwoQuestion'
import ThreeQuestion from './Screens/Basketball/ThreeQuestion'
import FourQuestion from './Screens/Basketball/FourQuestion'
import HistoryQuiz from './Screens/HistoryQuiz/HistoryQuiz'
import FirstQuiz from './Screens/HistoryQuiz/FirstQuiz'
import SecondQuiz from './Screens/HistoryQuiz/SecondQuiz'
import ThirdQuiz from './Screens/HistoryQuiz/ThirdQuiz'
import FourthQuiz from './Screens/HistoryQuiz/FourthQuiz'
import MoviesQuiz from './Screens/MoviesQuiz/MoviesQuiz'
import FirstQuestion from './Screens/MoviesQuiz/FirstQuestion'
import CorrectMovie from './Screens/MoviesQuiz/CorrectMovie'
import SecondQuestion from './Screens/MoviesQuiz/SecondQuestion'
import TresQuestion from './Screens/MoviesQuiz/TresQuestion'
import CuatroQuestion from './Screens/MoviesQuiz/CuatroQuestion'
import FruitsQuiz from './Screens/FruitsQuiz/FruitsQuiz'
import UnoQuiz from './Screens/FruitsQuiz/UnoQuiz'
import DosQuiz from './Screens/FruitsQuiz/DosQuiz'
import CorrectFruits from './Screens/FruitsQuiz/CorrectFruits'
import TresScreen from './Screens/FruitsQuiz/TresScreen'
import CuatroScreen from './Screens/FruitsQuiz/CuatroScreen'
import WrongScreenScience from './Screens/ScienceQuiz/WrongScreenScience'
import WrongScreen from './Screens/SpanishQuiz/WrongScreen'
import WrongScreenMovie from './Screens/MoviesQuiz/WrongScreenMovie'
import WrongScreenMath from './Screens/MathQuiz/WrongScreenMath'
import WrongLA from './Screens/LanguageArtsQuiz/WrongLA'
import WrongHistory from './Screens/HistoryQuiz/WrongHistory'
import WrongFruits from './Screens/FruitsQuiz/WrongFruits'
import WrongCoding from './Screens/CodingQuiz/WrongCoding'
import WrongBasketball from './Screens/Basketball/WrongBasketball'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name="Home" component={Home}>


       </Stack.Screen>
       <Stack.Screen name="Catalog" component={Catalog}>

       </Stack.Screen>
       <Stack.Screen name="Quizzes" component={Quizzes}>

       </Stack.Screen>
       <Stack.Screen name="Game" component={Game}>

       </Stack.Screen>
     
       <Stack.Screen name="CorrectScreen" component={CorrectScreen}>

       </Stack.Screen>
       <Stack.Screen name="NewScreen" component={NewScreen}>

       </Stack.Screen>
       <Stack.Screen name="MathQuiz" component={MathQuiz}></Stack.Screen>

       <Stack.Screen name="OneScreen"  component={OneScreen}></Stack.Screen>
       <Stack.Screen name="TwoScreen" component={TwoScreen}></Stack.Screen>
       <Stack.Screen name="ThreeScreen" component={ThreeScreen}></Stack.Screen>
       <Stack.Screen name="FourScreen" component={FourScreen}></Stack.Screen>
       <Stack.Screen name="ScienceQuiz"  component={ScienceQuiz}></Stack.Screen>
       <Stack.Screen name="OneQuiz" component={OneQuiz}></Stack.Screen>
       <Stack.Screen name="LanguageArts" component={LanguageArts}></Stack.Screen>
       <Stack.Screen name="ScreenOne" component={ScreenOne}></Stack.Screen>
       <Stack.Screen name="CodingQuiz" component={CodingQuiz}></Stack.Screen>
       <Stack.Screen name= "One" component={One}></Stack.Screen>
       <Stack.Screen name= "Two" component={Two}></Stack.Screen>
       <Stack.Screen name= "Three" component={Three}></Stack.Screen>
       <Stack.Screen name= "Four" component={Four}></Stack.Screen>
       <Stack.Screen name= "CorrectCoding" component={CorrectCoding}></Stack.Screen>
       <Stack.Screen name="ThirdQuestion" component={ThirdQuestion}></Stack.Screen>
       <Stack.Screen name="FourthQuestion" component={FourthQuestion}></Stack.Screen>
       <Stack.Screen name="CorrectScreenScience" component={CorrectScreenScience}></Stack.Screen>
       <Stack.Screen name="TwoQuiz" component={TwoQuiz}></Stack.Screen>
       <Stack.Screen name="ThreeQuiz" component={ThreeQuiz}></Stack.Screen>
       <Stack.Screen name="FourQuiz" component={FourQuiz}></Stack.Screen>
       <Stack.Screen name="ScreenTwo" component={ScreenTwo}></Stack.Screen>
       <Stack.Screen name="ScreenThree" component={ScreenThree}></Stack.Screen>
       <Stack.Screen name="ScreenFour" component={ScreenFour}></Stack.Screen>
       <Stack.Screen name="BasketballQuiz" component={Basketbal1Quiz}></Stack.Screen>
       <Stack.Screen name="CorrectBasketball" component={CorrectBasketball}></Stack.Screen>
       <Stack.Screen name="OneQuestion" component={OneQuestion}></Stack.Screen>
       <Stack.Screen name="TwoQuestion" component={TwoQuestion}></Stack.Screen>
       <Stack.Screen name="ThreeQuestion" component={ThreeQuestion}></Stack.Screen>
       <Stack.Screen name="FourQuestion" component={FourQuestion}></Stack.Screen>
       <Stack.Screen name="HistoryQuiz" component={HistoryQuiz}></Stack.Screen>
       <Stack.Screen name="FirstQuiz" component={FirstQuiz}></Stack.Screen>
       <Stack.Screen name="SecondQuiz" component={SecondQuiz}></Stack.Screen>
       <Stack.Screen name="ThirdQuiz" component={ThirdQuiz}></Stack.Screen>
       <Stack.Screen name="FourthQuiz" component={FourthQuiz}></Stack.Screen>
       <Stack.Screen name="MoviesQuiz" component={MoviesQuiz}></Stack.Screen>
       <Stack.Screen name="FirstQuestion" component={FirstQuestion}></Stack.Screen>
       <Stack.Screen name="SecondQuestion" component={SecondQuestion}></Stack.Screen>
       <Stack.Screen name="CorrectMovie" component={CorrectMovie}></Stack.Screen>
       <Stack.Screen name="TresQuestion" component={TresQuestion}></Stack.Screen>
       <Stack.Screen name="CuatroQuestion" component={CuatroQuestion}></Stack.Screen>
       <Stack.Screen name="FruitsQuiz" component={FruitsQuiz}></Stack.Screen>
       <Stack.Screen name="UnoQuiz" component={UnoQuiz}></Stack.Screen>
       <Stack.Screen name="DosQuiz" component={DosQuiz}></Stack.Screen>
       <Stack.Screen name="CorrectFruits" component={CorrectFruits}></Stack.Screen>
       <Stack.Screen name="TresScreen" component={TresScreen}></Stack.Screen>
       <Stack.Screen name="CuatroScreen" component={CuatroScreen}></Stack.Screen>
       <Stack.Screen name="WrongScreenScience" component={WrongScreenScience}></Stack.Screen>
       <Stack.Screen name="WrongScreen" component={WrongScreen}></Stack.Screen>
       <Stack.Screen name="WrongScreenMovie" component={WrongScreenMovie}></Stack.Screen>
       <Stack.Screen name="WrongScreenMath" component={WrongScreenMath}></Stack.Screen>
       <Stack.Screen name="WrongLA" component={WrongLA}></Stack.Screen>
       <Stack.Screen name="WrongHistory" component={WrongHistory}></Stack.Screen>
       <Stack.Screen name="WrongFruits" component={WrongFruits}></Stack.Screen>
       <Stack.Screen name="WrongCoding" component={WrongCoding}></Stack.Screen>
       <Stack.Screen name="WrongBasketball" component={WrongBasketball}></Stack.Screen>
       

     </Stack.Navigator>
    </NavigationContainer>
    

    
  );
}



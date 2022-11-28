import { useCallback,useState, useEffect } from "react";
import{View, Text, Image} from "react-native";
import{styles} from "../styles/homescreen";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Philosopher_700Bold } from "@expo-google-fonts/philosopher";
import { SafeArea } from "../utilities/AreaView";


export function HomeScreen(){
    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        
        await Font.loadAsync({Lobster_400Regular, Philosopher_700Bold});
        
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

    return (
        <SafeArea>
         <View style= {styles.container}> 
            <View style={styles.nav}>
              <Text style={styles.brandName}> mymoni</Text>
              <View style={styles.profile}>
                <Image source={require('../assets/profile-pix.jpeg')}
                style={styles.profilePix}/>
           
              </View>          
             </View>
              <View style= {styles.homeContent}>
                 <View style= {styles.tipBlock}>
                   <Text styles= {styles.tipDate}>12 June 2022</Text>
                     <View style= {styles.tipDetails}>
                       <View styles= {styles.tipTextBlock}>
                     <Text styles= {styles.tip}>No matter who you are, there are certain financial advice basics
                                              you should follow. Doing so can help ensure you keep your personal 
                                              finances in good health. Once you have the basics down, managing your 
                                              finances can become much easier. Then, you can move onto some of my more
                                               comprehensive money management tips. </Text>
                 </View>
                  <Image styles= {styles.tipImage} source= {required (' ../assets/piggy-bank.jpg')}/>
              </View>
                 <Text style= {styles.previousTipsText}></Text>
               </View>
          

              </View>
              <View style= {styles.fileTrance}>
               
              </View>
              <View style= {styles.upComing}>

              </View>
              <View style= {styles.quizes}>

              </View>
                
              </View>

        </SafeArea>
    )
    
}
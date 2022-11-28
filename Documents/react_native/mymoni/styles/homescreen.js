import { StyleSheet } from "react-native";
import { Theme } from "../themes/Theme";
export const styles=StyleSheet.create({
  container : {
paddingHorizontal :8,   
  },
   brandName:{
    fontFamily:"Lobster_400Regular",
    fontSize: Theme.fonts.fontSizePoint.h3
   } ,
    nav : {
     flexDirection :' row',
      justifyContent : ' space-between',
     alignItems :' center',
margineBottom : 2
    },

       profilePix : {
         width :48,
         height :48,
         borderRadius :50,
       },
       homeContent : {
         flex :1 
       },
        tipBlock : {
         flex :2 ,
         backgroundColor : Theme.color.purple700,
         padding : Theme.Sizes[3],
          borderRadius :Theme.Sizes[ 3]
       }
      ,
      
       tipDate : {
       color : Theme.colors.brown300,
        fontSize : Theme.fonts.fontSizePoint.body,
        margineBottom : Theme.Sizes[3]
       },
      
       previousTipText : {
         color : Theme.colors.brown300,
           fontSize : Theme.fonts.fontSizePoint.body,
          margineBottom : Theme.Sizes[1],
   textAlign :' right'
         },

     
       

       tipDetails : {
       flexDirection :' row',
       justifyContent: ' space-evenly',
       },

       tipTextBlock : {
       width :160,
      backgroundColor : Theme.color.purple500,
         padding : Theme.Sizes[2],
          borderRadius :Theme.Sizes[3]
         },

       tip:  {
         fontFamily : Theme.fonts.fontFamily.reading,
         fontSize : Theme.fonts.fontSizePoint.h5,
       },

       tipImage : {
         height :' 100%',
         width : 160,
         borderRadius :Theme.Sizes[3]
       },

       fileTrance : {
            flex :1,
       },

       upComing : { 
         flex : 1,
      },
     quizes : { 
      flex  :2
   }


})
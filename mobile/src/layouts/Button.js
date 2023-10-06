import { Image,View, Text, TouchableOpacity,StyleSheet} from 'react-native'

export function NormalButton  (props)  {
    const{onPress, text,img } = props
  return (
    <TouchableOpacity style ={{...style.PanicButton, backgroundColor: "#6D4575"}} onPress={onPress}>
      <View style={style.ViewButton}>
      <Image source={require('../../assets/call.png')} style={{width:50,height:50,}}/>
      <Text style={{...style.TextButton,color:"white",paddingTop:10,}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
export function RectButton  (props)  {
    const{onPress, text} = props
  return (
    <TouchableOpacity style ={{...style.RectButton, backgroundColor:'#6D4575'}} onPress={onPress}>
      <Text style={{...style.TextButton,color:"white"}}>{text}</Text>
    </TouchableOpacity>
  )
}
export function LowButton1  (props)  {
  const{onPress, text} = props
return (
  <TouchableOpacity style ={{...style.LowButton,}} onPress={onPress}>
          <View style={style.ViewButton}>
      <Image source={require('../../assets/cell-signal-x.png')} style={{width:50,height:50,}}/>
      </View>
  </TouchableOpacity>
)
}
export function LowButton  (props)  {
  const{onPress, text} = props
return (
  <TouchableOpacity style ={{...style.LowButton,}} onPress={onPress}>
          <View style={style.ViewButton}>
      <Image source={require('../../assets/user.png')} style={{width:50,height:50,}}/>
      </View>
  </TouchableOpacity>
)
}

const style =StyleSheet.create({

    PanicButton:{
       alignSelf:'center',
       borderRadius: 10,
       paddingVertical: 30,
       width: '80%',
 
    },
    TextButton:{
        textAlign:'center', 


    },
    SquareButton:{
        alignSelf:'center',
        borderRadius: 10,
        paddingVertical: 30,
        width: '40%',
    },
    RectButton:{
        alignSelf:'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '40%',
    },
    LowButton:{
      alignSelf:'center',
      borderWidth:5,
      borderBlockColor:'grey',
      paddingVertical: 15,
      width: '45%',
    },
    ViewButton:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-between',
    },
    
})

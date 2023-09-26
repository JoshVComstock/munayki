import { Image,View, Text, TouchableOpacity,StyleSheet} from 'react-native'

export function NormalButton  (props)  {
    const{onPress, text} = props
  return (
    <TouchableOpacity style ={{...style.PanicButton, backgroundColor: "purple"}} onPress={onPress}>
      <Text style={{...style.TextButton,color:"white"}}>{text}</Text>
    </TouchableOpacity>
  )
}

export function SquareButton  (props)  {
    const{onPress, text} = props
  return (
    <TouchableOpacity style ={{...style.SquareButton, backgroundColor:'purple'}} onPress={onPress}>
      <Text style={{...style.TextButton,color:"white"}}>{text}</Text>
    </TouchableOpacity>
  )
}
export function RectButton  (props)  {
    const{onPress, text} = props
  return (
    <TouchableOpacity style ={{...style.RectButton, backgroundColor:'purple'}} onPress={onPress}>
      <Text style={{...style.TextButton,color:"white"}}>{text}</Text>
    </TouchableOpacity>
  )
}

const style =StyleSheet.create({

    PanicButton:{
       alignSelf:'center',
       borderRadius: 10,
       paddingVertical: 30,
       width: '70%',
 
    },
    TextButton:{
        textAlign:'center', 


    },
    SquareButton:{
        alignSelf:'center',
        borderRadius: 10,
        paddingVertical: 30,
        width: '30%',
    },
    RectButton:{
        alignSelf:'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '30%',
    },
    image:{
      width: 50,
      height:50,
    },
})

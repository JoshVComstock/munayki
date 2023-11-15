import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react'

const AboutUs = ({navigation}) => {
    const [modalVisibleDenuncia, setModalVisibleDenuncia] = useState(false);
    const [modalVisibleSlim, setModalVisibleSlim] = useState(false);
    const [modalVisibleDonde, setModalVisibleDonde] = useState(false);
    const [modalVisibleEntidades, setModalVisibleEntidades] = useState(false);
    const [modalVisibleQuienesSomos, setModalVisibleQuienesSomos] = useState(false);
    const [modalVisibleSoporte, setModalVisibleSoporte] = useState(false);
    const [modalVisiblePrivacidad, setModalVisiblePrivacidad] = useState(false);
    const [isAboutUsStep, setIsAboutUsStep] = useState(true);

    const handlePress = (key) => {
        setModalVisible(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    }

    return (
        <View style={styles.container}>
            {isAboutUsStep ? (
                <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Text style={styles.title}>Otros Botones</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Pressable style={[styles.otherButton,{backgroundColor: '#4dc0df'}]}>
                            <FontAwesome name="wpforms" size={60} color="#fff" />
                            <Text style={[styles.buttonText]}>Formularios</Text>
                        </Pressable>
                        <Pressable style={[styles.otherButton,{backgroundColor: '#fab153'}]}>
                            <FontAwesome name="map-o" size={60} color="#fff" />
                            <Text style={styles.buttonText}>Mapas</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.title}>Informacion</Text>
                     <View style={{flexDirection:'column',paddingLeft:'9%',paddingRight:'0%'}}>
                        <View style={styles.grid}>
                            <Pressable style={[styles.button,{backgroundColor:'#4eb9a7'}]} onPress={() => setModalVisibleDenuncia(true)}>
                                <Text style={styles.text}>Como denunciar</Text>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleDenuncia}
                                onRequestClose={() => {setModalVisibleDenuncia(!modalVisibleDenuncia);}}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Soy una aplicación desarrollada{"\n"}por la Universidad Franz Tamayo (UniFranz) con el objetivo de brindar apoyo en casos relacionados con la violencia.{"\n"}En el marco de este compromiso, nuestro equipo ha creado la aplicación Munayki, una herramienta diseñada para ofrecer recursos y asistencia a quienes enfrentan situaciones de violencia, promoviendo así un entorno más seguro y de apoyo para quienes lo necesitan.</Text>
                                        <Pressable style={styles.nextButton} onPress={() => setModalVisibleDenuncia(!modalVisibleDenuncia)} >
                                            <Text style={styles.text}>Entendido!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.grid}>
                            <Pressable style={[styles.button,{backgroundColor: '#f08721'}]} onPress={() => setModalVisibleSlim(true)}>
                                <Text style={styles.text}>Que hace Slim?</Text>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleSlim}
                                onRequestClose={() => {setModalVisibleSlim(!modalVisibleSlim)}}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Soy una aplicación desarrollada{"\n"}por la Universidad Franz Tamayo (UniFranz) con el objetivo de brindar apoyo en casos relacionados con la violencia.{"\n"}En el marco de este compromiso, nuestro equipo ha creado la aplicación Munayki, una herramienta diseñada para ofrecer recursos y asistencia a quienes enfrentan situaciones de violencia, promoviendo así un entorno más seguro y de apoyo para quienes lo necesitan.</Text>
                                        <Pressable style={styles.nextButton} onPress={() => setModalVisibleSlim(!modalVisibleSlim)} >
                                            <Text style={styles.text}>Entendido!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.grid}>
                            <Pressable style={[styles.button,{backgroundColor:'#ea547a'}]} onPress={() => setModalVisibleDonde(true)}>
                                <Text style={styles.text}>Donde Acudir</Text>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleDonde}
                                onRequestClose={() => {setModalVisibleDonde(!modalVisibleDonde)}}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Soy una aplicación desarrollada{"\n"}por la Universidad Franz Tamayo (UniFranz) con el objetivo de brindar apoyo en casos relacionados con la violencia.{"\n"}En el marco de este compromiso, nuestro equipo ha creado la aplicación Munayki, una herramienta diseñada para ofrecer recursos y asistencia a quienes enfrentan situaciones de violencia, promoviendo así un entorno más seguro y de apoyo para quienes lo necesitan.</Text>
                                        <Pressable style={styles.nextButton} onPress={() => setModalVisibleDonde(!modalVisibleDonde)} >
                                            <Text style={styles.text}>Entendido!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.grid}>
                            <Pressable style={[styles.button, {backgroundColor:'#6d559f'}]} onPress={() => setModalVisibleEntidades(true)}>
                                <Text style={styles.text}>Tus Entidades</Text>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleEntidades}
                                onRequestClose={() => {setModalVisibleEntidades(!modalVisibleEntidades)}}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Soy una aplicación desarrollada{"\n"}por la Universidad Franz Tamayo (UniFranz) con el objetivo de brindar apoyo en casos relacionados con la violencia.{"\n"}En el marco de este compromiso, nuestro equipo ha creado la aplicación Munayki, una herramienta diseñada para ofrecer recursos y asistencia a quienes enfrentan situaciones de violencia, promoviendo así un entorno más seguro y de apoyo para quienes lo necesitan.</Text>
                                        <Pressable style={styles.nextButton} onPress={() => setModalVisibleEntidades(!modalVisibleEntidades)} >
                                            <Text style={styles.text}>Entendido!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <Pressable style={styles.nextButton} onPress={() => setIsAboutUsStep(false)}>
                        <Text style={styles.buttonText}>Sobre Munayki</Text>
                    </Pressable>
                </View>
            ):(
                <View style={{flexDirection:'column',justifyContent:'space-evenly', paddingTop:'10%'}}>
                    <View style={{alignItems:'center'}}>
                        <FontAwesome name="heartbeat" size={160} color="#3c3c3c" />
                    </View>
                    <View style={{flexDirection:'column',paddingLeft:'7%',paddingRight:'0%'}}>
                        <View style={styles.grid}>
                            <Pressable style={[styles.button, {backgroundColor:'#6d559f'}]} onPress={() => setModalVisibleQuienesSomos(true)}>
                                <Text style={styles.text}>Quienes Somos</Text>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleQuienesSomos}
                                onRequestClose={() => {setModalVisibleQuienesSomos(!modalVisibleQuienesSomos)}}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Soy una aplicación desarrollada{"\n"}por la Universidad Franz Tamayo (UniFranz) con el objetivo de brindar apoyo en casos relacionados con la violencia.{"\n"}En el marco de este compromiso, nuestro equipo ha creado la aplicación Munayki, una herramienta diseñada para ofrecer recursos y asistencia a quienes enfrentan situaciones de violencia, promoviendo así un entorno más seguro y de apoyo para quienes lo necesitan.</Text>
                                        <Pressable style={styles.nextButton} onPress={() => setModalVisibleQuienesSomos(!modalVisibleQuienesSomos)} >
                                            <Text style={styles.text}>Entendido!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.grid}>
                            <Pressable style={[styles.button,{backgroundColor:'#f08721'}]} onPress={() => setModalVisibleSoporte(true)}>
                                <Text style={styles.text}>Soporte</Text>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisibleSoporte}
                                onRequestClose={() => {setModalVisibleSoporte(!modalVisibleSoporte)}}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Estamos aquí para ofrecerte el{"\n"}mejor soporte posible. Nuestro{"\n"}equipo profesional y amigable{"\n"}está listo para ayudarte con{"\n"}cualquier pregunta o problema{"\n"}que puedas tener. Puedes{"\n"}contactarnos a través de chat,{"\n"}correo electrónico o teléfono{"\n"}durante horas hábiles. Tu{"\n"}satisfacción es nuestra prioridad,{"\n"}y estamos comprometidos en{"\n"}brindarte la mejor experiencia{"\n"}con nuestros productos y{"\n"}servicios. No dudes en{"\n"}comunicarte con nosotros cuando{"\n"}lo necesites{"\n"}contacta al</Text>
                                        <Pressable style={styles.nextButton} onPress={() => setModalVisibleSoporte(!modalVisibleSoporte)} >
                                            <Text style={styles.text}>Entendido!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.grid}>
                            <Pressable style={[styles.button,{backgroundColor:'#ea547a'}]} onPress={() => setModalVisiblePrivacidad(true)}>
                                <Text style={styles.text}>Tu Privacidad</Text>
                            </Pressable>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisiblePrivacidad}
                                onRequestClose={() => {setModalVisiblePrivacidad(!modalVisiblePrivacidad)}}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Soy una aplicación desarrollada{"\n"}por la Universidad Franz Tamayo (UniFranz) con el objetivo de brindar apoyo en casos relacionados con la violencia.{"\n"}En el marco de este compromiso, nuestro equipo ha creado la aplicación Munayki, una herramienta diseñada para ofrecer recursos y asistencia a quienes enfrentan situaciones de violencia, promoviendo así un entorno más seguro y de apoyo para quienes lo necesitan.</Text>
                                        <Pressable style={styles.nextButton} onPress={() => setModalVisiblePrivacidad(!modalVisiblePrivacidad)} >
                                            <Text style={styles.text}>Entendido!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <Pressable style={[styles.nextButton,{paddingHorizontal:'33%'}]} onPress={() => setIsAboutUsStep(true)}>
                        <Text style={styles.buttonText}>Entidades</Text>
                    </Pressable>
                </View>
            )}
        </View>
    )
}

export default AboutUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:0,
        alignItems:'center',
        width:'100%'
    },
    title:{
        fontSize: 26,
        lineHeight: 27,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#3c3c3c',
        paddingLeft:'5%',
        paddingTop:'5%',
        textDecorationLine: 'underline',
    },
    text:{
        fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 2,
        elevation: 3,
        marginTop:'3%',
    },
    buttonText:{
        fontSize: 26,
        lineHeight: 27,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#3c3c3c',
    },
    nextButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        elevation: 3,
        backgroundColor: '#4dc0df',
        marginTop:'10%'
    },
    otherButton:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 2,
        elevation: 3,
        marginTop:'5%',
        width: '47%',
    },
    grid:{
        padding:"5%",
        width:'90%'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText:{
       marginBottom :15
    }
  });

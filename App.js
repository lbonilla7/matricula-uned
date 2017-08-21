import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Button,
  Alert
} from 'react-native';

const Cuatrimestres = ['Primero', 'Segundo', 'Tercero'];
const Materias = ['Sistemas Operativos', 'Arquitectura de computadores', 'Organización de las computadoras'];

function onPressMatricular (){
  Alert.alert(
    'La información fue almacenada exitosamente!',
    '',
    [
      {text: 'OK'},
    ],
    { cancelable: false }
  )
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centroUniversitario: '',
      cedula: '',
      nombre: '',
      residencia:'',
      materia: '',
      cuatrimestre: '',
      costo: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Centro universitario</Text>
        <TextInput
        style={styles.textInput}
        autoFocus={true}
        onChangeText={(text) => this.setState({centroUniversitario: text})}
        />
        <Text>Cédula</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({cedula: text})}
        />
        <Text>Nombre</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({nombre: text})}
        />
        <Text>Residencia</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({residencia: text})}
        />
        <Text>Materia</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({materia: text})}
        />
        <Text>Cuatrimeste</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({cuatrimestre: text})}
        />
        <Text>Costo</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(num) => this.setState({costo: num})}
        />
        <Button
        onPress={onPressMatricular}
        title="Matricular"
        color="#841584"
        accessibilityLabel="Matricular materia en Centro universitario indicado."
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});

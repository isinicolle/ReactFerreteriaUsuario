import { StatusBar } from 'expo-status-bar';
import { ScrollView,TextInput, StyleSheet, Text, View,Image,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Login,Inicio,Carrito,Busqueda,Pago} from './src/Panallas/'
import PantallaRegistro from './src/Panallas/crearUsuario'
import Registro from './src/Panallas/registroTerminado'
import Contrasena from './src/Panallas/olvidarContrasenia'
import Correo from './src/Panallas/confirmarCorreo'
import Pantalla from './src/Panallas/producto'
import Configuraciones from './src/Panallas/informacionUsuario';
import PantallaDirecciones from './src/Panallas/direcciones'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ListaCarrito } from './src/componentes';
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView>
      <Pago id={2}/>
    </SafeAreaView>
  );
}

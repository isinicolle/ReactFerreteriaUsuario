import { useState,useEffect  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Image, SafeAreaView,Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import ScrollerNumero from '../componentes/ScrollerNumero'
import { Boton, HiperVinculo, TextBox, PasswordBox, Footer, Header} from '../componentes/'
const idproducto=3;
let primera=true;
const productoURL="http://192.168.1.8:6001/api/productos/buscarProducto?id_producto="+idproducto;

const Pantalla = () => {
    const cantidadProp=0;
    const [cantidad,setCantidad]= useState(cantidadProp);
    const [descripcion,setDescripcion]=useState(null);
    const [cantidadxunidad,setCantidadxUnidad]=useState(null);
    const [precio,setPrecio]=useState(null);
    const [stock,setStock]=useState(null);
    const [descuento,setDescuento]=useState(null);
    const [imagen,setImagen]=useState(null);
    const [marca,setMarca]=useState(null);
    const [categoria,setCategoria]=useState(null);


    useEffect(()=>{
        cargar();
    })

    const cargar= async() => {
        if(primera==true){
            fetch(productoURL).then((response)=> response.json())
            .then((json)=>{
                setDescripcion(json.descripcion_producto);
                setCantidadxUnidad(json.cantidad_por_unidad);
                setPrecio(json.precio_actual);
                setStock(json.stock);
                setDescuento(json.descuento);
                setImagen(json.imagen);
                setCategoria(json.Categorias.descripcion_categoria);
                setMarca(json.Marcas.descripcion_marca)
                primera=false;
            })
            .catch((error)=>console.log(error))
        }
    }


    return (
        <ScrollView>
        <View style={styles.container}>
            <Header text={'Producto'} busqueda={false} carrito={true} icon={'chevron-left'}></Header>
            <Image style={styles.logo} source={require('../../assets/Images/Imagotipo.png')} />
            <Text style={styles.nomProducto}>{descripcion}</Text>
            <Text style={styles.cat}>{categoria}</Text>

            <View style={styles.tarjeta}>
                <View style={styles.PrecioyCa}>
                    <View style={styles.textocant}>
                    <Text style={styles.cantidad}>{precio+" Lps"}</Text>
                    </View>
                     <View style={styles.masmenos}>
                     <ScrollerNumero setCantidad={setCantidad} cantidad={cantidad}></ScrollerNumero>

                     </View>
                </View>
                <View style={styles.PrecioyCa}>
                    <Text style={styles.unidad}>Cantidad por unidad: </Text>
                    <Text style={styles.unidad}>{cantidadxunidad}</Text>
                </View>
                <View style={styles.carri}>
                    <Pressable style={styles.button}  >
                        <Text style={styles.text}>Añadir al carrito</Text>
                    </Pressable>
                </View>


            </View>
            <Text style={styles.infoProducto}>Información de producto</Text>


            <View style={styles.tarjeta}>
            <View style={styles.dato}>
               <Text style={styles.cantidad}>Categoria: </Text>
               <Text style={styles.unidad}>{categoria} </Text>

               </View>
               <View style={styles.dato}>
               <Text style={styles.cantidad}>Marca: </Text>
               <Text style={styles.unidad}>{marca}</Text>

               </View>
               <View style={styles.dato}>
               <Text style={styles.cantidad}>Stock: </Text>
               <Text style={styles.unidad}>{stock}</Text>

               </View>
               <View style={styles.dato}>
               <Text style={styles.cantidad}>Descuento: </Text>
               <Text style={styles.unidad}>{descuento}</Text>

               </View>
         
            </View>
            <Footer></Footer>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        height: '100%'
    },

    logo: {
        width: 250,
        height: 250,
        marginTop: '5%',
        marginBottom: '2%',
        padding: 10,
    },
    tarjeta: {
        flex: 3,
        padding: 10,
        backgroundColor: '#fff',

        shadowOffset:
        {
            width: 0,
            height: 5,
        },
        flexDirection: 'column',
        shadowOpacity: 0.44,
        shadowRadius: 5,
        elevation: 16,
        width: '90%',
        flexGrow: 1,
        borderRadius: 20,
        maxWidth: 500,
         height: "100%",
         minHeight: 170,
        margin: 10
    },

    PrecioyCa: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2%",
        backgroundColor: "#fff"
    },

     textocant: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      
    },
    masmenos: {
        flex: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "2%",
        
    },
    carri: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2%",
        backgroundColor: "#fff"
    },

    cantidad: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    unidad: {
        fontSize: 18,

    },

    nomProducto: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 0,
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'justify',
        marginBottom: 10
    },
    infoProducto: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 0,
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'justify',
        marginBottom: 10,
        marginTop: 10
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#C70039',
        marginTop:"3%"
    },
    dato: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderBottomColor:'#111111',
        borderBottomWidth: 1,
        flexDirection: "row",
       },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
export default Pantalla;

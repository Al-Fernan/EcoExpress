import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  fotoPerfil: string;
  nombre: string;
  correo: string;
};

const TarjetaPerfil = ({ fotoPerfil, nombre, correo }: Props) => {
  return (
    <View style={styles.tarjeta}>
      <Image
        source={{ uri: fotoPerfil }}
        style={styles.imagenPerfil}
      />
      <Text style={styles.textoNombre}>{nombre}</Text>
      <Text style={styles.textoCorreo}>{correo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    marginBottom:25
  },
  imagenPerfil:{
    width:100,
    height:100,
    borderRadius:50,
    marginBottom:15
  },
  textoNombre:{
    fontSize:22,
    fontWeight:'bold',
    color:'#2E7D32'
  },
  textoCorreo:{
    fontSize:16,
    color:'#666666',
    marginTop:5
  }
})

export default TarjetaPerfil;
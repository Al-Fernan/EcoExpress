import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import TarjetaPerfil from '../../components/TarjetaPerfil';

export default function PantallaPerfil() {
  const [telefono, setTelefono] = useState("0982523251");
  const urlFoto = "https://www.shutterstock.com/shutterstock/photos/2640814169/display_1500/stock-vector-cyberpunk-anime-style-boy-character-with-edgy-spiky-hair-and-glowing-eyes-illustrated-in-a-bold-2640814169.jpg";
  const nombreUsuario = "Fernando Guanopatin";
  const correoUsuario = "Fernando.guanopatin@ecoexpress.com";

  const guardarCambios = () => {
    Alert.alert("✅ Datos guardados", `Teléfono actualizado: ${telefono}`);
  };

  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={styles.titulo}>Perfil EcoExpress</Text>

      <TarjetaPerfil
        fotoPerfil={urlFoto}
        nombre={nombreUsuario}
        correo={correoUsuario}
      />

      <View style={styles.campoContainer}>
        <Text style={styles.label}>Número de teléfono:</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone‑pad"
        />
      </View>

      <Button
        title="Guardar cambios"
        color="#388E3C"
        onPress={guardarCambios}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal:{
    flex:1,
    backgroundColor:'#a8ebc2',
    paddingTop:50,
    alignItems:'center',
    paddingHorizontal:15
  },
  titulo:{
    fontSize:26,
    fontWeight:'bold',
    color:'#094e18',
    marginBottom:30
  },
  campoContainer:{
    width:'90%',
    marginBottom:20
  },
  label:{
    fontSize:16,
    marginBottom:8,
    color:'#343642'
  },
  input:{
    backgroundColor:'white',
    padding:12,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#8182c7'
  }
})
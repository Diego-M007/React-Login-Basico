import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  const imgB = { uri: 'https://imgs.search.brave.com/qomZtz1g8oyQCGku2s8Xc_d44MSlnwQNXWtRjj3iHa0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzExMS83NDUv/MTkzL3JlYWN0anMt/amF2YXNjcmlwdC1w/cm9ncmFtbWluZy1w/cm9ncmFtbWluZy1s/YW5ndWFnZS1oZC13/YWxscGFwZXItcHJl/dmlldy5qcGc' };
  const logo = { uri: 'https://imgs.search.brave.com/NNd9gqPSrJjKMn4FFOAz-fUsD-4YF0Ng9dVOPwWDu40/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8xMC8wNC80Ny91/c2VyLTI5MzUzNzNf/XzM0MC5wbmc' }

  return (
    <View style={styles.container}>


      <ImageBackground
        source={imgB}
        style={styles.imagemfundo}
      >

        <View style={styles.container_login}>
          <View style={styles.text1}><Text style={styles.text1}>Bem vindo a minha página de Login</Text></View>
          <Image
            source={logo}
            style={styles.logo}
          />

          <TextInput
            placeholder='Digite seu email'
            inputMode={'text'}
            style={styles.input}
          />

          <TextInput
            placeholder='Digite sua senha'
            inputMode={'text'}
            secureTextEntry={true}
            style={styles.input}
          />

          <Button
            title='LOGIN'
            onPress={() => {
              alert('botão de login pressionado');
            }}
            color='gray'
          />

          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 100,
  },
  imagemfundo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container_login: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    width: '70%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 5,
  },
});
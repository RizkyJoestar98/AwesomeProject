import {
  AppLogo,
  IconFacebook
} from '../../assets'
import {
PrimaryButton
} from '../../components'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Image source={AppLogo} style={style.logoTop} />
          <Text style={style.bodyText}>Sign up to see photos and videos from yor friends.</Text>
          <PrimaryButton 
            icon={IconFacebook}
            style={style.loginFacebook}
            title="Log in with Facebook"
            onPress={() => navigation.push('Home')}
            />

            <Text style={[style.bodyText, {marginTop:20}]}>OR</Text>
            
            <TextInput
              style={[style.input, {marginTop:20}]}
              placeholder="phone Number, Username, or Email"
              placeholderTextColor="gray"
            />

            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Password"
            />
            <PrimaryButton 
            style={style.loginFacebook}
            title="Login"
            onPress={() => navigation.push('Main')}
            />
            <TouchableOpacity onPress={() => navigation.push('Register')}>
            <Text style={[style.bodyText, {marginTop:20}]}>
              Tidak Punya Akun?  <Text style={{color: '#1156BD'}}>
             Buat Akun
            </Text>
            </Text>
            </TouchableOpacity>

           
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        margin: 35
    },
    logoTop:{
        alignSelf:'center',
        marginTop:150

    },
    bodyText:{
      textAlign: 'center',
      fontSize:16,
      color:'#6E6E6E'
    },
    loginFacebook:{
      marginTop: 20
    },
    input:{
   
    height: 40,
    borderColor: 'gray',
   
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    }
})


export default LoginScreen;
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function MailConfirm({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View
        style={{
          left: screenWidth * 0.025,
          position: 'absolute',
          top: screenHeight * 0.05,
          zIndex: 2,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require('../assets/img/button_return.png')}
            style={{ height: screenHeight * 0.07, resizeMode: 'contain' }}
          />
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          backgroundColor: '#1B4D3E',
          height: screenHeight * 0.6,
          justifyContent: 'space-around',
        }}
      >
        <View />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 25, fontWeight: '900' }}>
            • Confirmation •
          </Text>
          <Image
            source={require('../assets/img/icon_letter.png')}
            style={{
              marginTop: 16,
              height: screenWidth / 2,
              resizeMode: 'contain',
              width: '80%',
            }}
          />
        </View>
      </View>
      <Image
        source={require('../assets/img/wave_split.png')}
        style={{
          height: screenHeight * 0.15,
          marginLeft: -2,
          marginTop: -(screenHeight * 0.15) / 2,
          width: '101%',
        }}
      />
      <View
        style={{
          backgroundColor: 'transparent',
          flexGrow: 1,
          justifyContent: 'space-around',
          marginBottom: 16,
          marginTop: -(screenHeight * 0.15) / 4,
          paddingHorizontal: 18,
        }}
      >
        <Text style={{ color: '#4EA04C', fontSize: 25, fontWeight: 'bold' }}>
          Nous vous avons envoyé un email de confirmation
        </Text>
        <Text
          style={{
            color: '#aaa',
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          Vous n’avez pas reçu le mail de confirmation ?
        </Text>
        <LinearGradient
          colors={['#A4DF75', '#4EA04C']}
          start={{ x: -0.25, y: -0.25 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: 9999, height: 45 }}
        >
          <Pressable
            android_ripple={{ color: 'white' }}
            onPress={() => {}}
            style={{
              alignItems: 'center',
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 25, fontWeight: '600' }}>
              Renvoyer l'email
            </Text>
          </Pressable>
        </LinearGradient>
        <TouchableOpacity
          onPress={() => {}}
          style={{ alignItems: 'center' }}
        >
          <Text
            style={{
              color: '#1B4D3E',
              borderBottomColor: '#1B4D3E',
              borderBottomWidth: 1,
              fontWeight: '500',
            }}
          >
            Changer mes coordonées
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

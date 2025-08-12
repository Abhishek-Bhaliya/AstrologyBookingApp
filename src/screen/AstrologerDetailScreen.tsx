import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WalletContext } from '../context/WalletContext';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailRouteProp = RouteProp<RootStackParamList, 'AstrologerDetail'>;
type NavProp = NativeStackNavigationProp<RootStackParamList, 'AstrologerDetail'>;

interface Props {
  route: DetailRouteProp;
}

export default function AstrologerDetailScreen({ route }: Props) {
  const { astrologer } = route.params;
  const { deduct } = useContext(WalletContext);
  const navigation = useNavigation<NavProp>();

  const handleBooking = () => {
    deduct(100);
    navigation.navigate('BookingConfirmation', { astrologer });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{astrologer.name}</Text>
      <Text>{astrologer.expertise}</Text>
      <Text>{astrologer.experience} years of experience</Text>
      <Text>₹{astrologer.rate} / minute</Text>
      <Text style={styles.bio}>This is a short bio about the astrologer...</Text>
      <Button title="Book Session" onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bio: { marginTop: 20 }
});

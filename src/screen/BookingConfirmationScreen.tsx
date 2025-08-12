import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type ConfirmRouteProp = RouteProp<RootStackParamList, 'BookingConfirmation'>;

interface Props {
  route: ConfirmRouteProp;
}

export default function BookingConfirmationScreen({ route }: Props) {
  const { astrologer } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Session booked with {astrologer.name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  message: { fontSize: 20, fontWeight: 'bold' }
});

import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Astrologer } from '../../App';

interface Props {
  astrologer: Astrologer;
  onPress: () => void;
}

export default function AstrologerCard({ astrologer, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.name}>{astrologer.name}</Text>
      <Text>{astrologer.expertise}</Text>
      <Text>{astrologer.experience} years experience</Text>
      <Text>₹{astrologer.rate} / min</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, margin: 10, backgroundColor: '#fff', borderRadius: 8, elevation: 2 },
  name: { fontSize: 18, fontWeight: 'bold' }
});

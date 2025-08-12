import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import astrologers from '../data/astrologers';
import AstrologerCard from '../components/AstrologerCard';
import { WalletContext } from '../context/WalletContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'AstrologerList'>;

export default function AstrologerListScreen() {
  const { balance } = useContext(WalletContext);
  const navigation = useNavigation<NavProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Wallet: ₹{balance}</Text>
      <FlatList
        data={astrologers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AstrologerCard astrologer={item} onPress={() => navigation.navigate('AstrologerDetail', { astrologer: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  balance: { fontSize: 20, padding: 15, backgroundColor: '#eee', textAlign: 'center' }
});

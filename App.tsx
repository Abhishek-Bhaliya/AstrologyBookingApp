import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WalletProvider } from './src/context/WalletContext';
import AstrologerDetailScreen from './src/screen/AstrologerDetailScreen';
import AstrologerListScreen from './src/screen/AstrologerListScreen';
import BookingConfirmationScreen from './src/screen/BookingConfirmationScreen';
import { enableScreens } from 'react-native-screens';


export type RootStackParamList = {
  AstrologerList: undefined;
  AstrologerDetail: { astrologer: Astrologer };
  BookingConfirmation: { astrologer: Astrologer };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export interface Astrologer {
  id: string;
  name: string;
  expertise: string;
  experience: number;
  rate: number;
}

const App = () => {

    enableScreens();


  return (
    <WalletProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AstrologerList" component={AstrologerListScreen} options={{ title: 'Astrologers' }} />
          <Stack.Screen name="AstrologerDetail" component={AstrologerDetailScreen} options={{ title: 'Details' }} />
          <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} options={{ title: 'Confirmed' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletProvider>
  );
};

export default App;

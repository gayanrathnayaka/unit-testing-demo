import * as React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import TlcButton from '../components/tlc-button/tlc-button';

export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <TlcButton />
      </View>
    </PaperProvider>
  );
}

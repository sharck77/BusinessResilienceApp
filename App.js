import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import BusinessResilienceApp from './screens/BusinessResilienceApp';
import { TailwindProvider } from 'nativewind';

export default function App() {
  return (
    <TailwindProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <BusinessResilienceApp />
        </SafeAreaView>
      </PaperProvider>
    </TailwindProvider>
  );
}

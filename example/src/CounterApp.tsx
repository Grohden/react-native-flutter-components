import {
  Center,
  Column,
  FloatingActionButton,
  Scaffold,
  Text,
  TopAppBar,
} from '@grohden/react-native-flutter-components';
import { typeScaleTokens } from '@lib/design-tokens';
import { TopAppBarDataDefaults, TopAppBarTheme } from '@lib/theme-data';
import React, { useState } from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Icon } from './implementations';

export default function CounterApp() {
  return (
    <SafeAreaProvider>
      <AfterSafeArea />
    </SafeAreaProvider>
  );
}

const AfterSafeArea = () => {
  const insets = useSafeAreaInsets();

  return (
    <TopAppBarTheme
      value={{ ...TopAppBarDataDefaults, insets }}
    >
      <AfterTheme />
    </TopAppBarTheme>
  );
};

const AfterTheme = () => {
  const [count, setCount] = useState(0);

  const renderAppBar = () => (
    <TopAppBar>
      <Text>Demo Home Page</Text>
    </TopAppBar>
  );

  const renderFab = () => (
    <FloatingActionButton onPressed={() => setCount(c => c + 1)}>
      <Icon name="add" />
    </FloatingActionButton>
  );

  return (
    <Scaffold
      topAppBar={renderAppBar()}
      floatingActionButton={renderFab()}
    >
      <Center>
        <Column>
          <Text>You have pushed the button this many times:</Text>
          <Text style={typeScaleTokens.headlineMedium}>{count}</Text>
        </Column>
      </Center>
    </Scaffold>
  );
};

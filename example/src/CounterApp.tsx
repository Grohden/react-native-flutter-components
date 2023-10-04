import {
  AppBar,
  Brightness,
  Center,
  Colors,
  Column,
  FloatingActionButton,
  IconButton,
  MaterialApp,
  Scaffold,
  Text,
  useTheme,
} from '@grohden/react-native-flutter-components';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  useSafeAreaMediaQuery,
  useSeedColors,
  useToggleBrightness,
} from './hooks';
import { Icon } from './implementations';

export default function CounterApp() {
  return (
    <SafeAreaProvider>
      <AfterSafeArea />
    </SafeAreaProvider>
  );
}

const AfterSafeArea = () => {
  const query = useSafeAreaMediaQuery();
  const [brightness, toggleBrightness] = useToggleBrightness();
  const { theme, darkTheme } = useSeedColors(Colors.lime);

  return (
    <MaterialApp
      brightness={brightness}
      mediaQuery={query}
      theme={theme}
      darkTheme={darkTheme}
      home={<Home onSwitchTheme={toggleBrightness} />}
    />
  );
};

const Home = ({ onSwitchTheme }: { onSwitchTheme: () => void }) => {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  const renderAppBar = () => (
    <AppBar
      leadingAction={
        <IconButton onPress={onSwitchTheme}>
          <Icon
            name={theme.brightness === Brightness.light
              ? 'wb-sunny'
              : 'nightlight-round'}
          />
        </IconButton>
      }
    >
      <Text>
        Home Page
      </Text>
    </AppBar>
  );

  const renderFab = () => (
    <FloatingActionButton onPressed={() => setCount(c => c + 1)}>
      <Icon name="add" />
    </FloatingActionButton>
  );

  return (
    <Scaffold
      appBar={renderAppBar()}
      floatingActionButton={renderFab()}
    >
      <Center>
        <Column>
          <Text>You have pushed the button this many times:</Text>
          <Text style={theme.textTheme.headlineMedium}>{count}</Text>
        </Column>
      </Center>
    </Scaffold>
  );
};

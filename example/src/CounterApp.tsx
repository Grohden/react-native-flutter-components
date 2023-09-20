import {
  AppBar,
  Brightness,
  Center,
  Colors,
  ColorScheme,
  Column,
  EdgeInsets,
  FloatingActionButton,
  IconButton,
  MaterialApp,
  MediaQueryData,
  Scaffold,
  Text,
  ThemeData,
  useTheme,
} from '@grohden/react-native-flutter-components';
import React, { useMemo, useState } from 'react';
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
  const wrapperInsets = useSafeAreaInsets();
  const [brightness, setBrightness] = useState(Brightness.light);

  const query = useMemo(
    () =>
      MediaQueryData({
        padding: EdgeInsets.only(wrapperInsets),
      }),
    [wrapperInsets],
  );

  const { theme, darkTheme } = useMemo(() => ({
    theme: ThemeData.new({
      colorScheme: ColorScheme.fromSeed({
        brightness: Brightness.light,
        seedColor: Colors.lime,
      }),
    }),
    darkTheme: ThemeData.new({
      colorScheme: ColorScheme.fromSeed({
        brightness: Brightness.dark,
        seedColor: Colors.lime,
      }),
    }),
  }), []);

  return (
    <MaterialApp
      brightness={brightness}
      mediaQuery={query}
      theme={theme}
      darkTheme={darkTheme}
      home={
        <Home
          onSwitchTheme={() => {
            setBrightness(value =>
              value === Brightness.light ? Brightness.dark : Brightness.light
            );
          }}
        />
      }
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

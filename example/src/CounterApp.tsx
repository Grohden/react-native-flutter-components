import {
  AppBar,
  Center,
  ColorScheme,
  Column,
  EdgeInsets,
  FloatingActionButton,
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
  const query = useMemo(
    () =>
      new MediaQueryData({
        padding: EdgeInsets.only(wrapperInsets),
      }),
    [wrapperInsets],
  );

  const { theme, darkTheme } = useMemo(() => ({
    theme: ThemeData.new({
      colorScheme: ColorScheme.lightM3(),
    }),
    darkTheme: ThemeData.new({
      colorScheme: ColorScheme.darkM3(),
    }),
  }), []);

  return (
    <MaterialApp
      mediaQuery={query}
      theme={theme}
      darkTheme={darkTheme}
      home={<Home />}
    />
  );
};

const Home = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  const renderAppBar = () => (
    <AppBar>
      <Text>React Native Demo Home Page</Text>
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

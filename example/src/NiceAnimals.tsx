import {
  AppBar,
  BorderRadius,
  BoxDecoration,
  Brightness,
  Colors,
  DecoratedBox,
  EdgeInsets,
  IconButton,
  InkWell,
  kInkEasing,
  MaterialApp,
  MaterialStateProperty,
  MaterialStatesController,
  Padding,
  Scaffold,
  Size,
  SizedBox,
  Text,
  useTheme,
} from '@grohden/react-native-flutter-components';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  useSafeAreaMediaQuery,
  useSeedColors,
  useToggleBrightness,
} from './hooks';
import { Icon } from './implementations';

export default function NiceAnimals() {
  return (
    <SafeAreaProvider>
      <AfterSafeArea />
    </SafeAreaProvider>
  );
}

const AfterSafeArea = () => {
  const query = useSafeAreaMediaQuery();
  const [brightness, toggleBrightness] = useToggleBrightness();
  const { theme, darkTheme } = useSeedColors(Colors.orange);

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

const fetchPage = (count: number): Promise<string[]> =>
  fetch(`https://shibe.online/api/shibes?count=${count}&urls=true`)
    .then((res) => res.json());

const Home = ({ onSwitchTheme }: { onSwitchTheme: () => void }) => {
  const theme = useTheme();
  const [controller] = useState(() => MaterialStatesController([]));
  const [data, setData] = useState<string[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    let cleaned = false;

    fetchPage(10)
      .then((newPage) => {
        !cleaned && setData(old => old.concat(newPage));
      })
      .catch((error) => {
        !cleaned && console.log('Error fetching page', error);
      });

    return () => {
      cleaned = true;
    };
  }, [pageNumber]);

  const cols = 3;
  const dimens = Dimensions.get('window');
  const itemSize = Size.square(Math.min(dimens.height, dimens.width) / cols);
  const decoration = BoxDecoration({ borderRadius: BorderRadius.circular(16) });
  const rippleColor = MaterialStateProperty.all(
    theme.colorScheme.primary.withOpacity(0.5),
  );

  const appBar = (
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
      <Text>Nice Animals</Text>
    </AppBar>
  );

  return (
    <Scaffold appBar={appBar}>
      <FlatList
        key={cols}
        data={data}
        numColumns={cols}
        onEndReached={() => setPageNumber(pageNumber + 1)}
        renderItem={({ item }) => (
          <SizedBox.fromSize size={itemSize} key={item}>
            <Padding padding={EdgeInsets.all(4)}>
              <DecoratedBox clipsChildren boxDecoration={decoration}>
                <InkWell
                  statesController={controller}
                  duration={1600}
                  easing={kInkEasing}
                  rippleColor={rippleColor}
                  onPress={() => {}}
                >
                  <Image style={styles.expand} source={{ uri: item }} />
                </InkWell>
              </DecoratedBox>
            </Padding>
          </SizedBox.fromSize>
        )}
      />
    </Scaffold>
  );
};

const styles = StyleSheet.create({
  expand: { width: '100%', height: '100%' },
});

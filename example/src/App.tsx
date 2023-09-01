import * as React from 'react';

import {
  Border,
  BoxDecoration,
  Column,
  CrossAxisAlignment,
  DecoratedBox,
  MainAxisAlignment,
  MainAxisSize,
  Scaffold,
  Text,
  typeScaleTokens,
} from '@grohden/react-native-flutter-components';

export default function App() {
  return (
    <Scaffold>
      <DecoratedBox
        boxDecoration={BoxDecoration.new({
          border: Border.debug(),
        })}
      >
        <Column
          mainAxisSize={MainAxisSize.max}
          mainAxisAlignment={MainAxisAlignment.center}
          crossAxisAlignment={CrossAxisAlignment.center}
        >
          <Text style={typeScaleTokens.displaySmall}>Hello World!</Text>
        </Column>
      </DecoratedBox>
    </Scaffold>
  );
}

# @grohden/react-native-flutter-components

🚧🚧🚧 Lib is under construction 🚧🚧🚧

My implementation of some flutter components using react native API

## Description

The idea of this library is to implement most of the components that flutter have
and follow the way that flutter implements its widgets.

So here's the list of widgets I consider usable:

* Container
  * Align
  * Center
  * ConstrainedBox,
  * DecoratedBox,
  * Expanded
  * Padding
* Flex
  * Row
  * Column
* SizedBox
* Text

And here's the list of widgets currently being implemented

* Scaffold
* InkWell (need to be reimplemented to be like flutter)
* TopAppBar

I'm trying to follow strictly the flutter APIs, but DEVX is still considered
since in react & js things work differently.

## Running

Just `yarn example ios` or `yarn example android`

### Developing

First, follow `Running` and then `yarn example storybook-watch`, then
implement the stories.

### Implementable components

Since React Native doesn't provide proper support for basic stuff like
icons, the community has created some packages for that. This might force the UI
lib to support (or choose) the specific packages for certain UI elements.

So, instead of implementing a specific package support, the library will
provide basic APIs to be used to create those basic things, one example
is the icon button, which you can see implemented in the example app
using the expo icons package.

## Installation

🚧🚧🚧 Not yet published, if you want that, just open an issue and I'll do it 🚧🚧🚧

```sh
npm install @grohden/react-native-flutter-components

yarn add @grohden/react-native-flutter-components
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

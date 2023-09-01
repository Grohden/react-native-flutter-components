# @grohden/react-native-flutter-components

My implementation of some flutter components to react native

## Description

The idea of this library is to implement most of the components that flutter have
and follow the way that flutter implements its widgets.

So here's the list of widgets I consider usable

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

I'm trying to follow strictly the flutter apis, but DEVX is still considered
since in react & js things work differently.


### Implementable components

Since React Native doesn't provide proper support for basic stuff like
icons, the community has created some packages that implement that, which would
force the lib to support the specific packages to implement some functionalities.
So, instead of implementing a package support, the library will provide basic
APIs to be used to create those basic things, one example is the icon button,
which you can see implemented in the example app using the expo icons package.

## Installation

```sh
npm install @grohden/react-native-flutter-components
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

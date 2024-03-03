module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@services': './src/api/index.ts',
          '@components': './src/components/index.ts',
          '@assets': './src/assets/index.ts',
          '@screens': './src/screens/index.ts',
          '@navigators': './src/navigators/index.ts',
          '@utils': './src/utils/index.ts',
          '@types': [
            './src/components/types/index.ts',
            './src/navigators/index.ts',
          ],
        },
      },
    ],
  ],
};

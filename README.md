# reproduction for https://github.com/tw-in-js/twind/issues/228

Install meteor to run this:

```
  npm install -g meteor
```

then cd into the repo and

```
  meteor npm install
```

then you can start the app with either

```
  meteor run
```
```
  meteor run ios
```
```
  meteor run ios-device
```
```
  meteor run android
```
or
```
  meteor run android-device
```

You will have to have xcode or android studio installed to run ios or android versions (on android you may have to start the emulator manually before running the command). While ios or android versions are running, you can at the same time access the web-version on localhost:3000



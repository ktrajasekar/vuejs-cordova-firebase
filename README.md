# Cordova with VueJS 

## Vue Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Cordova Project 
 ```
 npm run build - in vuejs project prod build placed in cordova_app/ folder
```

 ```
Create new android project in firebase
download google-services.json 
Place it in cordova_app/
```

 ### Cordova Firebasex Plugin 
See [cordova-plugin-firebasex Reference](https://github.com/dpa99c/cordova-plugin-firebasex).
```
cordova plugin add cordova-plugin-firebasex
```

 ```
cd cordova_app
cordova build android
cordova run android -device 
```


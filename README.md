# react-native-sensor-manager

## Getting started

`$ npm install rn-sensor-manager --save`

### Mostly automatic installation

`$ react-native link rn-sensor-manager`

## Usage
```javascript
import { Compass } from 'rn-sensor-manager';

// TODO: What to do with the module?
// Register sensor listener
Compass.register()

// unreg listener
Compass.unregister()

// get Compass Azimuth
Compass.getAzimuth(azimuth => {  })

// get getAcceleration
Compass.getAcceleration((x, y, z) => {  })
```

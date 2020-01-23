import { NativeModules } from 'react-native';

const { sensorManagerSensorManager, compass } = NativeModules;

export default { SensorManager: sensorManagerSensorManager, Compass: compass };

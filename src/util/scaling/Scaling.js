// scaling.js
import { Dimensions, } from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');

const Width1 = 375;
const Height1 = 812;

const scale = (size) => (width / Width1) * size;

const verticalScale = (size) => (height / Height1) * size;

const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const scaleFont = (size) => size * fontScale;


export { scale, verticalScale, moderateScale, scaleFont };
import * as Actions from '../stores/actions';
import stores from '../stores';
import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const device = Platform.OS;

function clear(value) {
  return value && String(value).replace(/[^0-9]/g, '');
}

function fn(action, payload = '') {
  stores.dispatch(Actions[action](payload));
}

export { width, height, clear, fn, device };

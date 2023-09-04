import crypto from 'crypto';

if (!crypto.getRandomValues) {
  crypto.getRandomValues = require('react-native-get-random-values').default;
}

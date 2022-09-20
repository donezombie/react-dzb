import flatten from 'flat';
import common from './common.json';

const locale = {
  common: flatten(common, {
    delimiter: '_',
  }),
};
export default locale;

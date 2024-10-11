import { compose } from 'ramda';

import {
  withEventEmitter,
  withToaster,
} from '../react-utils';
import { withProvider } from '../redux-logic';
import { App as A } from './app';
import { withMuiTheme } from '../mui-theme';

export const App = compose(
  withEventEmitter,
  withProvider,
  withToaster,
  withMuiTheme,
)(A);

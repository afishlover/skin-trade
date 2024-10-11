import { Provider } from 'react-redux';
import { DefaultFcProps } from '@vg-slots/react-utils';
import { store } from './store';

export const withProvider = (Component: React.FC<DefaultFcProps>) => (props: DefaultFcProps) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

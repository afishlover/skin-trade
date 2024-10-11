import {
  DefaultLayout,
} from '../layouts';
import {
  HomePage,
  PageNotFound,
} from '../pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ]
  }
]);

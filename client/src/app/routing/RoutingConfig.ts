import { routes } from 'shared/helpers';
import Header from 'shared/ui/Header';

type RoutingConfigChildrenType = {
  element: () => JSX.Element;
  path?: string;
  index?: true;
  private?: true;
}[];
type RoutingConfigType = {
  path: string;
  element: () => JSX.Element;
  children?: RoutingConfigChildrenType;
  private?: true;
}[];

export const RoutingConfig: RoutingConfigType = [
  {
    path: routes.auth,
    element: Header,
    children: [],
  },
  {
    path: routes.main,
    element: Header,
    // private: true,
    children: [],
  },
];

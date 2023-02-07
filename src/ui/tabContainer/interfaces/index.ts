import { CSSProperties, ReactElement, ReactNode } from 'react';
import { TABS } from '../../../interfaces';

export interface TabContainerContextProps {
  lastTab: string;
  handleChangeActiveTab: (value: any) => void;
}

export interface TabContainerOnChangeArgs {
  activeTab: string;
}

export interface InitialValues {
  activeTab?: string;
}

export interface TabContainerHandlers {
  lastTab: string;
  handleChangeActiveTab: (value: string) => void;
  handleActiveDefault: () => void;
}

export interface TabContainerProps {
  children?: ReactElement | ReactElement[] | ((args: TabContainerHandlers) => JSX.Element);
  className?: string;
  style?: CSSProperties;
  onChange?: (args: TabContainerOnChangeArgs) => void;
  value?: TABS;
  initialValues?: InitialValues
}

import { useState } from 'react';
import { TABS } from '../../../interfaces';
import { InitialValues, TabContainerOnChangeArgs } from '../interfaces';

interface UseTabContainerProps {
  onChange?: (arg: TabContainerOnChangeArgs) => void;
  value?: TABS;
  initialValues?: InitialValues
}

export const useTabContainer = ({ onChange, value = TABS.TAB_GENERAL, initialValues }: UseTabContainerProps) => {

  const [lastTab, setLastTab] = useState<string>(localStorage.getItem('lastTab') || value);

  const handleChangeActiveTab = (value: any) => {
    localStorage.setItem('lastTab', value);
    setLastTab(value);
    onChange && onChange({ activeTab: value });
  }

  const handleActiveDefault = () => {
    setLastTab(initialValues?.activeTab || value);
  }

  return {
    lastTab,
    handleChangeActiveTab,
    handleActiveDefault
  }
}

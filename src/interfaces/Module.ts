export interface ModuleResponse<T> {
  msg:  string;
  data: T;
}

export interface DataModules<T> {
  [key: string]: T;
}

export interface Module {
  tabs:          Tabs;
  _id:           string;
  moduleId:      number;
  displayName:   string;
  check:         boolean;
  order:         number;
  dependencies:  Dependency[];
  enableModules: number[];
}

export interface Dependency {
  _id:       string;
  module_id: number;
  order:     number;
}

export interface Tabs {
  displayName:  string;
  tabsPatterns: TabsPattern[];
}

export interface TabsPattern {
  _id:          string;
  component:    string;
  displayName:  string;
  isFormSchema: boolean;
  required:     boolean;
}

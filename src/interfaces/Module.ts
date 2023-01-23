export interface ModuleResponse {
  msg:  string;
  data: DataModules;
}

export interface DataModules {
  dataModules: DataModule[];
}

export interface DataModule {
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

export interface ExerciseResponse<T> {
  msg:  string;
  data: T;
}

export interface DataExercise<T> {
  [key: string]: T;
}

export interface PreparerExercise {
  _id?:          string;
  idScenario?:   string;
  scenario?:     number;
  dataLocation?: string;
  duration?:     number;
  status?:       string;
  createdAt?:    string;
  updatedAt?:    string;
  pattern?:      string;
  displayName?:  string;
  synopsis?:     string;
  time_end?:     string;
  time_start?:   string;
  workspaces?:   Workspaces;
  patternId?:    number;
}

export interface Workspaces {
  type:     string;
  features: Feature[];
}

export interface Feature {
  type:       string;
  properties: Properties;
  geometry:   Geometry;
}

export interface Geometry {
  type:        string;
  coordinates: Array<Array<number[]>>;
}

export interface Properties {
  name: string;
}

export interface DataResult {
  result:    string;
}

export interface DataCreateExercise extends DataResult {
  location:  Location;
  objectIds: ObjectIDS;
}

export interface Location {
  dataLocation: string;
  idScenario:   string;
}

export interface ObjectIDS {
  "CIS":   Security;
  "USS-A": Security;
  "USS-B": Security;
}

export interface Security {
  user_id:  string;
  token_id: string;
}

export interface DataUpdateExercise {
  idScenario: string;
  exercise: PreparerExercise;
}
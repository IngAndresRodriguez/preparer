export interface ExerciseResponse {
  msg:  string;
  data: DataExercise;
}

export interface DataExercise {
  preparerExercises: PreparerExercise[];
}

export interface PreparerExercise {
  _id:          string;
  idScenario:   string;
  scenario:     number;
  dataLocation: string;
  duration:     number;
  status:       string;
  createdAt:    string;
  updatedAt:    string;
  pattern:      number;
  displayName:  string;
  synopsis:     string;
  time_end:     string;
  time_start:   string;
  workspaces:   Workspaces;
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

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
  createdAt:    Date;
  updatedAt:    Date;
  pattern:      number;
  displayName:  string;
  synopsis:     string;
  time_end:     Date;
  time_start:   Date;
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

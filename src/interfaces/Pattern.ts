export interface PatternResponse<T> {
  msg:  string;
  data: T;
}

export interface DataPatterns<T> {
  [key: string]: T;
}

export interface Pattern {
  _id:             string;
  displayName:     string;
  modules:         number[];
  url:             string;
  synopsisPattern: SynopsisPattern;
  id:              number;
  name:            string;
  isActive:        boolean;
}

export enum SynopsisPattern {
  DescripciónGenericaDelPatrón = "Descripción generica del patrón.",
}

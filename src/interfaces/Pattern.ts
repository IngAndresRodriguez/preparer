export interface PatternResponse {
  msg:  string;
  data: DataPatterns;
}

export interface DataPatterns {
  dataPatterns: DataPattern[];
}

export interface DataPattern {
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

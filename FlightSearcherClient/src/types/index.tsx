export interface StoreState {
  flights?: Flight[];
  airports?: Airport[];
}

export interface FlightSearchRequest {
  from: string;
  to: string;
  sortColumn: FlightSortColumnEnum;
  sortOrder: FlightSortOrderEnum;
}

export interface Flight {
  From: string;
  To: string;
  FlightNumber: number;
  Departs: string;
  Arrives: string;
  MainCabinPrice: number;
  FirstClassPrice: number;
}

export interface Airport {
  Code: string;
  Name: string;
}

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

export enum FlightSortColumnEnum {
  Departure = "Departure",
  MainCabinPrice = "MainCabinPrice",
  FirstClassPrice = "FirstClassPrice",
}

export enum FlightSortOrderEnum {
  Ascending = "Ascending",
  Descending = "Descending",
}

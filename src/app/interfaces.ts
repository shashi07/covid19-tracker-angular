export interface BarChartObj {
 name : string,
 value: number
};


export interface CountryLevelObj {
    date : string,
    cases: number,
    median: number,
    growth_factor : number
   };

export interface IAppConfig {
    apiServer: string
}

export interface ConsolidateDataObj {
    id : number,
    entity : string,
    confirmed_cases : number,
    deaths : number,
    recovered : number,
    as_of_date : string
   };


export interface ComparisionObj {
    variable: string;
    world: string;
    india: string;
    maharashtra: string;
  }

  export interface StateWiseComparisionObj {
    state : string,
    cases : number,
    deaths : number,
    mortality : number,
    as_of_date : string
   };

   export interface AgeWiseComparisionObj {
    age_group : string,
    cases : number,
    deaths : number,
    mortality : number,
    as_of_date : string
   };
export interface IOverrideDiv { 
    width? : string | number,
    padding? : string | number,
    margin? : string | number,
    border? : string | number,
    responsive? : boolean,
}

export interface IOverrideHeading {
    bold? : boolean
}

export interface IFlex {
    justifyContent? : string,
    gap? : string | number,
    grow? : boolean,
    responsiveReorder? : boolean
}

export interface IGrid {
    cols : number;
    gap : number | string;
}
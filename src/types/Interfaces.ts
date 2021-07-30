export interface IStyled {
    theme? : any
}

export interface IOverrideDiv extends IStyled { 
    width? : string | number,
    padding? : string | number,
    margin? : string | number,
    border? : string | number,
    responsive? : boolean,
}

export interface IOverrideHeading extends IStyled {
    bold? : boolean
}
export interface IFlex extends IStyled {
    justifyContent? : string,
    gap? : string | number,
    grow? : boolean,
    responsiveReorder? : boolean
}
export interface IGrid extends IOverrideDiv {
    cols? : number; // if cols is undefined childWidth must be defined
    childWidth? : string | number; // if childWidth is undefined cols must be defined
    gap? : number | string;
}
export type T_Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export interface IHeading extends IStyled {
    variant? : T_Heading,
    bold?: boolean
}
export type T_Typografy = "span" | "p" | "label"
export interface ITypografy extends IStyled {
    variant? : T_Typografy,
}
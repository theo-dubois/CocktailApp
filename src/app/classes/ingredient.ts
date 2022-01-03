export class Ingredient {

    idIngredient: number;
    strIngredient: string;
    strDescription: string;
    strType: string;
    strAlcohol: string;
    strABV: string;
  
    constructor(idIngredient: number,strIngredient: string,strDescription: string,strType: string,strAlcohol: string,strABV: string) {
  
        this.idIngredient = idIngredient;
        this.strIngredient = strIngredient;
        this.strDescription = strDescription;
        this.strType = strType;
        this.strAlcohol = strAlcohol;
        this.strABV = strABV;
    }
  
  }
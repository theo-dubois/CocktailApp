export class Cocktail {

  idDrink: number;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strGlass: string;
  strInstructions : string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;

  constructor(strMeasure3: string,strMeasure2: string,strMeasure1: string, strInstructions : string,idDrink: number, strDrink: string, strCategory: string, strAlcoholic: string, strDrinkThumb: string,strIngredient1: string,strIngredient2: string, strIngredient3: string,  strIngredient4: string,strGlass: string) {

      this.idDrink = idDrink;
      this.strDrink = strDrink;
      this.strCategory = strCategory;
      this.strAlcoholic = strAlcoholic;
      this.strDrinkThumb = strDrinkThumb;
      this.strIngredient1 = strIngredient1;
      this.strIngredient2 = strIngredient2;
      this.strIngredient3 = strIngredient3;
      this.strIngredient4 = strIngredient4;
      this.strGlass = strGlass;
      this.strInstructions = strInstructions;
      this.strMeasure1 = strMeasure1;
      this.strMeasure2 = strMeasure2;
      this.strMeasure3 = strMeasure3;
  }
}

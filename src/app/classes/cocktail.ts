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
  strIngredient5: string;
  strIngredient6: string;
  strGlass: string;
  strInstructions : string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;

  ingredients: Array<string>;

  constructor(ingredients: Array<string>,ingredientcount: number,strIngredient5: string,strIngredient6: string,strMeasure6: string,strMeasure5: string,strMeasure4: string,strMeasure3: string,strMeasure2: string,strMeasure1: string, strInstructions : string,idDrink: number, strDrink: string, strCategory: string, strAlcoholic: string, strDrinkThumb: string,strIngredient1: string,strIngredient2: string, strIngredient3: string,  strIngredient4: string,strGlass: string) {

      this.idDrink = idDrink;
      this.strDrink = strDrink;
      this.strCategory = strCategory;
      this.strAlcoholic = strAlcoholic;
      this.strDrinkThumb = strDrinkThumb;
      this.strIngredient1 = strIngredient1;
      this.strIngredient2 = strIngredient2;
      this.strIngredient3 = strIngredient3;
      this.strIngredient4 = strIngredient4;
      this.strIngredient5= strIngredient5;
      this.strIngredient6 = strIngredient6;
      this.strGlass = strGlass;
      this.strInstructions = strInstructions;
      this.strMeasure1 = strMeasure1;
      this.strMeasure2 = strMeasure2;
      this.strMeasure3 = strMeasure3;
      this.strMeasure4 = strMeasure4;
      this.strMeasure5 = strMeasure5;
      this.strMeasure6 = strMeasure6;
      this.ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
  }

}

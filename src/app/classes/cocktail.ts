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

  constructor(idDrink: number, strDrink: string, strCategory: string, strAlcoholic: string, strDrinkThumb: string,strIngredient1: string,strIngredient2: string, strIngredient3: string,  strIngredient4: string) {

      this.idDrink = idDrink;
      this.strDrink = strDrink;
      this.strCategory = strCategory;
      this.strAlcoholic = strAlcoholic;
      this.strDrinkThumb = strDrinkThumb;
      this.strIngredient1 = strIngredient1;
      this.strIngredient2 = strIngredient2;
      this.strIngredient3 = strIngredient3;
      this.strIngredient4 = strIngredient4;
  }
}

export class Cocktail {

  idDrink: number;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strDrinkThumb: string;

  constructor(idDrink: number, strDrink: string, strCategory: string, strAlcoholic: string, strDrinkThumb: string) {

      this.idDrink = idDrink;
      this.strDrink = strDrink;
      this.strCategory = strCategory;
      this.strAlcoholic = strAlcoholic;
      this.strDrinkThumb = strDrinkThumb;
  }
}

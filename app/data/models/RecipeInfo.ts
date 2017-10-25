export class RecipeInfo {
    id: string;
    Name: string;
    Description: string;
    ImageURL: string;

    constructor(imageURL: string) {
        this.ImageURL = imageURL;
    }
}
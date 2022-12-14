import { Genre } from "../model/genre";
import { Product } from "../model/interface/product";

export function generateProductDtos(): Product[] {
    let arr = [{
        id: 1,
        name: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        price: 10.00,
        categories: [Genre.DRAMA],
        isAvailable: true
    },
    {
        id: 2,
        name: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
        price: 10.00,
        categories: [Genre.CRIME, Genre.DRAMA],
        isAvailable: true
    },
    {
        id: 3,
        name: 'The Dark Knight',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        price: 10.00,
        categories: [Genre.ACTION, Genre.CRIME, Genre.DRAMA],
        isAvailable: true
    },
    {
        id: 4,
        name: 'The Godfather Part II',
        description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        price: 10.00,
        categories: [Genre.CRIME, Genre.DRAMA],
        isAvailable: true
    },
    {
        id: 5,
        name: '12 Angry Men',
        description: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
        price: 10.00,
        categories: [Genre.CRIME, Genre.DRAMA],
        isAvailable: true
    },
    {
        id: 6,
        name: "Schindler's List",
        description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        price: 10.00,
        categories: [Genre.BIOGRAPHY, Genre.DRAMA, Genre.HISTORY],
        isAvailable: true
    }] as Product[];
    console.log(arr);
    return arr;
}
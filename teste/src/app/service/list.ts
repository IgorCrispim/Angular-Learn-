import { Service } from '@angular/core';
import { Animal } from '../Animal';

@Service()
export class List {
    remove(animals: Animal[], animal: Animal ){
        return animals.filter((a) => animal.name !== a.name)
    };
}

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ecommerce } from '../model/ecommerce.model';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const ecommerces: Ecommerce[] = [
        {id: 1, title: 'Material Design Card - For Blog Post Article',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...',
        img: 'http://image.cccdddd.com/big/153/beach-cloud-dawn-horizon-horizontal-landscape-ocean-152368.jpg',
        author: 'Papa Francisco'},

        {id: 2, title: 'Material Design Card Teste Gabriel Velloso',
        subtitle: 'Vamo que Vamo ... ! Vamo que Vamo ...! Vamo que Vamo ...',
        img: 'https://i.pinimg.com/originals/dc/7b/f3/dc7bf3465452a6f82b85d65dd1cd5b80.jpg',
        author: 'Gabriel Velloso'},
    ];
    return {ecommerces};
  }
  // Responsável por gerar o primeiro id quando todos os cards são deletados.
  genId(ecommerces: Ecommerce[]): number {
    return ecommerces.length > 0 ? Math.max(...ecommerces.map(ecommerce => ecommerce.id)) + 1 : 1;
  }
}

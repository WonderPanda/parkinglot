import { provide } from '../ioc/ioc';
import { TYPES } from '../constants/symbols';

export interface IGarageService {
    checkCapacity(): Promise<number>
}

@provide(TYPES.GarageService)
export class GarageService implements IGarageService {
    checkCapacity(): Promise<number> {
        return Promise.resolve(0);
    }
}   
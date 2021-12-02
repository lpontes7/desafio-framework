import { MessageUtil } from '../utils/message'
import { CalculoService } from './calculo.service';

export class CalculoController  {
  constructor (private calculoService : CalculoService) {
  }

  async calcular (event: any) {

    const number: string = event.pathParameters.numero;
    try {
      const result = this.calculoService.calcular(number);      
      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);
      return MessageUtil.error(err.code, err.message);
    }
  }

}

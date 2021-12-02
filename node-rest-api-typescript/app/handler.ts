
import { Handler} from 'aws-lambda';
import { calculoController } from './useCase/index';

export const calculo: Handler = (event: any) => {
  return calculoController.calcular(event);
};

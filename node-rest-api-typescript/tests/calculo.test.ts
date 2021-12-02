import lambdaTester from 'lambda-tester';
import { expect } from 'chai';
import { calculo } from '../app/handler';

describe('Calculo [GET]', () => {
  it('should be call with a number', () => {
    try {
      return lambdaTester(calculo)
      .event({ pathParameters: { numero: '157' } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
      });
    } catch (err) {
      console.log(err);
    }
  });

  it('should be error call with a not number', () => {
    try {
      return lambdaTester(calculo)
      .event({ pathParameters: { numero: 'aaa' } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(1000);
        expect(body.data)
      });
    } catch (err) {
      console.log(err);
    }
  });

  it('should be success with correct values', () => {
    try {
      return lambdaTester(calculo)
      .event({ pathParameters: { numero: '45' } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        
        const body = JSON.parse(result.body);
        const respDivisores = body.data.numerosDivisores
        const respPrimos= body.data.divisoresPrimos

        expect(body.code).to.equal(0);
        expect(respDivisores).deep.equal([1, 3, 5, 9, 15, 45])
        expect(respPrimos).deep.equal([1, 3, 5])
      });
    } catch (err) {
      console.log(err);
    }
  });

});

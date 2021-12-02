
export class CalculoService {

  constructor() { }

  validacao(numero: string) {
    const num = parseInt(numero)
    if (isNaN(num)) throw new Error('Valor informado não é um numero')
    else return num
  }


  numerosDivisores(numero: number) {
    let numeros: number[] = []
    for (var i = 0; i <= numero; i++) {
      if (numero % i == 0)
        numeros.push(i)
    }
    return numeros
  }


  divisoresPrimos(numeros: number[]) {

    let primos:number[] = []
    numeros.map(numero => {
      let divisores = 0

      for (var i = 0; i <= numero; i++) {
        if ((numero % i) == 0)
          divisores++
      }
      if (numero == 1) primos.push(numero)
      if (divisores == 2) primos.push(numero)
    })

    return primos

  }

  calcular(numero: string) {

    const num = this.validacao(numero)

    const numerosDivisores = this.numerosDivisores(num)

    const divisoresPrimos = this.divisoresPrimos(numerosDivisores)

    return {
      numerosDivisores: numerosDivisores,
      divisoresPrimos: divisoresPrimos
    }
  }
}

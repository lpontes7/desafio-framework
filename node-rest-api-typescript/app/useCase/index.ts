import { CalculoController } from "./calculo.controller"
import { CalculoService } from "./calculo.service"

const calculoService = new CalculoService()

const calculoController = new CalculoController(calculoService)

export { calculoController }

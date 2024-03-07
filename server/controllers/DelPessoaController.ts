import { FastifyRequest, FastifyReply } from "fastify";
import { DelClienteService } from "../services/DelPessoaService";

class DelClienteController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.query as {id:string}
        const clienteService = new DelClienteService()
        const cliente = await clienteService.execute({id});

        res.send(cliente)
    }
}

export {DelClienteController}
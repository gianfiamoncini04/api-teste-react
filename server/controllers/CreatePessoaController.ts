import { FastifyRequest, FastifyReply } from "fastify";
import { CreateClienteService } from "../services/CreatePessoaService";

class CreateClienteController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const { name, email } = req.body as {name:string, email:string};

        const clienteService = new CreateClienteService()
        const cliente = await clienteService.execute({name, email});

        res.send(cliente)
    }
}

export {CreateClienteController}
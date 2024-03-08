import { FastifyRequest, FastifyReply } from "fastify";
import { DeletarPessoaService, DeletarEnderecoService } from "../services/DelService";
import {Pessoa} from "../models/PessoaModels"
import {Address} from "../models/EndereçoModels"

export class DelPessoaController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as Pessoa
        const pessoaService = new DeletarPessoaService()
        const pessoa = await pessoaService.execute({id});

        res.send(pessoa)
    }
}

export class DelEnderecoController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as Address
        const enderecoService = new DeletarEnderecoService()
        const endereco = await enderecoService.execute({id});

        res.send(endereco)
    }
}
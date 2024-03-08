import { FastifyRequest, FastifyReply } from "fastify";
import { ListPessoaService, ListByIdPessoaService, ListByIdEnderecoService, ListEnderecoService } from "../services/ListService";
import {Pessoa} from "../models/PessoaModels"

export class ListPessoaController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const pessoaService = new ListPessoaService()
        const pessoa = await pessoaService.execute();

        res.send(pessoa)
    }
}

export class ListByIdPessoaController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as Pessoa
        const pessoaService = new ListByIdPessoaService()
        const pessoa = await pessoaService.execute({id});

        res.send(pessoa)
    }
}

export class ListEnderecoController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const enderecoService = new ListEnderecoService()
        const endereco = await enderecoService.execute();

        res.send(endereco)
    }
}

export class ListByIdEnderecoController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as Pessoa
        const enderecoService = new ListByIdEnderecoService()
        const endereco = await enderecoService.execute({id});

        res.send(endereco)
    }
}
import { FastifyRequest, FastifyReply } from "fastify";
import { UpdatePessoaService, UpdateEnderecoService } from "../services/UpdateService";
import {Pessoa} from "../models/PessoaModels"
import {Address} from "../models/EndereçoModels"

export class UpdatePessoaController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as Pessoa
        const { nome, sexo, datanascimento, estadocivil } = req.body as Pessoa;
        const pessoaService = new UpdatePessoaService()
        const pessoa = await pessoaService.execute({id, nome, sexo, datanascimento, estadocivil});

        res.send(pessoa)
    }
}

export class UpdateEnderecoController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.params as Address
        const { pessoaId, cep, endereco, numero, complemento, estado, cidade } = req.body as Address;
        const enderecoService = new UpdateEnderecoService()
        const address = await enderecoService.execute({id, pessoaId, cep, endereco, numero, complemento, estado, cidade});

        res.send(address)
    }
}
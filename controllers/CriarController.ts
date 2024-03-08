import { FastifyRequest, FastifyReply } from "fastify";
import { CriarPessoaService, CriarEnderecoService } from "../services/CriarService";
import {Pessoa} from "../models/PessoaModels"
import {Address} from "../models/EndereçoModels"

export class CriarPessoaController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const { nome, sexo, datanascimento, estadocivil } = req.body as Pessoa;

        const pessoaService = new CriarPessoaService()
        const pessoa = await pessoaService.execute({nome, sexo, datanascimento, estadocivil})

        res.send(pessoa)
    }
}

export class CriarEnderecoController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const { pessoaId, cep, endereco, numero, complemento, estado, cidade } = req.body as Address;

        const EnderecoService = new CriarEnderecoService()
        const Endereco = await EnderecoService.execute({ pessoaId, cep, endereco, numero, complemento, estado, cidade})

        res.send(Endereco)
    }
}
import {PessoasData} from "../data/pessoas"
import {AddressData} from "../data/address"
import {Pessoa} from "../models/PessoaModels"
import {Address} from "../models/EndereçoModels"

export class ListPessoaService{
    async execute(){
        return PessoasData
    }
}

export class ListByIdPessoaService{
    async execute({id}: Pessoa){
        if(!id){
            throw new Error("ID Inválido")
        }

        const pessoa = PessoasData.find(p => p.id == id);

        if(!pessoa) {
            throw new Error("Pessoa não encontrada!")	
        }

    return pessoa
    }
}

export class ListEnderecoService{
    async execute(){
        return AddressData
    }
}

export class ListByIdEnderecoService{
    async execute({id}: Address){
        if(!id){
            throw new Error("ID Inválido")
        }

        const endereco = AddressData.find(p => p.id == id);

        if(!endereco) {
            throw new Error("Endereço não encontrada!")	
        }

    return endereco
    }
}
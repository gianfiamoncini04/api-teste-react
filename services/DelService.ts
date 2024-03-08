import {PessoasData} from "../data/pessoas"
import {AddressData} from "../data/address"
import {Pessoa} from "../models/PessoaModels"
import {Address} from "../models/EndereçoModels"

export class DeletarPessoaService{
    async execute({id}: Pessoa){
        if(!id){
            throw new Error("ID Inválido")
        }
        
        const pessoa = PessoasData.findIndex(p => p.id == id);

        if(pessoa !== -1) {
            PessoasData.splice(pessoa, 1);
            console.log({ message: 'Pessoa deleteda!' });
        }else{
            throw new Error("Pessoa não encontrada!")	
        }

        return PessoasData
    }
}

export class DeletarEnderecoService{
    async execute({id}: Address){
        if(!id){
            throw new Error("ID Inválido")
        }
        
        const endereco = AddressData.findIndex(p => p.id == id);

        if(endereco !== -1) {
            AddressData.splice(endereco, 1);
            console.log({ message: 'Endereço deleteda!' });
        }else{
            throw new Error("Endereço não encontrada!")	
        }

        return AddressData
    }
}

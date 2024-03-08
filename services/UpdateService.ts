import {PessoasData} from "../data/pessoas"
import {AddressData} from "../data/address"
import {Pessoa} from "../models/PessoaModels"
import {Address} from "../models/EndereçoModels"

export class UpdatePessoaService{
    async execute({id, nome, sexo, datanascimento, estadocivil }: Pessoa){
        if(!id){
            throw new Error("ID Inválido")
        }

        if(!nome || !sexo  || !datanascimento || !estadocivil){
            throw new Error("Você tem que preencher todos os campos!!!")
        }
        
        const pessoa = PessoasData.findIndex(p => p.id == id);

        if(pessoa !== -1) {
            const NovaPessoa = { id, nome, sexo, datanascimento, estadocivil }
            PessoasData[pessoa] = NovaPessoa;
            console.log({ message: 'Pessoa atualizada!' });
        }else{
            throw new Error("Pessoa não encontrada!")	
        }

        return PessoasData
    }
}

export class UpdateEnderecoService{
    async execute({id, pessoaId, cep, endereco, numero, complemento, estado, cidade}: Address){
        if(!id){
            throw new Error("ID Inválido")
        }

        if(!pessoaId || !cep || !endereco || !numero || !complemento || !estado || !cidade){
            throw new Error("Você tem que preencher todos os campos!!!")
        }
        
        const address = AddressData.findIndex(p => p.id == id);

        if(address !== -1) {
            const NovoEndereco = { id, pessoaId, cep, endereco, numero, complemento, estado, cidade }
            AddressData[address] = NovoEndereco
            console.log({ message: 'Endereço atualizado!' });
        }else{
            throw new Error("Endereço não encontrada!")	
        }

        return AddressData
    }
}

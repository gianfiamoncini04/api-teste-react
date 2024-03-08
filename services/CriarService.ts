import {PessoasData} from "../data/pessoas"
import {AddressData} from "../data/address"
import {Pessoa} from "../models/PessoaModels"
import {Address} from "../models/EndereçoModels"
import moment from 'moment';

export class CriarPessoaService{
    async execute({nome, sexo, datanascimento, estadocivil }: Pessoa){

    if(!nome || !sexo  || !datanascimento || !estadocivil){
        throw new Error("Você tem que preencher todos os campos!!!")
    }

    const id = PessoasData.length + 1;

    const NovaPessoa = { id, nome, sexo, datanascimento, estadocivil };
    PessoasData.push(NovaPessoa);

    const hoje = moment();
    const dataAniversario = moment(datanascimento, 'YYYY-MM-DD');
    const proximoAniversario = moment(dataAniversario).year(hoje.year());
  
    if (hoje.isSame(proximoAniversario, 'day')) {
      return console.log({ mensagem: `Parabéns, ${nome}! Feliz aniversário!` });
    }
  
    if (hoje.isAfter(proximoAniversario)) {
      proximoAniversario.add(1, 'year');
    }
  
    const diasRestantes = proximoAniversario.diff(hoje, 'days');
  
    console.log({ mensagem: `Olá, ${nome}! Faltam ${diasRestantes} dias para o seu próximo aniversário.` });

    return PessoasData
    }
}

export class CriarEnderecoService{
    async execute({ pessoaId, cep, endereco, numero, complemento, estado, cidade }: Address){

    if(!pessoaId || !cep || !endereco || !numero || !complemento || !estado || !cidade){
        throw new Error("Você tem que preencher todos os campos!!!")
    }

    const id = AddressData.length + 1;

    const NovoEndereco = { id, pessoaId, cep, endereco, numero, complemento, estado, cidade };
    AddressData.push(NovoEndereco);

    return AddressData
    }
}
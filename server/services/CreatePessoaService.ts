
interface CreateClienteProps{
    name: string;
    email: string;
}

class CreateClienteService{
    async execute({name, email}: CreateClienteProps){

    if(!name || !email){
        throw new Error("Você tem que preencher todos os campos!!!")
    }

    const cliente = await prismaClient.customer.create(
        {
            data: {
                name, 
                email,
                status: true
            }
        }
    )

    return cliente
    }
}

export {CreateClienteService}
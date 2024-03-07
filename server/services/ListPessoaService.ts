
class ListClienteService{
    async execute(){
        const cliente = await prismaClient.customer.findMany()

    return cliente
    }
}

export {ListClienteService}
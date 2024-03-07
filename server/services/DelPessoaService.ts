
interface DelClienteProps{
    id: string
}

class DelClienteService{
    async execute({id}: DelClienteProps){
        if(!id){
            throw new Error("ID Invalid")
        }
        
        const findcliente = await prismaClient.customer.findFirst({
            where: {id: id}
        })

        if(!findcliente){
            throw new Error("Cliente not found")	
        }

        await prismaClient.customer.delete({
            where: {id: findcliente.id}
        })

        return {mss: "deleted"}
    }
}

export {DelClienteService}
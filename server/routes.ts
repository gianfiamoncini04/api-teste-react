import {
	FastifyInstance,
	FastifyPluginOptions,
	FastifyRequest,
	FastifyReply,
} from "fastify";
import { CreateClienteController } from "./controllers/CreatePessoaController";
import { ListClienteController } from "./controllers/ListPessoaController";
import { DelClienteController } from "./controllers/DelPessoaController";

export async function route(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (req: FastifyRequest, res: FastifyReply) => {
        return {ok:true}
    })

    fastify.post("/clientes", async (req: FastifyRequest, res: FastifyReply) => {
        return new CreateClienteController().handle(req, res)
    })
    fastify.get("/clientes", async (req: FastifyRequest, res: FastifyReply) => {
        return new ListClienteController().handle(req, res)
    })
    fastify.delete("/clientes", async (req: FastifyRequest, res: FastifyReply) => {
        return new DelClienteController().handle(req, res)
    })
}
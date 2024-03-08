import {
	FastifyInstance,
	FastifyPluginOptions,
	FastifyRequest,
	FastifyReply,
} from "fastify";
import { CriarPessoaController, CriarEnderecoController  } from "./controllers/CriarController";
import { ListPessoaController, ListByIdPessoaController, ListEnderecoController, ListByIdEnderecoController } from "./controllers/ListController";
import { UpdatePessoaController, UpdateEnderecoController } from "./controllers/UpdateController";
import { DelPessoaController, DelEnderecoController } from "./controllers/DelController";

export async function route(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (req: FastifyRequest, res: FastifyReply) => {
        return {ok:true}
    })

    // Pessoas Routes

    fastify.get("/pessoas", async (req: FastifyRequest, res: FastifyReply) => {
        return new ListPessoaController().handle(req, res)
    })
    fastify.get("/pessoas/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new ListByIdPessoaController().handle(req, res)
    })
    fastify.post("/pessoas", async (req: FastifyRequest, res: FastifyReply) => {
        return new CriarPessoaController().handle(req, res)
    })
    fastify.put("/pessoas/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new UpdatePessoaController().handle(req, res)
    })
    fastify.delete("/pessoas/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new DelPessoaController().handle(req, res)
    })

    // Endereco Routes

    fastify.get("/endereco", async (req: FastifyRequest, res: FastifyReply) => {
        return new ListEnderecoController().handle(req, res)
    })
    fastify.get("/endereco/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new ListByIdEnderecoController().handle(req, res)
    })
    fastify.post("/endereco", async (req: FastifyRequest, res: FastifyReply) => {
        return new CriarEnderecoController().handle(req, res)
    })
    fastify.put("/endereco/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new UpdateEnderecoController().handle(req, res)
    })
    fastify.delete("/endereco/:id", async (req: FastifyRequest, res: FastifyReply) => {
        return new DelEnderecoController().handle(req, res)
    })
}
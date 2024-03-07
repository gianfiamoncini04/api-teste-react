import Fastify from "fastify";
import {route} from "./routes";

const app = Fastify({logger: true})

const start = async () => {
    await app.register(route)

    try{
        await app.listen({port: 3000})
    }catch(err){
        process.exit(1)
    }
}
start()
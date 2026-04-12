import { Router} from "express"
    import {
        listarReceitas,
        criarReceita,
        buscarReceita,
        atualizarReceita,
        deletarReceita,
    }  from "../controllers/receitasController.js";

const router = Router();

router.get ("/", listarReceitas);
router.post ("/", criarReceita);
router.get ("/:id", buscarReceita);
router.put ("/:id", atualizarReceita)
router.delete ("/:id",deletarReceita);

export default router;


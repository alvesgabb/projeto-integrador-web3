import { Router } from "express"
    import{

        criarUsuario,
        listarUsuario

    } from "../controllers/usuariosController";

const router = Router ();

router.post("/",criarUsuario);
router.get("/",listarUsuario);

export default router;
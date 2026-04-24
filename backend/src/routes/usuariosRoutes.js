import { Router } from "express"
    import{

        criarUsuario,
        listarUsuarios,
        loginUsuario

    } from "../controllers/usuariosController.js";

const router = Router ();

router.post("/",criarUsuario);
router.get("/",listarUsuarios);
router.post("/login", loginUsuario);

export default router;
const express = require("express");
const router = express.Router();

const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livroController");

router.get("/",(req, res) =>{
 return res.json({message: "Sistema de Livraria"});
})

router.post("/add_funcionario", funcionarioController.FuncionarioCreate);
/*router.get("/funcionarios/:id?", funcionarioController.FuncionarioListar);*/

router.post("/login", funcionarioController.FuncionarioVerificaLogin);
router.get("/funcionarios/:id?",funcionarioController.verificaJWT, funcionarioController.FuncionarioListar);

router.post("/add_livros", livroController.livroCreate);
router.get("/livros/:id?", livroController.LivroListar);

module.exports = router;

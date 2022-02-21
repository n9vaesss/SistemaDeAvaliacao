const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
    host: "172.22.10.82",
    user: "root",
    password: "",
    database: "bd_pesquisa",
    port: "3306",
})

app.use(express.json());
app.use(cors());

/*-------------------------------------------------------------------------------- -------------------------------------------*/

app.post("/login", (req, res) => {
    const registry = req.body.registry
    const password = req.body.password

    db.query("SELECT * FROM servidores WHERE registro_id_pk = ? AND serv_cpf = ?", [registry, password], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ msg: 0 })
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/searchReportsuperior", (req, res) => {
    const searchReport = req.body.searchReport

    db.query(" SELECT serv_superior_1 FROM servidores WHERE registro_id_pk = ? ", [searchReport], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ msg: 0 })
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/printSelftEvaluation", (req, res) => {
    const searchReport = req.body.searchReport

    db.query(" SELECT * FROM servidor_caracteristicas WHERE registro_id_fk = ? AND sc_funcionario_avaliado = ?", [searchReport, searchReport], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/printEvaluation", (req, res) => {
    const searchReport = req.body.searchReport
    const searchReportsuperior = req.body.searchReportsuperior

    db.query(" SELECT * FROM servidor_caracteristicas WHERE registro_id_fk = ? AND sc_funcionario_avaliado = ?", [searchReportsuperior, searchReport], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/printCommitteeEvaluation", (req, res) => {
    const searchReport = req.body.searchReport

    db.query(" SELECT * FROM servidor_caracteristicas WHERE registro_id_fk = 9999 AND sc_funcionario_avaliado = ?", [searchReport], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/printInformation", (req, res) => {
    const searchReport = req.body.searchReport

    db.query(" SELECT * FROM servidores WHERE registro_id_pk = ?", [searchReport], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/searchPreCommittee", (req, res) => {

    const params = req.body.params

    db.query(" SELECT * FROM servidores JOIN checklist ON registro_id_pk = id_func_fk WHERE serv_nome LIKE ? AND serv_comissao = 0 OR  serv_secretaria LIKE ? AND serv_comissao = 0 OR registro_id_pk LIKE ? AND serv_comissao = 0", [params, params, params], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/


app.post("/searchPreEvaluation", (req, res) => {

    const params = req.body.params
    const registry = req.body.registry

    db.query(" SELECT * FROM servidores JOIN checklist ON registro_id_pk = id_func_fk WHERE serv_nome LIKE ? AND serv_avaliado = 0 AND serv_superior_1 = ? OR  serv_secretaria LIKE ? AND serv_avaliado = 0 AND serv_superior_1 = ? OR registro_id_pk LIKE ? AND serv_avaliado = 0 AND serv_superior_1 = ?", [params, registry, params, registry, params, registry], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/insertCommittee", (req, res) => {

    const regcommittee = req.body.regcommittee
    const ino = req.body.ino
    const dis = req.body.dis
    const ass = req.body.ass
    const comp = req.body.comp
    const flex = req.body.flex
    const prep = req.body.prep
    const rel = req.body.rel
    const plan = req.body.plan
    const pont = req.body.pont
    const cont = req.body.cont
    const registry = req.body.registry

    db.query(" INSERT INTO servidor_caracteristicas (registro_id_fk,sc_inovacao, sc_disciplina, sc_assiduidade, sc_compromisso_prof, sc_flexibilidade, sc_preparo_prof, sc_relacoes_interpessoais, sc_planejamento, sc_pontualidade, sc_controle_emocional,sc_funcionario_avaliado) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", [registry, ino, dis, ass, comp, flex, prep, rel, plan, pont, cont, regcommittee ], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.put("/updateChecklistCommittee", (req, res) => {

    const regcommittee = req.body.regcommittee

    db.query(" UPDATE checklist SET serv_comissao = 1 WHERE id_func_fk = ? ", [regcommittee ], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send({msg: "Formulario enviado com sucesso"})
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/InfoCommittee", (req, res) => {

    const regcommittee = req.body.regcommittee

    db.query(" SELECT * FROM servidores WHERE registro_id_pk = ?", [regcommittee], (err, result) =>{
        if(err){
            res.send(err);
        }else{ 
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/InfoSelf", (req, res) => {

    const registry = req.body.registry

    db.query(" SELECT * FROM servidores WHERE registro_id_pk = ?", [registry], (err, result) =>{
        if(err){
            res.send(err);
        }else{ 
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/insertSelf", (req, res) => {

    const registry = req.body.registry
    const ino = req.body.ino
    const dis = req.body.dis
    const ass = req.body.ass
    const comp = req.body.comp
    const flex = req.body.flex
    const prep = req.body.prep
    const rel = req.body.rel
    const plan = req.body.plan
    const pont = req.body.pont
    const cont = req.body.cont

    db.query(" INSERT INTO servidor_caracteristicas (registro_id_fk,sc_inovacao, sc_disciplina, sc_assiduidade, sc_compromisso_prof, sc_flexibilidade, sc_preparo_prof, sc_relacoes_interpessoais, sc_planejamento, sc_pontualidade, sc_controle_emocional,sc_funcionario_avaliado) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", [registry, ino, dis, ass, comp, flex, prep, rel, plan, pont, cont, registry ], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.put("/updateChecklistSelf", (req, res) => {

    const registry = req.body.registry

    db.query(" UPDATE checklist SET serv_auto_avaliacao = 1 WHERE id_func_fk = ? ", [registry], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send({msg: "Formulario enviado com sucesso"})
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/insertEvaluation", (req, res) => {

    const regcommittee = req.body.regcommittee
    const ino = req.body.ino
    const dis = req.body.dis
    const ass = req.body.ass
    const comp = req.body.comp
    const flex = req.body.flex
    const prep = req.body.prep
    const rel = req.body.rel
    const plan = req.body.plan
    const pont = req.body.pont
    const cont = req.body.cont
    const registry = req.body.registry

    db.query(" INSERT INTO servidor_caracteristicas (registro_id_fk,sc_inovacao, sc_disciplina, sc_assiduidade, sc_compromisso_prof, sc_flexibilidade, sc_preparo_prof, sc_relacoes_interpessoais, sc_planejamento, sc_pontualidade, sc_controle_emocional,sc_funcionario_avaliado) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ", [registry, ino, dis, ass, comp, flex, prep, rel, plan, pont, cont, regcommittee ], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.put("/updateChecklistevaluation", (req, res) => {

    const regcommittee = req.body.regcommittee

    db.query(" UPDATE checklist SET serv_avaliado = 1 WHERE id_func_fk = ? ", [regcommittee ], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send({msg: "Formulario enviado com sucesso"})
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/checklist", (req, res) => {

    const registry = req.body.registry

    db.query(" SELECT * FROM checklist WHERE id_func_fk = ?", [registry], (err, result) =>{
        if(err){
            res.send(err);
        }else{ 
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/searchCRUD", (req, res) => {

    const params = req.body.params

    db.query(" SELECT * FROM servidores JOIN checklist ON registro_id_pk = id_func_fk WHERE serv_nome LIKE ?  OR  serv_secretaria LIKE ?  OR registro_id_pk LIKE ? ", [params, params, params], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/InfoCRUD", (req, res) => {

    const regEdit = req.body.regEdit

    db.query(" SELECT * FROM servidores WHERE registro_id_pk = ?", [regEdit], (err, result) =>{
        if(err){
            res.send(err);
        }else{ 
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.put("/managerUpdate", (req, res) => {

    const regEdit = req.body.regEdit
    const name = req.body.name
    const cargo = req.body.cargo
    const emprego = req.body.emprego
    const secretaria = req.body.secretaria
    const superior = req.body.superior
    const superior_1 = req.body.superior_1
    const superior_2 = req.body.superior_2
    const cargo_origem = req.body.cargo_origem
    const local_trabalho = req.body.local_trabalho
    const dt_ava_ano = req.body.dt_ava_ano

    db.query(" UPDATE servidores SET serv_nome = ?, serv_cargo = ?, serv_emprego = ?, serv_secretaria = ?, serv_superior = ?, serv_superior_1 = ?, serv_superior_2 = ?, serv_cargo_origem = ?, serv_local_trabalho = ?, serv_dt_ava_ano = ? WHERE registro_id_pk = ? ", [name, cargo, emprego, secretaria, superior, superior_1, superior_2, cargo_origem, local_trabalho, dt_ava_ano, regEdit], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send({msg: "Alterações salvas com sucesso!"})
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/

app.post("/InfoCommitteeEvaluation", (req, res) => {

    const regEdit = req.body.searchReport

    db.query(" SELECT * FROM servidor_caracteristicas WHERE sc_funcionario_avaliado <> registro_id_fk AND sc_funcionario_avaliado = ?", [regEdit], (err, result) =>{
        if(err){
            res.send(err);
        }else{ 
        res.send(result)
        }
    })
})

/*---------------------------------------------------------------------------------------------------------------------------*/


app.listen(3334, () => {
    console.log("Rodando na porta 3334")
})
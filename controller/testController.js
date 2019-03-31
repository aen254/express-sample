import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

// req.qury.key1
router.get("/getData",  (req, res) => {
    let result = Number(req.query.key1) + Number(req.query.key2);
    res.send({ sum : result })
});
//base =10
//height = 20
router.get("/getTriangleArea", (req, res) => {
    let result = (1/2)*req.query.base*req.query.height
    res.send({ TriangleArea : result })
});

//weight
//height
router.get("/getBMI", (req, res) => {
    let result = (req.query.weight/((req.query.height/100)*(req.query.height/100))).toFixed(2);
    let msg = "";
    if(result>25){
        msg = "Fat";
    }else if(result==25){
        msg = "Normal";
    }else if(result<25){
        msg = "Thin"
    }

    res.send({ BMI : result, Msg : msg })
});

/*
Request
key
* */

router.post("/postData",async  (req, res) => {
    responseObject = {
        msg: "",
        result: ""
    }
    if(!req.body.key){
        responseObject.msg = "Bad request";
    }else{
        responseObject.msg = "success";
        responseObject.result = req.body.key * 5;
    }
     res.send(responseObject);
});

module.exports = router;

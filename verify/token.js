const jwt = require('jsonwebtoken');

async function verifikasiToken(req,res,next){
    try{
        let token = req.headers["authorization"];
        const bearer = token.split(" ");
        const realToken = bearer[1];

        if(realToken){
            req.token = realToken;

            jwt.verify(req.token,process.env.JWT_KEY,(err,deco)=>{
                if(err) return res.sendStatus(404);

                next();
            });
        }else{
            res.sendStatus(403);
        }
    }catch(err){
        res.sendStatus(400);
    }
}

module.exports = verifikasiToken;
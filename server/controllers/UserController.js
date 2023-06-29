const {User} = require('../db/models');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const secretKey = process.env.SECRET_KEY

class UserController {
    async sign(req, res) {
        try {
            const {email, password} = req.body
            const hashPass = bcrypt.hashSync(password, 7)

            const {id} = await User.create({email, password: hashPass})
            const token = jwt.sign({email, id}, secretKey, {expiresIn: "1h"});

            return res.json({token, id})
        } catch (e) {
            console.log(e)
        }

    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const USER = await User.findOne({where: {email}});
            if (!USER) {
                return res.status(404).send("USER NOT FOUND!");
            }
            const hashPass = USER.password;
            const result = await bcrypt.compare(password, hashPass);
            if (!result) {
                return res.status(401).json({error: 'Authentication failed'});
            }
            const token = jwt.sign({email, id}, secretKey, {expiresIn: "1h"});
            return res.status(200).json({...USER, token});
        } catch (e) {
            console.log(e);
            return res.status(500).json({error: 'Internal server error'});
        }
    }

    async check(req, res) {
        const {token} = req.body

        if (!token) {
            return res.status(401).json({message: "No token provided!"})
        }

        try {
            const decoded = jwt.verify(token, secretKey)
            // const email = decoded.email
            // const {id} = await User.findOne({where:{email}})
            console.log(decoded)
            return res.json({decoded})
        } catch (e) {
            return res.status(403).json({message: "Invalid token!"})
        }
    }
}

module.exports = new UserController()
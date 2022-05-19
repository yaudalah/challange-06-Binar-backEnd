const jwt = require('../helper/jwt')
const { Users } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const payload = jwt.verifyToken(req.headers.token)
        if (!payload) {
            res.status(404).send({ message: 'user not found' })
        }
        const admin = await Users.findOne({
            where: { email: payload.email, password: payload.password },
        })
        if (!admin) {
            res.status(404).send({ message: 'user not found' })
        } else if (admin.dataValues.type==="superadmin"){
            req.adminlogin = admin.dataValues
            next() 
        }else{
         res.status(404).send({ message: 'user not super admin' })
        }
    } catch (err) {
        res.status(404).send({
            status: 404,
            message: 'user not found',
        })
    }
}
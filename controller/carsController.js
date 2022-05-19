const {Cars} = require('../models')

module.exports = class {
    static async  createCar(req, res, next) {
        Cars.create({
            plate: req.body.plate,
            available: true,
            model: req.body.model,
            createdby: req.adminlogin.id ,
            updateby: req.adminlogin.id,
            
        })
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'Mobil telah terupload!',
                    data: result
                })
            })
            .catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
    }

    static async getCarsAvail(req, res, next) {
        Cars.findAll({
            where: {available: true}
        })
                .then((result) => {
                    res.status(200).send({
                        status: 200,
                        data: result,
                    })
                })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static async updateCar(req, res, next) {
    try{
            const neUpdate = await Cars.update({...req.body,UpdatedBy: req.adminlogin.id},{where: {id: req.params.id},returning: true})
              res.status(201).send({
                status: 201,
                message: 'Data mobil diupdate!',
                data: neUpdate
            })
    }
    catch(err){
        res.status(500).send(err)
    }
    }
    static async deleteCar(req, res, next) {
        try{
            const delCars = await Cars.update({deletedBy: req.adminlogin.id, available: false},{where: {id: req.params.id},returning: true})
                  res.status(201).send({
                    status: 201,
                    message: 'Data mobil telah dihapus!',
                    data: delCars
                })
        }
        catch(err){
            res.status(500).send(err)
        }
        }

}
const userModel = require('../models/user_model') 
const mailServises = require('./mail-servises') 
const bcrypt = require('bcrypt') 
const uuid = require('uuid') 
 
class UserServises { 
    async registration(email, password){ 
        const condidate = await userModel.fineDone({email}); 
        if(condidate){ 
            throw new Error('Пользователь уже зарегистрирован.') 
        } 
        const hashPassword = await bcrypt.hash(password, 3) 
        const actionLink = uuid.v4(); 
        const user = await userModel.create({email, password:hashPassword}); 
        await mailServises.sendActivationMail(email, actionLink);
        const token = tokenService.generateToken()
    } 
} 
module.export = new UserServises();
const jwt = require('jsonwebtoken'); 
const tokenModel = require('../models/token_model'); 
 
class TokenServise{ 
    generation(payload){ 
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY,{expiresIn: '30m'}) 
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY,{expiresIn: '180d'}) 
        return{accessToken, refreshToken} 
    } 
    async saveToken(userId, refreshToken){ 
        const tokendata = await tokenModel.findOne({user: userId}) 
        if(tokendata){ 
            tokendata.refreshToken = refreshToken; 
            return tokendata.save 
        } 
        const token = await tokenModel.create({user:userId, refreshToken}); 
        return token; 
    } 
} 
module.exports = new TokenServise();
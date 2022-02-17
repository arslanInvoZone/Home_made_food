const passport = require('passport');
const passportJwt = require('passport-jwt');
const users = require('../models/users');
const ExtractJwt = passportJwt.ExtractJwt
const StrategyJwt = passportJwt.Strategy

passport.use(
    new StrategyJwt({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:process.env.JWT_SECRET
    },  
     function (jwtPayload,done){
        return users.findOne({where:{id:jwtPayload.id}})
        .then((user)=>{
            return done(null,user);
        })
        .catch((error)=>{
            return done(error)
        })
    }
    )
)
import dotenv from 'dotenv'; 
dotenv.config(); 
import express from 'express'; 
import passport from 'passport'; 
import session from 'express-session'; 
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'; 

const app = express(); 

app.use(express.json()); 
 
app.use(session({
    secret: "secret", 
    resave: false, // avoid resaving the Sessions if nothing has changed 
    saveUninitialized:true, // empty session. 
}));

app.use(passport.initialize()); // it will initialize the Passport 
app.use(passport.session()); // it make's sure that it integrates the express-session. 


passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        callbackURL: 'http://localhost:3000/auth/google/callback', 
    },(accessToken, refreshToken, profile, done)=>{ 
        return done(null,profile); 
    })
); 

//Now we will tell to passport how to Serialize and Deserialize the User. 
//Serialize Means : Saving the User's Data inside the Session
//DeSerialize Means : Retrieving the USers Data  When needed. 

passport.serializeUser((user,done)=>done(null,user)) ; 
passport.deserializeUser((user,done)=>done(null,user)); 

app.get("/",(req,res)=>{
    res.send("<a href ='/auth/google'>Login With Google</a>") ; 
}); 
app.get('/auth/google',passport.authenticate('google', {scope:['profile','email']})); 

app.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}), (req,res)=>{ 
    res.redirect('/profile'); 
})

app.get('/profile',(req,res)=>{
    res.send(`Welcome ${req.user.displayName}`); 
}); 

app.get('/logout',(req,res)=>{
    req.logout(()=>{res.redirect("/")}); 
    res.redirect('/'); 
}); 

app.listen(3000,()=>{ 
     console.log("Server is Running on Port : 3000"); 
}); 




//cron oauth passport and so on . 


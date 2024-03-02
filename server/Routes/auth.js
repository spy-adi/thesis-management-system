require("dotenv").config();
const router = require("express").Router();
const { body, validationResult } = require('express-validator');
const db = require("../models");
const Scholar = db.scholar;
const Professor = db.professor;
const Examiner = db.examiner;
const Admin = db.admin;
const Notifications = db.notifications;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const path = require('path');
const { sequelize } = require("../models");
//@route   GET /api/auth
//@desc    getting logged user
//@access  private

router.get('/getPhoto/:file(*)', (req, res) => {
    console.log(path.resolve(`./${req.params.file}`));
    res.sendFile(path.resolve(`./${req.params.file}`));
})

router.get("/",auth,async(req,res)=>{
    try {
        console.log(req.user);
        const{ id,designation }= req.user;
        let user;
        let notifs;
        if(designation==="scholar"){
            user = await Scholar.findOne({
                attributes: { exclude: ["password"] },// we dont want the password to be sent even though it is hashed 
                where:{admn:id}});
            notifs = await Notifications.findAll({ where: { target: user.admn } });
            unreadNotifs = notifs.filter(x => x.status === 'unread').length;
                return res.json({...user, designation:designation, notifications: notifs, unreadNotifications: unreadNotifs});
        }
        else if(designation==="professor"){
            user = await Professor.findOne({
                attributes: { exclude: ["password"] },// we dont want the password to be sent even though it is hashed 
                where:{profId:id}});
            notifs = await Notifications.findAll({ where: { target: user.profId } });
            unreadNotifs = notifs.filter(x => x.status === 'unread').length;
                return res.json({...user,designation:designation, notifications: notifs, unreadNotifications: unreadNotifs});
        }
        else if(designation==="examiner"){
            user = await Examiner.findOne({
                attributes: { exclude: ["password"] },// we dont want the password to be sent even though it is hashed 
                where:{examinerId:id}});
            notifs = await Notifications.findAll({ where: { target: user.examinerId } });
            unreadNotifs = notifs.filter(x => x.status === 'unread').length;
            return res.json({...user,designation:designation, notifications: notifs, unreadNotifications: unreadNotifs});
        }
        else if(designation==="admin"){
            user = await Admin.findOne({
                attributes: { exclude: ["password"] },// we dont want the password to be sent even though it is hashed 
                where:{adminId:id}});
                console.log(user);
            notifs = await Notifications.findAll({ where: { target: user.adminId } });
            unreadNotifs = notifs.filter(x => x.status === 'unread').length;
            return res.json({...user,designation:designation, notifications: notifs, unreadNotifications: unreadNotifs});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});

    }
});
//@route  POST /api/auth
//@desc    login page
//@access  public

router.post("/",
body("id","Please enter a valid id").not().isEmpty(),
body("password","Please enter a password of min 6 characters").isLength({min: 6})
,async(req,res)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        console.error(errs.message);
        return res.status(400).json({msg:"Invalid Credentials"})
    }
    console.log(req.body)
    const {id,password} = req.body;
    let designation = "scholar";
    try {
        let user = await Scholar.findOne({where:{admn:id}}); 
        if(!user){
           user = await Professor.findOne({where:{profId:id}});
           designation = "professor";
        }
        if(!user){
            user = await Examiner.findOne({where:{examinerId:id}});
            designation = "examiner";
        }
        if(!user){
            user = await Admin.findOne({where:{adminId:id}});
            designation = "admin"
        }
        if(!user){
            return res.status(404).json({msg:"Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid Credentials"});
        }
        const payload = {
            user:{
                id:id,
                designation:designation
            }
        }
        const secret = process.env.SECRET;
        jwt.sign(payload,secret,{expiresIn:3600},(err,token)=>{
            if(err) throw err;
            res.json({token});
        })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
    });

module.exports = router;
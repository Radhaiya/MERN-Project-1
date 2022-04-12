const express = require("express");
const jwt = require('jsonwebtoken')
const router = express.Router();
require("../database/connection");
const User = require("../model/UserSchema");
const bcrypt = require("bcryptjs")

//Routing

//Home page
router.get("/", (req, res) => {
    res.send(`Hello From Router`);
});

//Post req
////////Registration////////////////
router.post("/register", async (req, res) => {
    try {
       
        const { name, email, phone, work, password, cpassword } = req.body;

         //All fields mandatory check
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ error: "All fields Mandatory" });
        }

        //Check for user exist
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });

        }

        //Register New User

        //Check password and confirm password match
        if (password != cpassword) {
            return res.status(422).json({ error: "Password does not match" });
        }

        //Register
        else {
            const user = new User({ name, email, phone, work, password, cpassword });

            //Saved in Mongo
            await user.save();
            
            
            res.status(201).json({ message: "Registered Succesfully" });

        }
    } catch (err) {
        //Error Catch 
        console.log(err);
    }
});

////////////////////////Login User////////////////////////////

router.post("/signin", async (req, res) => {
    try {
        let token
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Enter Credentials" });
        }



        // This(userLogin) gives Whole Document if User is found in database
        const userLogin = await User.findOne({ email: email });

        //User Found
        if (userLogin) {
            //compare password
            // pass returns boolean
            const pass = await bcrypt.compare(password, userLogin.password);

            //JWToken
            const token = await userLogin.generateAuthToken()
            res.cookie("JWToken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,

            })


            if (pass) {
                return res.json({ message: "Login Successful" })

            }
            else {
                return res.status(400).json({ error: "Invalid Credentials" })

            }

        } else {
            res.status(400).json({ error: "Invalid Credentials" })
        }



    } catch (err) {
        console.log(err);
    }
});

module.exports = router;




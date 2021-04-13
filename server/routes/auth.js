import express from 'express'
import {signup, signin, accountActivation} from "../controllers/auth.js";
import {userSignInValidator, userSignUpValidator} from "../validators/auth.js";
import runValidation from "../validators/index.js";

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     AccountSignUp:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The account holder name
 *         email:
 *           type: string
 *           description: The account holder email
 *         passwords:
 *           type: string
 *           description: The account holder password
 *       example:
 *         name: Ahmed
 *         email: Sprite_kg@mail.ru
 *         password: 123456
 *     AccountActivation:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           description: Received token from email
 *       example:
 *         token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWhtZWQiLCJlbWFpbCI6IlNwcml0ZV9rZ0BtYWlsLnJ1IiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2MTgzMDc2MjgsImV4cCI6MTYxODMwODIyOH0.zyWhqbrRddMF8HrDPFlCgJ81duEDf_Wy5rAegXPUxxk"
 *     AccountSignIn:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The account holder email
 *         passwords:
 *           type: string
 *           description: The account holder password
 *       example:
 *         email: Sprite_kg@mail.ru
 *         password: 123456
 */

/**
 * @swagger
 * tags:
 *  name: Account
 *  description: Account managing API
 */

/**
 * @swagger
 * /greet:
 *   get:
 *     tags: [Account]
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new account
 *     tags: [Account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AccountSignUp'
 *     responses:
 *       200:
 *         description: The activation link was sent to your email.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccountSignUp'
 *       400:
 *         description: Email exists.
 */


/**
 * @swagger
 * /account-activation:
 *   post:
 *     summary: Activate registered account
 *     tags: [Account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AccountActivation'
 *     responses:
 *       200:
 *         description: The account was successfully activated. Please Log In.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccountActivation'
 *       401:
 *         description: Error. The link might be old.
 */

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Log In
 *     tags: [Account]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AccountSignIn'
 *     responses:
 *       200:
 *         description: You've successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AccountSignIn'
 *       401:
 *         description: Authorization information is missing or invalid.
 */




router.get('/greet', (req, res) => {
    res.send('Hello World!');
});

router.post('/signup', userSignUpValidator, runValidation, signup)
router.post('/account-activation', accountActivation)
router.post('/signin', userSignInValidator, runValidation, signin)

export default router
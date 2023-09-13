import express, { Router } from 'express'
const router : Router = express()
import trainerController from '../Controllers/trainerController'
import auth from '../middleware/auth'

router.post('/register',trainerController.registerFunc)
router.post('/login',trainerController.loginFunc)
router.post('/blogs',auth,trainerController.blogFunc)
router.get('/blogs',auth,trainerController.getBlogFunc)
router.post('/diets',auth,trainerController.dietFunc)
router.get('/diets',auth,trainerController.getDietFunc)

export default router
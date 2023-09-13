import express, { Router } from 'express'
const router : Router = express()
import userController from '../Controllers/userController'
import auth from '../middleware/auth'

router.post('/register',userController.registerFunc)
router.post('/login',userController.loginFunc)
router.post('/faq',auth,userController.faqFunc)
router.get('/faq',auth,userController.getFaqFunc)

export default router

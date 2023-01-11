import express from 'express'

const router = express.Router()

// middlewares
import { requireSignin, isAdmin } from '../middlewares/auth.js'

// controllers
import { create, update, remove, getAll, getById } from '../controllers/category.js'

// CRUD
router.post('/category', requireSignin, isAdmin, create)
router.put('/category/:categoryId', requireSignin, isAdmin, update)
router.delete('/category/:categoryId', requireSignin, isAdmin, remove)
router.get('/categories', getAll)
router.get('/category/:slug', getById)

export default router


// NOTA: el categoryId es el "_id" automático que se genera al postear en MongoDB. Usar ese mismo a la hora de updatear o deletear una categoría por parámetro.
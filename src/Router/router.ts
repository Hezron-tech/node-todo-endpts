import { getTodos } from './../Controllers/todo';
import { Router } from "express";
import { createTodo, } from "../Controllers/todo";

const router = Router()

router.get('/get',getTodos)
// router.get('/')
router.post('/',createTodo)
router.put('/')
router.delete('/')

export default router
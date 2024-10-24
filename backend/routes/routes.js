import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { addTask , getCompletedTasks, getUserTasks ,getInProgressTasks, deleteTask, updateTask, getTask } from "../controllers/taskController.js";

const router = Router();

//tip from masry: everytime we access something in db we use try catch block


//Register route
router.post("/register", registerUser);
// Login route
router.post("/login", loginUser);

//--------------------------------------------------------task routes--------------------------------------------------------//

// Add Task Route
router.post('/addTask', addTask);

//update task
router.put('/updateTask/:taskId', updateTask)

//getTask
router.get('/getTask/:taskId', getTask);

// get tasks by userID (from route parameter)
router.get('/getTasks/:userId', getUserTasks);

// GET completed tasks by userID (from query parameter)
router.get('/getCompletedTasks/', getCompletedTasks);

// get inprogress tasks by userID (from query parameter)
router.get('/getInProgressTasks/', getInProgressTasks);

// delete task by taskID
router.delete('/deleteTask/:taskId', deleteTask);


export default router;







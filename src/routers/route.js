/*
*
* Auth Router
*
*/
//Extensions
import { Router } from "express"; 
import { methods as getAuthController } from "../controllers/dataController.js";

const router = Router();

//Get data Controllers
router.get("/get", getAuthController.GetData);

// Export
export default router;
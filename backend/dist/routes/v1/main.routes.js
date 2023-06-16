"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainrouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const main_controller_1 = require("../../controller/main.controller");
const admin_controller_1 = require("../../controller/admin.controller");
exports.mainrouter = express_1.default.Router();
exports.mainrouter.post("/contact-us", main_controller_1.MainController.create_contactus);
exports.mainrouter.post("/partner-us", main_controller_1.MainController.create_patner);
exports.mainrouter.post("/check-status", main_controller_1.MainController.check_status);
exports.mainrouter.post("/create-order", (0, auth_1.auth)(), main_controller_1.MainController.create_order);
exports.mainrouter.put("/upload-constant", (0, auth_1.auth)(), main_controller_1.MainController.uploadConstant);
exports.mainrouter.put("/genratePk", (0, auth_1.auth)(), main_controller_1.MainController.genrateintent);
//--------------------------user details-------------------------------
exports.mainrouter.get("/userdetails", (0, auth_1.auth)(), main_controller_1.MainController.userDetails);
exports.mainrouter.put("/updateprofile", (0, auth_1.auth)(), main_controller_1.MainController.updateprofile);
exports.mainrouter.get("/get-my-order", (0, auth_1.auth)(), main_controller_1.MainController.MyGetOrder);
exports.mainrouter.post("/get-process-order", (0, auth_1.auth)(), main_controller_1.MainController.MyProcessOrder);
exports.mainrouter.put("/update-payment", (0, auth_1.auth)(), main_controller_1.MainController.UpdatePayment);
exports.mainrouter.post("/delete-order", (0, auth_1.auth)(), main_controller_1.MainController.deleteOrder);
//admin-routes---------------------------------------------------------------
exports.mainrouter.get("/get-All-order", (0, auth_1.auth)(), admin_controller_1.AdminController.AllGetOrder);
exports.mainrouter.get("/get-All-user", (0, auth_1.auth)(), admin_controller_1.AdminController.GetAllUser);
exports.mainrouter.put("/notes-applied", (0, auth_1.auth)(), admin_controller_1.AdminController.notes_applied);
exports.mainrouter.put("/complete-process", (0, auth_1.auth)(), admin_controller_1.AdminController.complete_process);
exports.mainrouter.get("/contace-us", admin_controller_1.AdminController.get_contactus);
exports.mainrouter.get("/patner-with-us", admin_controller_1.AdminController.get_partnerus);
exports.mainrouter.post("/extra-request", admin_controller_1.AdminController.Extra_requests);
exports.mainrouter.post("/process-log", admin_controller_1.AdminController.Process_log);
//--------------------------------------------------------------------------
exports.mainrouter.post("/create-blog", (0, auth_1.auth)(), admin_controller_1.AdminController.create_blog);
exports.mainrouter.get("/blogs", admin_controller_1.AdminController.get_blogs);
exports.mainrouter.get("/mycreate-blog", (0, auth_1.auth)(), admin_controller_1.AdminController.my_create_blog);
exports.mainrouter.delete("/mycreate-blog", (0, auth_1.auth)(), admin_controller_1.AdminController.delete_my_create_blog);
exports.mainrouter.get("/dashboard-details", (0, auth_1.auth)(), admin_controller_1.AdminController.dashboard_details);
exports.mainrouter.delete("/delete-contactus", (0, auth_1.auth)(), admin_controller_1.AdminController.delete_contact);
exports.mainrouter.get("/register-user", (0, auth_1.auth)(), admin_controller_1.AdminController.get_registerUser);
//automation process------------------------------------------------------------------
exports.mainrouter.post("/awaiting-consent", admin_controller_1.AdminController.awaiting_consent);
//# sourceMappingURL=main.routes.js.map
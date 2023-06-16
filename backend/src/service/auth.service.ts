import { UserInstance } from "../model/user.model";
import bcrypt from "bcrypt";
import { UserAttributes } from "../interface/auth.interface";
import { SessionInstance } from "../model/session.model";
import {
  sessionInterface,
  UpdatesessionInterface,
} from "../interface/session.interface";
import { uuid } from "uuidv4";
import { ResetInstance } from "../model/resetpassword";
import { otpgenerator } from "../utils/randomnumber";
import { sendMail } from "../utils/sendMail";
import { resetpassword } from "../template/resetpasword";

class UserServiceClass {
  GetuserbyEmail = async (EMAIL: string) => {
    const result = await UserInstance.findOne({
      where: {
        EMAIL: EMAIL,
      },
    });
    return result;
  };

  GetuserbyID = async (ID: number) => {
    const result = await UserInstance.findOne({
      where: {
        ID: ID,
      },
    });
    return result;
  };

  CreateUser = async (request: UserAttributes) => {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = bcrypt.hashSync(request.PASSWORD as string, salt);
    const result = await UserInstance.create({
      USERROLE: 0,
      USERNAME: request.USERNAME,
      F_NAME: request.F_NAME,
      L_NAME: request.L_NAME,
      EMAIL: request.EMAIL,
      PASSWORD: hashedpassword,
      DOB: null,
      VISANO: null,
      EMAILSTATUS: false,
      ISDELETED: false,
    });
    return result;
  };

  LoginUser = async (EMAIL: string, PASSWORD: string, COMPPASSWORD: string) => {
    const comparepassword = bcrypt.compare(PASSWORD, COMPPASSWORD);
    return comparepassword;
  };

  CresteSession = async (request: sessionInterface) => {
    const salt = await bcrypt.genSalt(10);
    const result = await SessionInstance.create({
      SESSION_ID: uuid(),
      USERAGENT: request.USERAGENT,
      UERIP: request.UERIP,
      USERID: request.USERID,
      SESSION_STATUS: true,
    });
    return result;
  };

  CloseOldSession = async (request: UpdatesessionInterface) => {
    const salt = await bcrypt.genSalt(10);
    const result = await SessionInstance.update(
      {
        SESSION_STATUS: false,
      },
      {
        where: {
          USERID: request.USERID,
        },
      }
    );
    return result;
  };

  checkotp = async (EMAIL: string) => {
    const result = await ResetInstance.findOne({
      where: {
        EMAIL: EMAIL,
      },
    });
    return result;
  };

  createOpt = async (EMAIL: string) => {
    const result = "";
    const resetotp = otpgenerator(6);
    await ResetInstance.create({
      EMAIL: EMAIL,
      RESET_OTP: resetotp,
    }).then(async (res) => {
      const nodemail = await sendMail(
        EMAIL,
        "GCMSBuddy - Reset Password Request",
        "",
        resetpassword(resetotp)
      );
      return nodemail;
    });
    return result;
  };

  updateOpt = async (EMAIL: string) => {
    const result = "";
    const resetotp = otpgenerator(6);
    await ResetInstance.update(
      {
        RESET_OTP: resetotp,
      },
      {
        where: {
          EMAIL: EMAIL,
        },
      }
    ).then(async (res) => {
      const nodemail = await sendMail(
        EMAIL,
        "GCMSBuddy - Reset Password Request",
        "",
        resetpassword(resetotp)
      );
      return nodemail;
    });
    return result;
  };
}

export const UserService = new UserServiceClass();

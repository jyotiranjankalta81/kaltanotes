import { Request, Response } from "express";
import httpStatus from "http-status";
import { mainService } from "../service/main.service";
import { catchAsync } from "../utils/catchAsync";
import { generateAuthTokens } from "../utils/tokens";
import jwt_decode from "jwt-decode";
const stripe = require("stripe")(
  "sk_test_51L2wFuSIakMfogRlbY0t1gPUKf7bbZyMkEdWELrX98T6LsBPeOV2Y0R4BkEDWBo7v4sCJ98x5aQBjtqPjsCk7FB400v9cTQOMM"
);

class MainControllerClass {
  userDetails = catchAsync(async (req: Request, res: Response) => {
    try {
      const reqheader: any = req.header("authorization");
      const header: any = jwt_decode(reqheader);
      const insertcollection = await mainService.userDetails(header);
      return res.status(httpStatus.CREATED).send({
        success: true,
        message: " Fetched successfully",
        data: insertcollection,
      });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  MyGetOrder = catchAsync(async (req: Request, res: Response) => {
    try {
      const reqheader: any = req.header("authorization");
      const header: any = jwt_decode(reqheader);
      const insertcollection = await mainService.MyGetOrder(header);
      return res.status(httpStatus.CREATED).send({
        success: true,
        message: " Fetched successfully",
        data: insertcollection,
      });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  MyProcessOrder = catchAsync(async (req: Request, res: Response) => {
    try {
      const reqheader: any = req.header("authorization");
      const header: any = jwt_decode(reqheader);
      const insertcollection = await mainService.MyProcessOrder(
        header,
        req.body as any
      );
      return res.status(httpStatus.CREATED).send({
        success: true,
        message: " Fetched successfully",
        data: insertcollection,
      });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  UpdatePayment = catchAsync(async (req: Request, res: Response) => {
    try {
      const reqheader: any = req.header("authorization");
      const header: any = jwt_decode(reqheader);
      const insertcollection = await mainService.UpdatePayment(
        header,
        req.body as any
      );
      if (insertcollection) {
        const getorder = await mainService.getorderbyid(
          header,
          req.body as any
        );

        return res.status(httpStatus.CREATED).send({
          success: true,
          message: " Updated successfully",
          data: getorder,
        });
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  deleteOrder = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.DeleteOrder(req.body as any);
      if (insertcollection) {
        return res.status(httpStatus.CREATED).send({
          success: true,
          message: " Deleted successfully",
          data: insertcollection,
        });
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  updateprofile = catchAsync(async (req: Request, res: Response) => {
    try {
      const reqheader: any = req.header("authorization");
      const header: any = jwt_decode(reqheader);
      const insertcollection = await mainService.updateprofile(
        header,
        req.body as any
      );
      return res.status(httpStatus.CREATED).send({
        success: true,
        message: " Fetched successfully",
        data: insertcollection,
      });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  create_contactus = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.create_contactus(req);
      return res.status(httpStatus.CREATED).send({
        success: true,
        message: "Your Form has subbmitted successfully",
        data: insertcollection,
      });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  create_patner = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.create_patner(req);
      return res.status(httpStatus.CREATED).send({
        success: true,
        message: "Your Form has subbmitted successfully",
        data: insertcollection,
      });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  check_status = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.check_status(req);
      return res.status(httpStatus.CREATED).send({
        success: true,
        message: "Your Form has subbmitted successfully",
        data: insertcollection,
      });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  create_order = catchAsync(async (req: Request, res: Response) => {
    const reqheader: any = req.header("authorization");
    const header: any = jwt_decode(reqheader);
    try {
      const order1: any = await mainService.create_order(req, header);
      if (order1) {
        const order2 = await mainService.create_order_extense(req, order1);
        if (order2) {
          const sendmail: any = await mainService.send_mail(req, order2);
          if (sendmail?.status) {
            const processlog = await mainService.CreateProcessLog({
              ORDER_ID: order1.ORDER_ID,
              PROCESS_STATUS: true,
              PERPOUS: "Form Applied and Consent email send successfully",
            });
            if (processlog) {
              return res.status(httpStatus.CREATED).send({
                success: true,
                message: "Your Form has subbmitted successfully",
                data: order1,
              });
            }
          }
        }
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  uploadConstant = catchAsync(async (req: Request, res: Response) => {
    try {
      const files: any = req?.files;
      const constantfile = await mainService.uploadConstant(
        req.body.ORDER_ID,
        files
      );
      if (constantfile) {
        const getorderid = await mainService.getOrdereId(req.body.ORDER_ID);
        if (getorderid) {
          const getemail = await mainService.getemailbyorder(
            getorderid?.ORDER_ID
          );
          if (getemail) {
            const sendmail: any = await mainService.UploadConsentEmail(
              getemail?.EMAIL,
              req.body.ORDER_ID
            );
            if (sendmail) {
              const processlog = await mainService.CreateProcessLog({
                ORDER_ID: getorderid?.ORDER_ID,
                PROCESS_STATUS: true,
                PERPOUS: "upload Constant",
              });
              if (processlog) {
                return res.status(httpStatus.CREATED).send({
                  success: true,
                  message: "Your consent is uploaded successfully",
                  data: constantfile,
                });
              }
            }
          }
        }
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  genrateintent = catchAsync(async (req: Request, res: Response) => {
    try {
      const {
        email,
        appointmentPrice,
        description,
        customer_description,
        user_id,
      } = req.body;

      try {
        const customer = await stripe.customers.create({
          email: email,
        });
        const ephemeralKey = await stripe.ephemeralKeys.create(
          { customer: customer.id },
          { apiVersion: "2022-08-01" }
        );
        const paymentinstance = await stripe.paymentIntents.create({
          amount: parseInt(appointmentPrice) * 100,
          currency: "USD",
          payment_method_types: ["card"],
          description: description,
          receipt_email: email,
          customer: customer.id,
          metadata: {
            customer_email: email,
            customer_description: customer_description,
            user_id: user_id,
          },
        });

        res.json({
          message: "payment initiated",
          paymentinstance,
          clientSeceret: paymentinstance.client_secret,
          ephemeralKey: ephemeralKey.secret,
          customer: customer.id,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal Srver Error" });
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });
}

export const MainController = new MainControllerClass();

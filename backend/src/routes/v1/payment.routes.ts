import express, { Express, Response, Request } from "express";
import httpStatus from "http-status";
import { config } from "../../config/config";
const paymentrouter = express.Router();
const Stripe = require("stripe");
const stripedevelopementapi =
  "sk_test_51L2wFuSIakMfogRlbY0t1gPUKf7bbZyMkEdWELrX98T6LsBPeOV2Y0R4BkEDWBo7v4sCJ98x5aQBjtqPjsCk7FB400v9cTQOMM";
const stripe = Stripe(stripedevelopementapi);

paymentrouter.post("/canclepayment", async (req: Request, res: Response) => {
  const { paymentid } = req.body;
  const paymentIntent = await stripe.paymentIntents.cancel(paymentid);
  console.log(paymentIntent);
  if (paymentIntent) {
    return res.status(httpStatus.CREATED).send({
      success: true,
      message: "payment cancled",
      data: {
        clientSeceret: paymentIntent,
      },
    });
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ success: false, message: "Somthing went wrong!", data: [] });
  }
});

paymentrouter.post("/create-checkout-session", async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.EMAIL,
    });
    const session: any = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: req.body.name,
            },
            unit_amount: 999 * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${config.frontendurl}/payment-complete?ORDER_ID=${req.body.ORDER_ID}&paymentId=${customer.id}`,
      cancel_url: `${config.frontendurl}/payment-reject?ORDER_ID=${req.body.ORDER_ID}`,
    });
    return res.status(httpStatus.CREATED).send({
      success: true,
      message: "sheet init",
      data: {
        clienturl: session.url,
      },
    });
  } catch (e) {
    console.log(e);
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ success: false, message: "Somthing went wrong!", data: e });
  }
});

paymentrouter.post("/paymentstipe", async (req: Request, res: Response) => {
  const {
    email,
    appointmentPrice,
    description,
    customer_description,
    user_id,
    token,
  } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.id,
      source: token.email,
    });
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2022-08-01" }
    );
    const paymentinstance = await stripe.charges.create({
      amount: parseInt(appointmentPrice) * 100,
      source: token.id,
      currency: "USD",
      // payment_method_types: ["card"],
      description: description,
      receipt_email: token.email,
      // customer: customer.id,
      metadata: {
        customer_email: token.email,
        customer_description: customer_description,
        user_id: user_id,
      },
    });
    return res.status(httpStatus.CREATED).send({
      success: true,
      message: "payment initiated",
      data: {
        paymentinstance,
        clientSeceret: paymentinstance.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ success: false, message: "Somthing went wrong!", data: err });
  }
});

paymentrouter.post("/refundpayment", async (req: Request, res: Response) => {
  const { paymentid } = req.body;
  const refund = await stripe.refunds.create({
    payment_intent: paymentid,
  });
  try {
    return res.status(httpStatus.CREATED).send({
      success: true,
      message: "refund initied successfully",
      data: refund,
    });
  } catch (err) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ success: false, message: "Somthing went wrong!", data: err });
  }
});

export default paymentrouter;

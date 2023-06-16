"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = require("../../config/config");
const paymentrouter = express_1.default.Router();
const Stripe = require("stripe");
const stripedevelopementapi = "sk_test_51L2wFuSIakMfogRlbY0t1gPUKf7bbZyMkEdWELrX98T6LsBPeOV2Y0R4BkEDWBo7v4sCJ98x5aQBjtqPjsCk7FB400v9cTQOMM";
const stripe = Stripe(stripedevelopementapi);
paymentrouter.post("/canclepayment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentid } = req.body;
    const paymentIntent = yield stripe.paymentIntents.cancel(paymentid);
    console.log(paymentIntent);
    if (paymentIntent) {
        return res.status(http_status_1.default.CREATED).send({
            success: true,
            message: "payment cancled",
            data: {
                clientSeceret: paymentIntent,
            },
        });
    }
    else {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .send({ success: false, message: "Somthing went wrong!", data: [] });
    }
}));
paymentrouter.post("/create-checkout-session", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield stripe.customers.create({
            email: req.body.EMAIL,
        });
        const session = yield stripe.checkout.sessions.create({
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
            success_url: `${config_1.config.frontendurl}/payment-complete?ORDER_ID=${req.body.ORDER_ID}&paymentId=${customer.id}`,
            cancel_url: `${config_1.config.frontendurl}/payment-reject?ORDER_ID=${req.body.ORDER_ID}`,
        });
        return res.status(http_status_1.default.CREATED).send({
            success: true,
            message: "sheet init",
            data: {
                clienturl: session.url,
            },
        });
    }
    catch (e) {
        console.log(e);
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .send({ success: false, message: "Somthing went wrong!", data: e });
    }
}));
paymentrouter.post("/paymentstipe", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, appointmentPrice, description, customer_description, user_id, token, } = req.body;
    try {
        const customer = yield stripe.customers.create({
            email: token.id,
            source: token.email,
        });
        const ephemeralKey = yield stripe.ephemeralKeys.create({ customer: customer.id }, { apiVersion: "2022-08-01" });
        const paymentinstance = yield stripe.charges.create({
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
        return res.status(http_status_1.default.CREATED).send({
            success: true,
            message: "payment initiated",
            data: {
                paymentinstance,
                clientSeceret: paymentinstance.client_secret,
                ephemeralKey: ephemeralKey.secret,
                customer: customer.id,
            },
        });
    }
    catch (err) {
        console.log(err);
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .send({ success: false, message: "Somthing went wrong!", data: err });
    }
}));
paymentrouter.post("/refundpayment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentid } = req.body;
    const refund = yield stripe.refunds.create({
        payment_intent: paymentid,
    });
    try {
        return res.status(http_status_1.default.CREATED).send({
            success: true,
            message: "refund initied successfully",
            data: refund,
        });
    }
    catch (err) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .send({ success: false, message: "Somthing went wrong!", data: err });
    }
}));
exports.default = paymentrouter;
//# sourceMappingURL=payment.routes.js.map
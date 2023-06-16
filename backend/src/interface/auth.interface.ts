export interface creatuserinf {
  USERID: string;
  USERROLE: number;
  NAME: string;
  EMAIL: String;
  PASSWORD: String;
}

export interface UserAttributes {
  ID?: number;
  USERROLE: number;
  USERNAME: string;
  F_NAME: string;
  L_NAME: string;
  EMAIL: String;
  PASSWORD: String;
  DOB: String | null;
  VISANO: String | null;
  EMAILSTATUS: Boolean;
  ISDELETED: Boolean;
}

export interface jwttoken {
  sub: number;
  role: number;
  iat: any;
  exp: any;
}
export interface resetinterface {
  RESET_ID?: number;
  EMAIL: any;
  RESET_OTP: string;
}

export interface ImageRequest extends Request {
  files: any;
}

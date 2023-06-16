export interface orderinterface {
    ORDER_ID?: number,
    ORDER_TYPE: number,
    F_NAME: string,
    L_NAME: string,
    DOB: string,
    VISA_APP_NO: string | any,
    EMAIL: string,
    PATNER_TYPE: boolean,
    SUPPOSE_F_NAME: string,
    SUPPOSE_L_NAME: string,
    SUPPOSE_DOB: string,
    UCI_NUMBER: string,
    ATIP: string,
    HEAR_CMT: string,
    STATUS?: number,
    ISEDITED?: Boolean,
    ISDELETED?: Boolean,
    APPLIED_BY: number,
    APPLIED_AT?: string,
}


export interface orderextenseInterface {
    ORDER_ID?: number,
    NORMAL_ID?: string,
    SPECIAL_ID?: any,
    DOCUMENT_STATUS: boolean,
    DOCUMENTS?: any,
    PAYMENT_TYPE: string | null,
    PAYMENT_ID: string | null,
    NOTES_APPLIEDON: any,
    NOTES_APPLIEDBY: any,
    COMPLETION_DATE: any,
    COMPLETED_BY: any,
}


export interface email_log {
    MAIL_ID?: number,
    ORDER_ID: string,
    EMAIL_STATUS: boolean,
    PERPOUS: string,
    EMAIL_BODY?: string,
    ISDELETED?: boolean,
}

export interface ProcessLogInstance {
    LOG_ID?: number,
    ORDER_ID: string,
    PROCESS_STATUS: boolean,
    PERPOUS: string,
    ISDELETED?: boolean,
}






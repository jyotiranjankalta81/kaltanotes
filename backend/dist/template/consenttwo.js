"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consenttwo_body = void 0;
const consenttwo_body = (name, link, samplelink, uploafdlink) => (`
    <!DOCTYPE html>
<html>
<title>Online HTML Editor</title>
<head>
</head>
<body>
<p>Dear ${name},</p>
<p>Thank you for placing your order of CBSA Notes with GCMSBuddy. In order to further process your order, please send us the completed and signed CBSA Consent Form.</p>

<p>You can download it from here: <em><a href="${link}">Consent form Link &ndash; CBSA_Consent_Form.pdf </a> </em></p>

<p>Please refer to the sample of completed consent form here: <em> <a href="${samplelink}"> CBSA Sample Consent Form Link </a></em></p>
<p>To upload vthe consent form click here: <em><a href="${uploafdlink}"></a>  Upload consent form</em></p> 
<p>Instructions for completing the consent form:</p>
<ul>
    <li>
        <p>Download the Consent Form from the above link</p>
    </li>
    <li>
        <p>Keep the Section 2 as it is after downloading the form. This section contains our information and it should not be changed</p>
    </li>
    <li>
        <p>Enter the details of the primary applicant in Section 3. Details of the spouse and children (if applicable) should be entered in Section 4, 5 and 6.</p>
    </li>
    <li>
        <p>Print and sign the consent form <strong>with handwritten signatures, in Blue Ink only. For minor kids, both the parents should sign in Section 5 and 6.</strong> Also please follow the format for date as yyyy/mm/dd.</p>
    </li>
    <li>
        <p>Scan the form in color and <em>upload it to your account under the order details.</em> Try to keep the size of the file under 2mb.</p>
    </li>
    <li>
        <p>In case there are more than 4 members in the application, please fill a new form for the additional members.</p>
    </li>
</ul>

<p>You can use your cell phone camera or any app from your phone to scan the consent form. Please make sure the image is in color, clear and the text is readable.</p>

<p>Please note we cannot process your order unless we receive a signed consent form from you.</p>

<p>After this step, you will receive a separate email with the confirmation of your application to IRCC.</p>

<p>Regards,</p>

<p><strong>GCMSBuddy Team</strong></p>
<p><u><a href="https://www.gcmsbuddy.com/">https://www.gcmsbuddy.com</a></u></p>
</body>
</html>
    
    
    `);
exports.consenttwo_body = consenttwo_body;
//# sourceMappingURL=consenttwo.js.map
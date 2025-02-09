/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { EmailClient } from "@azure/communication-email";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    console.log(data);

    
    const connectionString: string | null = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING || null;
    if (!connectionString) {
      throw new Error("Connection string is not defined");
    }
    const client = new EmailClient(connectionString);
    const emailMessage = {
      senderAddress: "DoNotReply@525e1565-7ad2-4298-a438-218458c02ca2.azurecomm.net",
      content: {
        subject: "Careeres",
        plainText: "New Application Received.",
        html: `
       <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <!--<![endif]-->
    <!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellpadding="0" cellspacing="0" align="center" class="esd-header-popover es-header">
                <tbody></tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" width="600" class="es-content-body">
                        <tbody>
                          <tr>
                            <td align="left" background="https://euhcmuw.stripocdn.email/content/guids/CABINET_1298dc8aa01fe34f7c62e4093dd0ee11c9d95a479ff5bbf11dd3d0b4ae8fa7d2/images/frame_367_QCr.png" esd-img-prev-position="center bottom" class="esd-structure es-p30t es-p30b es-p40r es-p40l es-m-p20r es-m-p20l" style="background-image:url(https://euhcmuw.stripocdn.email/content/guids/CABINET_1298dc8aa01fe34f7c62e4093dd0ee11c9d95a479ff5bbf11dd3d0b4ae8fa7d2/images/frame_367_QCr.png);background-repeat:no-repeat;background-position:center bottom">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="520" align="center" valign="top" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#0b5394" style="background-color:#0b5394;border-radius:30px;border-collapse:separate">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p20">
                                              <h1>
                                                New Application Recived
                                              </h1>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" width="600" class="es-content-body">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p40t es-p10b es-p40r es-p40l">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="520" align="center" valign="top" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <h2>
                                                Details
                                              </h2>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p40r es-p40l">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="520" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <p>
                                                Name: ${data.name}
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p40r es-p40l">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="520" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <p>
                                                Email:${data.email}
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p40r es-p40l">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="520" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <p>
                                                Phone: ${data.phone}
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p40r es-p40l">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="520" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <p>
                                             Resume: <a href="${data.resumeUrl}" target="_blank">See Resume</a>

                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p40r es-p40l">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="520" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <p>
                                       ${data.coverLetterUrl != "null"   ?   `CoverLetter:<a href="${data.coverLetterUrl}" target="_blank">See Cover Letter </a>` :''}
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-content">
                <tbody></tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-content">
                <tbody></tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-footer">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table align="center" cellpadding="0" cellspacing="0" width="600" bgcolor="#3d85c6" class="es-footer-body" style="background-color:#3d85c6">
                        <tbody>
                          <tr>
                            <td align="left" bgcolor="#ffffff" class="esd-structure es-p40 es-m-p30t es-m-p30b es-m-p20r es-m-p20l" style="background-color:#ffffff;border-radius:0px 20px 0px 0px">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="520" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-social" style="font-size:0">
                                              <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" class="es-p30r">
                                                      <a target="_blank" href="https://viewstripo.email">
                                                        <img src="https://euhcmuw.stripocdn.email/content/assets/img/social-icons/logo-gray/facebook-logo-gray.png" alt="Fb" title="Facebook" width="32">
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top" class="es-p30r">
                                                      <a target="_blank" href="https://viewstripo.email">
                                                        <img src="https://euhcmuw.stripocdn.email/content/assets/img/social-icons/logo-gray/x-logo-gray.png" alt="X" title="X" width="32">
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top" class="es-p30r">
                                                      <a target="_blank" href="https://viewstripo.email">
                                                        <img src="https://euhcmuw.stripocdn.email/content/assets/img/social-icons/logo-gray/instagram-logo-gray.png" alt="Ig" title="Instagram" width="32">
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top">
                                                      <a target="_blank" href="https://viewstripo.email">
                                                        <img src="https://euhcmuw.stripocdn.email/content/assets/img/social-icons/logo-gray/youtube-logo-gray.png" alt="Yt" title="Youtube" width="32">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-spacer es-p20t es-p20b" style="font-size:0">
                                              <table border="0" width="45%" height="100%" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-bottom:1px solid #cccccc;background:unset;height:0px;width:100%;margin:0px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" esd-links-underline="none" class="esd-block-text">
                                              <p>
                                                <a target="_blank" href="https://viewstripo.email" style="text-decoration:none">View Web&nbsp;Version</a>&nbsp;•&nbsp;<a target="_blank" href="https://viewstripo.email" style="text-decoration:none">Email Preferences</a>&nbsp;• <a target="_blank" style="text-decoration:none">Unsubscribe</a>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-content esd-footer-popover">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table align="center" cellpadding="0" cellspacing="0" width="600" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td align="left" bgcolor="#ffffff" class="esd-structure es-p20t es-p30b es-p40r es-p40l" style="background-color:#ffffff;border-radius:0px 0px 20px 20px">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="520" align="center" valign="top" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image made_with" style="font-size:0">
                                              <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=internal_emails_1&utm_content=youre_invited_to_join_our_webinars">
                                                <img src="https://euhcmuw.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt="" width="125" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`,
      },
      attachments: [],
      recipients: {
        to: [{ address: process.env.TO_EMAIL_ADDRESS || ""}],
      },
    };

    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
    return NextResponse.json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Email Sent Successfully failed" });
  }
}

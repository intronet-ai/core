export type MailgunEvent = (typeof exampleMailgunWebhook)['event-data'];

export const exampleMailgunWebhook = {
  createdAt: { _seconds: 1694882825, _nanoseconds: 232000000 },
  signature: {
    signature:
      '51387a7989f27481ed0e8ddfa79317c94bdc17f747d1c27111426145123e4187',
    token: '7acc870e2dd4c280f792b01c536464e053a17ce717e192dc14',
    timestamp: '1694882824',
  },
  'event-data': {
    'delivery-status': {
      'session-seconds': 0.4331989288330078,
      'attempt-no': 1,
      code: 250,
      utf8: true,
      description: '',
      tls: true,
      message: 'OK',
      'mx-host': 'smtp-in.example.com',
      'certificate-verified': true,
    },
    flags: {
      'is-system-test': false,
      'is-routed': false,
      'is-authenticated': true,
      'is-test-mode': false,
    },
    storage: {
      url: 'https://se.api.mailgun.net/v3/domains/mail.intronet.ai/messages/message_key',
      key: 'message_key',
    },
    message: {
      headers: {
        subject: 'Test delivered webhook',
        'message-id': '20130503182626.18666.16540@mail.intronet.ai',
        from: 'Bob <bob@mail.intronet.ai>',
        to: 'Alice <alice@example.com>',
      },
      attachments: [],
      size: 111,
    },
    tags: ['my_tag_1', 'my_tag_2'],
    'user-variables': {
      'my-var-2': 'awesome',
      my_var_1: 'Mailgun Variable #1',
    },
    envelope: {
      'sending-ip': '209.61.154.250',
      sender: 'bob@mail.intronet.ai',
      transport: 'smtp',
      targets: 'alice@example.com',
    },
    campaigns: [],
    'log-level': 'info',
    recipient: 'alice@example.com',
    id: 'CPgfbmQMTCKtHW6uIWtuVe',
    'recipient-domain': 'example.com',
    event: 'delivered',
    timestamp: 1521472262.908181,
  },
  updatedAt: { _seconds: 1694882825, _nanoseconds: 233000000 },
};

# 📡 Communication Integrations

A **NestJS**-based backend service that integrates multiple **Twilio communication channels** including SMS, WhatsApp, voice calls, and email (via SendGrid). Designed for scalable, modular use in microservices or monolithic applications.

---

## 🚀 Features

- 📩 **SMS Messaging** via Twilio
- 💬 **WhatsApp Messaging** via Twilio Business API
- 📞 **Voice Calls** through Twilio's programmable voice service
- 📧 **Email** sending using Twilio SendGrid
- 🛠️ **Modular Design** for easy extension
- 🗃️ **Prisma ORM** integration for structured database operations

---

## 📦 Tech Stack

- **Backend Framework**: NestJS
- **Language**: TypeScript
- **Database ORM**: Prisma
- **Database**: PostgreSQL (or compatible via Prisma)
- **Email Provider**: SendGrid (via Twilio)
- **Cloud Messaging**: Twilio (SMS, WhatsApp, Calls)

---

## 🛠️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/YashPatrot/communication-integrations.git
cd communication-integrations
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment variables

Create a `.env` file using `.env.example` as a reference:

```dotenv
### DATABASE
DATABASE_URL='DATABASE_URL'

### TWILIO_LIVE_ACCOUNT_ACCESS_CREDETIALS
TWILIO_ACCOUNT_SID='TWILIO_ACCOUNT_SID'
TWILIO_AUTH_TOKEN='TWILIO_AUTH_TOKEN'

### TWILIO_PHONE_NUMBER
TWILIO_SENDGRID_API_KEY_NAME='TWILIO_SENDGRID_API_KEY_NAME'
TWILIO_SENDGRID_API_KEY_VALUE='TWILIO_SENDGRID_API_KEY_VALUE'

### TWILIO_TEST_ACCOUNT_ACCESS_CREDENTIALS
TWILIO_TEST_ACCOUNT_SID='TWILIO_TEST_ACCOUNT_SID'
TWILIO_TEST_AUTH_TOKEN='TWILIO_TEST_AUTH_TOKEN'

### TWILIO EMAIL
TWILIO_SENDGRID_API_KEY='TWILIO_SENDGRID_API_KEY'
TWILIO_SENDER_EMAIL='TWILIO_SENDER_EMAIL'
TWILIO_REPLY_TO_EMAIL='TWILIO_REPLY_TO_EMAIL'
```

### 4. Generate Prisma client
```bash
npx prisma generate
```

### 5. Run DB migrations
```bash
npx prisma migrate dev
```

### 6. Start the application
```bash
npm run start:dev
```

---

## 🧭 Project Structure

```
src/
├── app.module.ts        # Main module
├── main.ts              # Entry point
├── prisma/              # Prisma client and service
├── common/              # Shared constants and utilities
├── twilio/              # Core Twilio wrapper
├── twilio-sms/          # SMS handling
├── twilio-wsms/         # WhatsApp messaging
├── twilio-call/         # Voice call handling
├── twilio-email/        # SendGrid email service
prisma/
├── schema.prisma        # Data models
└── migrations/          # Migration history
.env.example             # Environment config sample
```

---

## 📡 API Endpoints

All endpoints accept JSON payloads via `POST`.

| Endpoint            | Description                 |
|---------------------|-----------------------------|
| `/twilio-sms`       | Send SMS via Twilio         |
| `/twilio-wsms`      | Send WhatsApp message       |
| `/twilio-call`      | Make a phone call           |
| `/twilio-email`     | Send email via SendGrid     |

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e
```

---

## 🤝 Contributing

We welcome contributions!

1. Fork this repo
2. Create a branch: `git checkout -b feature/awesome-feature`
3. Commit your work: `git commit -m 'Add some awesome feature'`
4. Push to your fork: `git push origin feature/awesome-feature`
5. Open a Pull Request 🚀

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🙏 Acknowledgements

- [NestJS](https://nestjs.com/)
- [Twilio](https://www.twilio.com/)
- [SendGrid](https://sendgrid.com/)
- [Prisma](https://www.prisma.io/)

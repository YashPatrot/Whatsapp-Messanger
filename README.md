![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/YashPatrot/communication-integrations?utm_source=oss&utm_medium=github&utm_campaign=YashPatrot%2Fcommunication-integrations&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)
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
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dbname?schema=public"

# Twilio credentials
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number

# SendGrid credentials
TWILIO_SENDGRID_API_KEY=your_sendgrid_api_key
TWILIO_SENDER_EMAIL=your_sender_email
TWILIO_REPLY_TO_EMAIL=your_reply_to_email

# Server
PORT=3000
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

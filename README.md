# Doctor Portal API

A Node.js + Express backend service for managing doctor appointments, consultations, laboratory requests, and patient-related medical information. This service acts as a gateway between the Doctor Portal frontend and multiple external systems such as authentication, appointment adapters, laboratory systems, and notification services.

---

# Features

* Fetch doctor appointments
* Filter daily and weekly appointments
* Accept and complete appointments
* Retrieve patient appointment information
* Create laboratory requests
* Fetch laboratory results
* Create and update consultation records
* Retrieve patient consultation history
* Send custom notifications
* Centralized error handling
* Token verification with external authentication service

---

# Tech Stack

* Node.js
* Express.js
* Axios
* dotenv
* CORS

---

# Project Structure

```bash
project-root/
│
├── controllers/
│   ├── appointmentController.js
│   ├── consultationController.js
│   └── labController.js
│
├── middleware/
│   └── errorHandler.js
│
├── routers/
│   ├── appointmentRoutes.js
│   ├── consultationRoutes.js
│   └── labRoutes.js
│
├── services/
│   ├── appointmentService.js
│   ├── authService.js
│   ├── consultationService.js
│   ├── labService.js
│   └── notificationService.js
│
├── .env
├── server.js
└── package.json
```

---

# Installation

## 1. Clone the Repository

```bash
git clone <repository-url>
cd doctor-portal-api
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5001

LEGACY_SYSTEM=http://localhost:4000
ADAPTER_LAYER_URL=http://localhost:5000
AUTH_SYSTEM_URL=http://localhost:3000
NOTIFICATION_SYSTEM=http://localhost:6000
```

---

# Running the Server

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# API Routes

## Appointment Routes

Base URL:

```bash
/api/appointments
```

### Fetch All Appointments

```http
GET /
```

### Fetch Daily Appointments

```http
GET /daily
```

### Fetch Weekly Appointments

```http
GET /weekly
```

### Accept Appointment

```http
PUT /:id/accept
```

### Complete Appointment

```http
PUT /:id/complete
```

### Fetch Patient Information Per Appointment

```http
GET /patient/:patientId
```

---

## Laboratory Routes

Base URL:

```bash
/api/labs
```

### Create Laboratory Request

```http
POST /
```

### Fetch Laboratory Results

```http
GET /:patientId
```

---

## Consultation Routes

Base URL:

```bash
/api/consultations
```

### Fetch Consultation History

```http
GET /history/:patientId
```

### Create Consultation

```http
POST /create
```

### Update Consultation

```http
PUT /:id
```

---

# Authentication

The API uses token-based authentication.

Example request header:

```http
Authorization: Bearer <token>
```

The token is validated through the external authentication service:

```bash
AUTH_SYSTEM_URL/me
```

---

# External Services Used

| Service             | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| LEGACY_SYSTEM       | Legacy appointment retrieval                             |
| ADAPTER_LAYER_URL   | Main adapter layer for appointments, labs, consultations |
| AUTH_SYSTEM_URL     | User authentication and token verification               |
| NOTIFICATION_SYSTEM | Sending notifications                                    |

---

# Error Handling

Centralized error handling middleware is implemented in:

```bash
middleware/errorHandler.js
```

Example error response:

```json
{
  "message": "Server Error"
}
```

---

# Example Server Startup

```bash
Doctor Portal running on port 5001
```

---

# Sample Request

## Accept Appointment

```http
PUT /api/appointments/123/accept
```

Headers:

```http
Authorization: Bearer your_token_here
```

---

# Dependencies

Example packages used:

```json
{
  "axios": "^1.x",
  "cors": "^2.x",
  "dotenv": "^16.x",
  "express": "^4.x"
}
```

---

# Future Improvements

* Add request validation
* Add Swagger/OpenAPI documentation
* Implement role-based authorization
* Add unit and integration tests
* Improve logging and monitoring
* Add Docker support
* Add rate limiting and security middleware

---

# Author

Doctor Portal Backend Team

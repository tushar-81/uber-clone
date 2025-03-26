# Uber Clone Backend API Documentation

This document provides an overview of the available API endpoints in the Uber Clone backend, along with example requests and responses.

---

## Base URL
```
http://localhost:<PORT>
```

---

## Endpoints

### 1. **User Registration**
**POST** `/users/register`

#### Request Body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response:
**Status Code:** `201 Created`
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "64f1b2c3d4e5f6a7b8c9d0e1",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### 2. **User Login**
**POST** `/users/login`

#### Request Body:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response:
**Status Code:** `200 OK`
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "64f1b2c3d4e5f6a7b8c9d0e1",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**Error Example:**
**Status Code:** `401 Unauthorized`
```json
{
  "message": "Invalid email or password"
}
```

---

### 3. **Get User Profile**
**GET** `/users/profile`

#### Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

#### Response:
**Status Code:** `200 OK`
```json
{
  "_id": "64f1b2c3d4e5f6a7b8c9d0e1",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

**Error Example:**
**Status Code:** `401 Unauthorized`
```json
{
  "message": "Unauthorized"
}
```

---

### 4. **User Logout**
**POST** `/users/logout`

#### Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

#### Response:
**Status Code:** `200 OK`
```json
{
  "message": "Logged out successfully"
}
```

---

### 5. **Register Captain**
**POST** `/captains/register`

#### Request Body:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Response:
**Status Code:** `201 Created`
```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "_id": "64f1b2c3d4e5f6a7b8c9d0e2",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Error Example:**
**Status Code:** `400 Bad Request`
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

### 6. **Captain Login**
**POST** `/captains/login`

#### Request Body:
```json
{
  "email": "jane.doe@example.com",
  "password": "securepassword"
}
```

#### Response:
**Status Code:** `200 OK`
```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "_id": "64f1b2c3d4e5f6a7b8c9d0e2",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com"
    // ...other fields...
  }
}
```

**Error Example:**
**Status Code:** `401 Unauthorized`
```json
{
  "message": "Invalid email or password"
}
```

### 7. **Get Captain Profile**
**GET** `/captains/profile`

#### Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

#### Response:
**Status Code:** `200 OK`
```json
{
  "_id": "64f1b2c3d4e5f6a7b8c9d0e2",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com"
  // ...other fields...
}
```

**Error Example:**
**Status Code:** `401 Unauthorized`
```json
{
  "message": "Unauthorized"
}
```

### 8. **Captain Logout**
**POST** `/captains/logout`

#### Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

#### Response:
**Status Code:** `200 OK`
```json
{
  "message": "Logged out successfully"
}
```

---

## Notes
- All endpoints requiring authentication use JWT tokens.
- Tokens are passed via the `Authorization` header or cookies.
- Passwords are securely hashed before being stored in the database.
- Blacklisted tokens are stored in the database and expire after 24 hours.

---

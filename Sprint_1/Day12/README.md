# Salesforce External Recruitment Integration

## 📌 Project Overview

This project integrates a **Salesforce Placement Management System** with an external recruitment platform using **REST API, Apex Callouts, Queueable Apex, and Named Credentials**.

When a student's application is marked as **Selected**, Salesforce asynchronously sends the candidate information to the external recruitment system.

### Main Flow

```text
Application Selected
        ↓
      Trigger
        ↓
   Service Layer
        ↓
 Queueable Apex
        ↓
 Named Credential
        ↓
    REST API
        ↓
External Recruitment System
```

---

## 🎯 Business Problem

The Placement Management System stores student and application information in Salesforce, while some recruiting companies use separate recruitment platforms.

The goal of this project is to automatically synchronize selected candidate information between Salesforce and the external system.

This reduces manual data entry and improves communication between the two systems.

The Sprint 11 specification defines the integration around sending selected candidates through a Queueable job to an external API.

---

## 🛠️ Technologies Used

* Salesforce
* Apex
* Apex Triggers
* Queueable Apex
* REST API
* HTTP Callouts
* JSON
* Named Credentials
* Auth Providers
* Salesforce CLI
* VS Code
* Git & GitHub

---

## 🏗️ Architecture

```text
┌──────────────────────┐
│ Salesforce           │
│                      │
│ Application Record   │
└──────────┬───────────┘
           │
           ▼
      ┌─────────┐
      │ Trigger │
      └────┬────┘
           │
           ▼
    ┌─────────────┐
    │   Service   │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  Queueable  │
    └──────┬──────┘
           │
           ▼
   ┌─────────────────┐
   │ Named Credential│
   └────────┬────────┘
            │
            ▼
      ┌───────────┐
      │ REST API  │
      └─────┬─────┘
            │
            ▼
   External Recruitment
        System
```

---

## 🔄 Data Flow

When an application becomes **Selected**:

1. The Salesforce Trigger detects the status change.
2. The Service Layer handles the business logic.
3. A Queueable Apex job is created.
4. The Queueable job builds an HTTP request.
5. The request uses a Named Credential.
6. Salesforce sends the request to the external REST API.
7. The response is received and processed.
8. Integration status is updated based on the response.

---

## 📤 Candidate Information

The integration can send information such as:

| Field          | Description               |
| -------------- | ------------------------- |
| Student Id     | Unique student identifier |
| Name           | Student name              |
| Email          | Student email             |
| Branch         | Student branch            |
| CGPA           | Student CGPA              |
| Job Id         | Job identifier            |
| Company        | Recruiting company        |
| Role           | Selected job role         |
| Selection Date | Selection date            |

These fields are based on the candidate data specified in the Sprint 11 integration requirement.

---

## 🌐 REST API

The external recruitment system provides a REST endpoint for receiving candidate information.

### Example

```text
POST /candidates
```

### Sample JSON

```json
{
    "studentId": "STU10045",
    "name": "rama",
    "email": "rama@example.com",
    "branch": "IT",
    "cgpa": 8.9,
    "jobId": "JOB1007",
    "company": "KSquare",
    "role": "Salesforce Developer"
}
```

---

## ⚡ Queueable Apex

Queueable Apex is used to perform the external API call asynchronously.

```text
Application Selected
        ↓
     Queueable
        ↓
   HTTP Callout
        ↓
   External API
```

### Why Queueable Apex?

* Performs integration work asynchronously
* Keeps the main Salesforce transaction focused
* Prevents the user from waiting for the external system
* Provides a clean separation between business logic and integration logic

The Sprint 11 material specifically connects Queueable Apex with background callout processing.

---

## 🔐 Named Credential

The project uses **Named Credentials** to manage the external API endpoint and authentication configuration.

Instead of storing credentials directly in Apex, the code references the Named Credential.

```apex
request.setEndpoint(
    'callout:Recruitment_API/candidates'
);
```


## 📡 HTTP Callout

Apex uses `HttpRequest`, `Http`, and `HttpResponse` to communicate with the external API.

```apex
HttpRequest request = new HttpRequest();

request.setEndpoint(
    'callout:Recruitment_API/candidates'
);

request.setMethod('POST');

request.setHeader(
    'Content-Type',
    'application/json'
);

request.setBody(
    JSON.serialize(candidate)
);

Http http = new Http();

HttpResponse response = http.send(request);
```

---

## 📊 Response Handling

The integration handles different HTTP responses.

| Status | Meaning                |
| ------ | ---------------------- |
| 200    | Successful request     |
| 201    | Resource created       |
| 400    | Bad request            |
| 401    | Authentication failure |
| 403    | Forbidden              |
| 500    | Server error           |

The project requirements specifically call for handling successful responses and common error responses such as `400`, `401`, `403`, and `500`.

---

## 🔄 Integration Status

Integration status can be maintained to track synchronization.

Example:

```text
Pending
   ↓
Processing
   ↓
Sent
```

If the callout fails:

```text
Processing
    ↓
 Failed
    ↓
Retry Required
```

Useful fields include:

```text
Integration Status
External Candidate Id
Last Integration Attempt
Integration Error
```

This allows administrators to identify successful and failed integrations.

---

## 🔁 Retry & Idempotency

External APIs can temporarily fail because of server errors or availability issues.

Therefore, the project considers retry processing.

However, retrying the same request can create duplicate candidates.

To prevent this, the integration can use a unique identifier such as:

* Application Id
* External Candidate Id
* Idempotency Key
* External Reference

The Sprint 11 material highlights idempotency as an important consideration when retrying integrations.

---

## 🔒 Authentication vs Authorization

### Authentication

Determines:

> Who are you?

### Authorization

Determines:

> What are you allowed to do?

The project uses Salesforce authentication configuration and Named Credentials for secure external communication.

---

## 🔗 Integration Pattern

This project follows a **Point-to-Point Integration** approach:

```text
Salesforce
    ↕
External Recruitment System
```

This is suitable for a relatively simple integration with one external recruitment platform.

For larger environments with multiple external systems, middleware can be used for routing, transformation, monitoring, and retry handling.

---




## 🎓 Key Concepts Learned

Through this project, the following Salesforce integration concepts were implemented or studied:

* REST APIs
* HTTP Methods
* JSON
* Apex Callouts
* Queueable Apex
* Named Credentials
* Authentication
* Authorization
* Error Handling
* Retry Strategy
* Idempotency
* Integration Status
* Point-to-Point Integration

## 🏁 Final Output

The completed project provides a Salesforce-to-external-system integration:

```text
Student Application
        ↓
Status = Selected
        ↓
      Trigger
        ↓
      Service
        ↓
     Queueable
        ↓
Named Credential
        ↓
    REST API
        ↓
External Recruitment System
        ↓
Response Processing
        ↓
Integration Status
```


## ⭐ Project Highlights

* Built Salesforce external system integration
* Implemented REST API communication
* Used Queueable Apex for asynchronous processing
* Used Named Credentials for secure authentication
* Implemented HTTP response handling
* Designed integration status tracking
* Considered retry and idempotency
* Followed Salesforce integration architecture principles

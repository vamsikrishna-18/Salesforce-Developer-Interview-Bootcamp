# Placement Management System – Business Transaction Service

## Project Overview

This project demonstrates how Salesforce Apex combines SOQL and DML to implement a complete business transaction for a Placement Management System.

The application retrieves business information, validates rules, prevents duplicate applications, creates new records, and updates application status.

---

# Technologies Used

- Salesforce CRM
- Apex
- SOQL
- DML
- Developer Console

---

# Custom Objects

## Student

Stores student information.

Fields:

- Student Name
- CGPA
- Branch
- Backlogs
- Email

---

## Job

Stores placement opportunities.

Fields:

- Job Title
- Minimum CGPA
- Eligible Branch
- Maximum Backlogs
- Application Deadline

---

## Application

Stores job applications submitted by students.

Fields:

- Student (Lookup)
- Job (Lookup)
- Status
- Interview Date

---

# Apex Class

PlacementApplicationService

Methods:

- getStudent()
- getJob()
- checkDuplicate()
- validateEligibility()
- createApplication()
- updateApplicationStatus()
- submitApplication()

---

# Business Flow

```
Student clicks Apply
        │
        ▼
Retrieve Student
        │
        ▼
Retrieve Job
        │
        ▼
Check Duplicate
        │
        ▼
Validate Eligibility
        │
        ▼
Create Application
        │
        ▼
Return Success Message
```

---

# Engineering Principles

- Query only required fields.
- Validate before inserting data.
- Keep methods focused on a single responsibility.
- Build reusable service methods.
- Separate retrieval, validation, and DML operations.

---

# Learning Outcomes

After completing this sprint, I learned:

- Writing efficient SOQL queries.
- Performing DML operations responsibly.
- Building complete enterprise business transactions.
- Structuring Apex services using clean architecture.
- Understanding the relationship between business requirements and software implementation.

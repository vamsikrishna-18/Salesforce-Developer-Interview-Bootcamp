# Sprint 5 – Retrieving and Managing Information with SOQL & DML

## Overview

This project implements the Sprint 5 Engineering tasks of the Placement Management System using Salesforce Apex, SOQL, and DML.

The objective of this sprint is to retrieve business information using SOQL, perform business validations, create and update records using DML, and build a complete business transaction for student job applications.

---

# Learning Objectives

- Understand the importance of retrieving business information before making decisions.
- Retrieve Salesforce records using SOQL.
- Perform business validations using Apex.
- Create records using DML (Insert).
- Update existing records using DML (Update).
- Build complete business transactions.
- Write clean, readable and reusable Apex code.

---

# Technologies Used

- Salesforce Apex
- SOQL
- DML
- Salesforce Developer Console
- Execute Anonymous Window
- Query Editor

---

# Custom Objects

## Student__c

Fields Used

- Name
- Branch__c
- Mobile__c
- Student_Email__c
- Cgpa__c
- Status__c

---

## Job__c

Fields Used

- Name
- Company_Name__c
- Min_cgpa__c
- Salary__c
- Location__c
- Closing_Date__c
- Status__c

---

## Application__c

Fields Used

- Student__c
- Job__c
- Applied_Under_Review_Selected_Rejected__c  //status
- Application_Dates__c
- Remarks__c

---

# User Stories Implemented

## US-7

### Retrieve Student Information

Business Requirement

Retrieve the student record before processing an application.

Implementation

- Retrieve Student record using SOQL.
- Fetch only required fields.
- Display student details.

---

## US-8

### Retrieve Job Information

Business Requirement

Retrieve Job eligibility information.

Implementation

- Retrieve Job record using SOQL.
- Fetch eligibility fields.
- Display job details.

---

## US-9

### Prevent Duplicate Applications

Business Requirement

A student should not apply twice for the same job.

Implementation

- Query Application__c.
- Check Student and Job combination.
- Stop processing if duplicate exists.

Possible Outputs

First Application

```
No Duplicate Application Found.
```

Duplicate Application

```
Duplicate Application Found.
Application Already Exists.
```

---

## US-10

### Create Application

Business Requirement

Create a new application after successful validation.

Implementation

- Create Application__c record.
- Populate required fields.
- Insert using DML.
- Display confirmation.

Sample Output

```
Application Submitted Successfully.
Application Id : a07XXXXXXXXXXXX
```

---

## US-11

### Update Application Status

Business Requirement

Recruiters can update application status.

Implementation

- Retrieve Application record.
- Update Status field.
- Save using DML Update.
- Display confirmation.

Sample Output

```
Old Status : Applied

New Status : Under Review

Application Status Updated Successfully.
```

---

## US-12

### Complete Business Transaction

Business Flow

```
Receive Request

↓

Retrieve Student

↓

Retrieve Job

↓

Check Duplicate

↓

Validate Eligibility

↓

Create Application

↓

Save Record

↓

Display Confirmation
```

Sample Output

```
===== BUSINESS TRANSACTION STARTED =====

No Duplicate Application Found.

Proceed to Create Application.

Application Submitted Successfully.

Application Id : a07XXXXXXXXXXXX

===== BUSINESS TRANSACTION COMPLETED =====
```

---

# SOQL Queries Used

Retrieve Student IDs

```sql
SELECT Id
FROM Student__c
```

Retrieve Job IDs

```sql
SELECT Id
FROM Job__c
```

Retrieve Applications

```sql
SELECT Id,
       Student__r.Name,
       Job__r.Name,
       Applied_Under_Review_Selected_Rejected__c
FROM Application__c
```

Duplicate Check

```sql
SELECT Id
FROM Application__c
WHERE Student__c = :studentId
AND Job__c = :jobId
```

---

# DML Operations Used

Insert

```apex
insert application;
```

Update

```apex
update application;
```

---

# Business Rules Implemented

- Retrieve Student before validation.
- Retrieve Job before validation.
- Prevent duplicate applications.
- Create application only after validation.
- Update existing application status.
- Return meaningful success messages.
- Follow complete business transaction flow.

---

# Key Concepts Learned

- SOQL
- DML
- Apex Classes
- Apex Methods
- Business Validation
- Enterprise Business Transactions
- Data Retrieval
- Data Manipulation
- Exception Handling
- Code Reusability

---


---

# Sprint Outcome

Successfully implemented:

- Retrieve Student Information
- Retrieve Job Information
- Duplicate Application Validation
- Create Application using DML
- Update Application Status
- Complete Business Transaction

---

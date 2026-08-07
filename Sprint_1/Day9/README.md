# Sprint 8 – Asynchronous Apex (Placement Management System)

## Overview

This sprint focused on implementing Salesforce Asynchronous Apex concepts using the Placement Management System. The objective was to improve application performance by moving long-running operations to the background while keeping the user experience responsive.

---

# Custom Objects Used

- Application__c
- Offer__c
- job_detail__c
- student_detail__c

---

# Tasks Completed

## Task 1 – Future Method

### Objective
Process background updates without delaying the user's request.

### Class Created
- ApplicationFutureService

### Features
- Uses `@future`
- Updates Application records asynchronously
- Demonstrates background processing

---

## Task 2 – Queueable Apex

### Objective
Handle structured asynchronous processing.

### Class Created
- OfferPostProcessingJob

### Features
- Implements `Queueable`
- Updates Offer records
- Supports complex business logic
- Can be chained with another Queueable job

---

## Task 3 – Queueable Chaining

### Objective
Execute multiple asynchronous jobs in sequence.

### Classes Created

- OfferPostProcessingJob
- OfferNotificationJob

### Workflow

Offer Accepted
↓
OfferPostProcessingJob
↓
OfferNotificationJob

### Features

- Demonstrates Queueable chaining
- Separates responsibilities
- Improves maintainability

---

## Task 4 – Batch Apex

### Objective

Process large numbers of Application records efficiently.

### Class Created

- ApplicationBatchJob

### Methods Implemented

- start()
- execute()
- finish()

### Features

- Implements Database.Batchable<SObject>
- Processes Application__c records in batches
- Uses configurable batch size
- Displays processing information using Debug Logs

---

## Task 5 – Scheduled Apex

### Objective

Automatically execute Batch Apex on a schedule.

### Class Created

- ApplicationBatchScheduler

### Features

- Implements Schedulable
- Starts ApplicationBatchJob
- Can be scheduled using CRON expressions

---

# Additional Engineering Tasks

## Task 6 – Batch Size Engineering (8.16)

### Objective

Understand how batch size affects performance.

### Activities

Executed Batch Apex using different batch sizes.

```apex
Database.executeBatch(new ApplicationBatchJob(),1);

Database.executeBatch(new ApplicationBatchJob(),5);

Database.executeBatch(new ApplicationBatchJob(),10);

Database.executeBatch(new ApplicationBatchJob(),200);
```

### Learning

- Smaller scope reduces CPU usage
- Larger scope improves throughput
- Batch size depends on business logic complexity

---

## Task 7 – Expired Job Processing (8.17)

### Objective

Automatically close open Job records.

### Class Created

- ExpiredJobBatch

### Features

- Processes job_detail__c records
- Updates Status__c from Open to Closed
- Uses Batch Apex

---

## Task 8 – Scheduled + Batch (8.18)

### Objective

Schedule automatic execution of ExpiredJobBatch.

### Class Created

- ExpiredJobScheduler

### Workflow

Scheduled Apex
↓
ExpiredJobBatch
↓
Update Job Status

### Features

- Uses CRON scheduling
- Automatically starts Batch Apex

---

## Task 9 – Async Job Monitoring (8.19)

### Objective

Monitor background Apex jobs.

### Class Created

- AsyncJobMonitor

### Features

Queries AsyncApexJob to display:

- Job Type
- Status
- Number of Errors
- Records Processed
- Total Records
- Created Date

---

## Task 10 – Partial Success Handling (8.20)

### Objective

Handle DML operations where some records succeed while others fail.

### Class Created

- PartialUpdateDemo

### Features

Uses

```apex
Database.update(records, false);
```

to allow:

- Successful records to update
- Failed records to report errors
- Prevent complete transaction rollback

---

# Concepts Learned

- Future Methods
- Queueable Apex
- Queueable Chaining
- Batch Apex
- Scheduled Apex
- Batch Scope Size
- Scheduled + Batch Architecture
- Async Job Monitoring
- Partial Success Processing
- Governor Limits Awareness
- Separation of Responsibilities

---

# Architecture

Student Action
↓
Synchronous Service
↓
Queueable Apex
↓
Queueable Chaining
↓
Scheduled Apex
↓
Batch Apex
↓
Service Layer
↓
Database

---

# Tools Used

- Salesforce Developer Console
- Apex
- SOQL
- Batch Apex
- Queueable Apex
- Future Methods
- Scheduled Apex
- AsyncApexJob

---

# Outcome

Successfully implemented Salesforce Asynchronous Apex concepts within the Placement Management System. The project demonstrates scalable background processing, scheduled automation, batch processing, asynchronous monitoring, and enterprise-level architecture practices using custom Salesforce objects.

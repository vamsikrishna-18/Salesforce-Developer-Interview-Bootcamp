# 🚀 Sprint 9 – Building Interactive Lightning Web Components

## 📌 Overview

This project is part of **Sprint 9 – Engineering Sprint**, focused on building interactive and maintainable **Lightning Web Components (LWC)** for a Salesforce-based **Student Placement Portal**.

The main objective of this sprint is to transform the existing **Eligible Jobs** component into an interactive experience where students can view opportunities, apply for jobs, receive feedback, and see updated application status.

The sprint connects the complete flow:

```text
Student
   ↓
Lightning Web Component
   ↓
Apex Controller
   ↓
Application Service
   ↓
Business Rules
   ↓
Salesforce Database
   ↓
UI Refresh
```

The PDF emphasizes that the UI should request business operations while the business layer remains responsible for making business decisions.

---

## 🎯 Objectives

The major objectives of this sprint are:

* Build the **Apply Job** workflow.
* Handle user events in LWC.
* Pass Job Id from HTML to JavaScript.
* Use **imperative Apex** for user-initiated actions.
* Reuse the existing Application Service.
* Handle success and failure scenarios.
* Prevent accidental duplicate applications.
* Provide loading and processing feedback.
* Refresh the UI after data changes.
* Create reusable parent and child components.
* Implement component communication using properties and custom events.

---

## ⚡ Apply Job Workflow

When a student clicks the **Apply** button, the request passes through multiple application layers:

```text
Click Apply
    ↓
LWC Event
    ↓
JavaScript Handler
    ↓
Imperative Apex
    ↓
Application Service
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
Automation
    ↓
Return Result
    ↓
Update UI
```

This demonstrates how a simple UI action can interact with the complete Salesforce architecture.

---

## 🔄 Imperative Apex

The Apply operation is initiated by an explicit user action, so **imperative Apex** is used.

Example:

```javascript
async handleApply(event) {
    const jobId = event.target.dataset.jobId;

    try {
        const applicationId = await submitApplication({
            jobId: jobId
        });

        // Handle success
    } catch (error) {
        // Handle failure
    }
}
```

The important flow is:

```text
JavaScript
    ↓
Apex Controller
    ↓
Application Service
    ↓
Business Rules
```

The LWC should not contain critical eligibility or business rules.

---

## 🖥️ LWC Component Architecture

As the Eligible Jobs component grows, responsibilities can be divided into smaller components.

```text
eligibleJobs
     ↓
  jobList
     ↓
  jobCard
     ↓
 jobDetails
```

### Parent Component – `eligibleJobs`

Responsible for:

* Retrieving jobs
* Maintaining overall state
* Coordinating application actions
* Refreshing displayed data

### Child Component – `jobCard`

Responsible for:

* Displaying job information
* Showing the Apply button
* Capturing user interaction
* Sending events to the parent

The goal is to divide interfaces based on **responsibilities**, rather than simply splitting large files.

---

## 🔗 Component Communication

### Parent → Child

The parent passes information to the child using `@api`.

```javascript
@api job;
```

```text
Parent
  ↓
Job Information
  ↓
Child
```

### Child → Parent

The child communicates with the parent using a **Custom Event**.

```javascript
const event = new CustomEvent('apply', {
    detail: {
        jobId: this.job.Id
    }
});

this.dispatchEvent(event);
```

This keeps the components loosely coupled and allows the parent to decide how to respond to the event.

---

## 🔐 Duplicate Application Prevention

The system considers accidental repeated clicks such as:

```text
APPLY
APPLY
APPLY
```

The backend should protect data integrity by validating duplicate applications.

At the same time, the frontend should prevent unnecessary repeated requests by changing the UI while processing:

```text
Before:

[ APPLY ]

After:

[ PROCESSING... ]
```

This provides both **backend data protection** and a better **user experience**.

---

## 🎨 Application States

The Apply workflow supports four important UI states:

### 1. Ready

```text
[ APPLY ]
```

### 2. Processing

```text
[ PROCESSING... ]
```

### 3. Success

```text
✓ APPLICATION SUBMITTED
```

### 4. Failure

```text
Application could not be submitted.
<Useful explanation>
```

These states help the student understand what is happening during the application process.

---

## ❌ Error Handling

Technical errors should not be directly displayed to the student.

Instead of showing technical exceptions, the application should provide meaningful messages such as:

* Applications for this job are now closed.
* You have already applied for this opportunity.
* We could not submit your application. Please try again or contact the Placement Office.

This separates **technical debugging information** from **user-facing business communication**.

---

## 🔄 UI Refresh

After a successful application, the database changes but the displayed UI may still contain old information.

Therefore, after a mutation, the application should consider:

* Which displayed data became stale?
* Which component owns the data?
* Which data needs to be refreshed?
* Which dependent component needs to know about the change?

The sprint highlights the principle:

> **After Mutation, Ask What Became Stale**

---

## 🐞 Debugging Approach

If clicking **Apply** does not produce any visible result, the issue should be investigated systematically.

```text
1. Did the click event occur?
        ↓
2. Did the handler execute?
        ↓
3. Was the correct Job Id received?
        ↓
4. Was Apex called?
        ↓
5. Did Apex return success or failure?
        ↓
6. Did the component state change?
        ↓
7. Did the template reflect the state?
```

This approach helps identify exactly where the request is failing instead of randomly modifying code.

---

## 🏗️ Complete System Architecture

The complete placement application can be represented as:

```text
Student
   ↓
Lightning Web Component
   ↓
Apex Controller
   ↓
Application Service
   ↓
SOQL / DML
   ↓
Salesforce Database
   ↓
Trigger
   ↓
Trigger Handler
   ↓
Business Services
   ↓
Queueable / Other Async Work
```

This architecture keeps different responsibilities separated and makes the system easier to maintain and extend.

---

## 🛠️ Technologies Used

* **Salesforce Platform**
* **Lightning Web Components (LWC)**
* **Apex**
* **SOQL**
* **DML**
* **Lightning Data Service**
* **Wire Service**
* **Imperative Apex**
* **Custom Events**
* **Salesforce CLI**
* **VS Code**
* **Git & GitHub**



## 📚 Key Learning Outcomes

By completing this sprint, I learned:

* How to design LWC around user capabilities.
* How to handle user events.
* How to use imperative Apex.
* How to keep business rules outside the UI.
* How to handle loading, success, empty and error states.
* How to prevent repeated submissions.
* How to design parent-child component relationships.
* How to pass data from parent to child.
* How to communicate from child to parent using custom events.
* How to identify stale UI data after database mutations.
* How to trace a complete request from the browser to the Salesforce database and back.

---

## 🎓 Student Placement Portal – Final User Journey

```text
Open Placement Portal
        ↓
View Eligible Jobs
        ↓
Select Opportunity
        ↓
View Details
        ↓
Click Apply
        ↓
Processing State
        ↓
Backend Validation
        ↓
Application Saved
        ↓
Automation
        ↓
UI Refresh
        ↓
Student Confirmation
```

The result is a complete student-facing placement workflow rather than a component that only displays job opportunities.

---

## 👨‍💻 Author

**Nalluri Vamsi Krishna**

B.Tech – Information Technology

**Salesforce Developer | Apex | LWC | Java | SQL**

---

## ⭐ Sprint Outcome

Sprint 9 helped transform the Placement Management System into a more interactive and user-focused application. The major focus was not only writing LWC code, but also understanding **component architecture, business-layer separation, user experience, error handling, and end-to-end data flow**.

The sprint establishes the foundation for future LWC development involving component communication, forms, Lightning Data Service, reactive data, and reusable UI architecture.

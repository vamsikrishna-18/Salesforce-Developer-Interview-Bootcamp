# 🚀 Salesforce Developer Interview Bootcamp – Day 2



## 📅 Day
**Day 2 – Apex, Governor Limits, Asynchronous Apex & LWC Communication**

---

# 📖 Overview

Day 2 focused on learning Salesforce Apex best practices, understanding Governor Limits and Bulkification, implementing Asynchronous Apex (Future, Queueable, and Batch Apex), and building Lightning Web Components (LWC) with Parent-to-Child and Child-to-Parent communication.

---



## 🔹 Task 1 – Apex Trigger & Trigger Handler

### Objective
Implement the Trigger Handler Pattern.

### Completed
- Created an Apex Trigger on `Vehicle__c`.
- Implemented a Trigger Handler class.
- Tested trigger execution.
- Verified execution using Debug Logs.

---

## 🔹 Task 2 – Governor Limits & Bulkification

### Bad Trigger
- Wrote a trigger with SOQL inside a `for` loop.
- Inserted 200+ records.
- Observed the Governor Limit exception:
  - **System.LimitException: Too many SOQL queries: 101**

### Bulkified Trigger
- Moved SOQL outside the loop.
- Used collections for efficient processing.
- Successfully processed 200+ records without Governor Limit errors.

---

## 🔹 Task 3 – Asynchronous Apex

### Future Apex
- Created a Future Method using `@future`.
- Executed the method through Execute Anonymous.
- Verified execution using Apex Jobs.

### Queueable Apex
- Created a Queueable Apex class.
- Executed using `System.enqueueJob()`.
- Verified completion through Apex Jobs.

### Batch Apex
- Created `VehicleBatchHandler`.
- Implemented `start()`, `execute()`, and `finish()` methods.
- Executed Batch Apex successfully.
- Verified execution through Apex Jobs.

---

## 🔹 Task 4 – Lightning Web Components (LWC)

### Parent → Child Communication
- Created `vehicleParent` component.
- Created `vehicleChild` component.
- Passed Vehicle Record Id using `@api`.
- Displayed:
  - Customer Name
  - Vehicle Number

### Child → Parent Communication
- Implemented Custom Events.
- Parent successfully received the event.
- Updated the UI with:

```text
Button Clicked Successfully
```

---

# 📂 Source Code

### Apex

- VehicleTrigger
- VehicleTriggerHandler
- VehicleFutureHandler
- VehicleQueueableHandler
- VehicleBatchHandler
- VehicleController

### Lightning Web Components

- vehicleParent
- vehicleChild

---

# 📷 Screenshots

Included screenshots for:

- Trigger Execution
- Governor Limit Exception (Too many SOQL queries: 101)
- Bulkified Trigger Success
- Future Apex Job
- Queueable Apex Job
- Batch Apex Job
- Parent → Child Communication
- Child → Parent Communication
- Lightning App Builder Page

---

# 📚 Learning Notes

During Day 2, I learned:

- Apex Trigger Best Practices
- Trigger Handler Pattern
- Salesforce Governor Limits
- Bulkification Techniques
- Efficient SOQL and DML Usage
- Future Apex
- Queueable Apex
- Batch Apex
- Parent-to-Child Communication using `@api`
- Child-to-Parent Communication using Custom Events
- Lightning App Builder
- LWC Deployment using Salesforce CLI

---

# ⚠️ Challenges Faced

- Understanding Governor Limits and Bulkification.
- Debugging SOQL inside loops.
- Implementing asynchronous Apex.
- Verifying Apex Jobs.
- Passing Record Id from Parent to Child.
- Debugging LWC component communication.
- Deploying Lightning Web Components.

---

# 💡 Reflection

Day 2 provided practical experience in developing scalable Salesforce applications. I gained hands-on knowledge of Governor Limits, Bulkification, asynchronous processing using Future, Queueable, and Batch Apex, and Lightning Web Component communication. These exercises improved my understanding of writing optimized Apex code and building reusable LWC components.

---

# 🛠️ Technologies Used

- Salesforce Platform
- Apex
- SOQL
- Apex Triggers
- Trigger Handler Pattern
- Future Apex
- Queueable Apex
- Batch Apex
- Lightning Web Components (LWC)
- Lightning App Builder
- Salesforce CLI
- Visual Studio Code

---



# 🎯 Outcome

Successfully completed all Day 2 tasks by implementing Apex Trigger best practices, Governor Limits handling through Bulkification, Asynchronous Apex (Future, Queueable, and Batch Apex), and Lightning Web Component communication using Parent-to-Child (`@api`) and Child-to-Parent (Custom Events).

---

## ✅ Status

**Day 2 – Successfully Completed (100%) 🎉**

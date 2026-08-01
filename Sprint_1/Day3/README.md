# Solution Summary

## 1. Which requirements did you solve using Flow?

The following requirements were implemented using **Record-Triggered Flows**:

### Flow 1 – Auto Populate Application Date
- **Type:** Before-Save Record-Triggered Flow
- **Purpose:** Automatically populate the Application Date when a new Application record is created.

### Flow 2 – Send Email Notification
- **Type:** After-Save Record-Triggered Flow
- **Purpose:** Automatically send an email notification to the Placement Officer whenever a student submits a new application.

### Flow 3 – Create Offer Letter
- **Type:** After-Save Record-Triggered Flow
- **Purpose:** Automatically create an Offer Letter record when the Application Status changes to **"Selected"**.

---

## 2. Which requirements required Validation Rules?

The following business requirements were implemented using **Validation Rules**:

### Validation Rule 1 – CGPA Eligibility Check
- Prevent students from applying if their CGPA is less than the Job's Minimum CGPA.

### Validation Rule 2 – Application Date Validation
- Prevent applications from being submitted after the Job Closing Date.

### Validation Rule 3 – Mandatory Fields Validation
- Ensure that mandatory fields such as Student, Job, and Status are not left blank before saving an Application record.

---

## 3. Which requirements still needed Apex?

For this project, **no Apex was required** because all the given requirements were successfully implemented using Salesforce's declarative tools (Flows and Validation Rules).

However, Apex would be required for scenarios involving complex business logic, such as:

- Calculating placement rankings based on multiple criteria.
- Processing large volumes of related records.
- Performing advanced validations involving multiple objects.
- Integrating with external systems using custom logic.
- Implementing business processes that cannot be achieved using Flows.

---

## 4. Why did you choose those solutions?

### Why Flow?
Flows were chosen because they automate business processes without writing code. They are ideal for:
- Automatically updating fields.
- Sending email notifications.
- Creating related records.
- Reducing manual effort.
- Following Salesforce's **"Clicks before Code"** best practice.

### Why Validation Rules?
Validation Rules were used because they validate data **before** a record is saved. They ensure that only valid and complete data is stored in Salesforce by preventing incorrect user input.

### Why Apex was not used?
Apex was not required because the assignment requirements could be fulfilled using Salesforce's declarative automation tools. Choosing Flows and Validation Rules keeps the solution simpler, easier to maintain, and aligns with Salesforce development best practices.

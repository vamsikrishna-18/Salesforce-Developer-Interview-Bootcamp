# Sprint 10 – LWC Component Communication

## Overview

This sprint focused on improving the Eligible Jobs feature of the Student Placement Management System by applying Lightning Web Components communication patterns.

The Eligible Jobs component was refactored into smaller components with clear responsibilities.

## Objectives

- Understand parent-child component architecture
- Implement Parent-to-Child communication
- Implement Child-to-Parent communication
- Use `@api` for passing data to child components
- Use Custom Events for sending user actions from child to parent
- Keep business logic outside the UI
- Build reusable Lightning Web Components

## Components

### Eligible Jobs

The parent component is responsible for:

- Retrieving eligible jobs
- Managing selected job state
- Handling application actions
- Calling Apex methods
- Managing loading, success and error states

### Job Card

The child component is responsible for:

- Displaying one job
- Providing View Details action
- Providing Apply action
- Dispatching custom events to the parent

### Eligible Job Details

The child component is responsible for:

- Receiving the selected job using `@api`
- Displaying detailed job information

## Component Communication

### Parent to Child

The parent passes the selected job to the child:

```text
eligibleJobs
     |
     | job={selectedJob}
     v
eligibleJobDetails
     |
     | @api job
     v
Job Details

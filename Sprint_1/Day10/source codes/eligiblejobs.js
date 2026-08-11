import { LightningElement, track } from 'lwc';

import getEligibleJobs
    from '@salesforce/apex/JobController.getEligibleJobs';

import submitApplication
    from '@salesforce/apex/ApplicationController.submitApplication';

export default class EligibleJobs extends LightningElement {

    @track jobs = [];

    isLoading = false;
    errorMessage = '';

    connectedCallback() {
        this.loadJobs();
    }

    async loadJobs() {
        this.isLoading = true;
        this.errorMessage = '';

        try {
            this.jobs = await getEligibleJobs();
        } catch (error) {
            this.jobs = [];
            this.errorMessage = this.getErrorMessage(error);
        } finally {
            this.isLoading = false;
        }
    }

    async handleApply(event) {

        const jobId = event.detail.jobId;

        this.errorMessage = '';

        try {

            await submitApplication({
                jobId: jobId
            });

            // Refresh the job list after successful application
            await this.loadJobs();

        } catch (error) {

            this.errorMessage = this.getErrorMessage(error);

        }
    }

    get hasJobs() {
        return this.jobs && this.jobs.length > 0;
    }

    get showEmptyState() {
        return !this.isLoading &&
               !this.errorMessage &&
               (!this.jobs || this.jobs.length === 0);
    }

    getErrorMessage(error) {

        if (error?.body?.message) {
            return error.body.message;
        }

        if (error?.message) {
            return error.message;
        }

        return 'Unable to process the request. Please try again.';
    }
}

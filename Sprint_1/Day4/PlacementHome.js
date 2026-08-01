import { LightningElement } from 'lwc';

export default class PlacementHome extends LightningElement {

    // Part 2
    studentName = 'Vamsi';
    rollNumber = '23PA1A12E5';
    department = 'IT';

    // Part 3
    welcomeMessage = '';

    // Part 4
    status = 'Not Applied';

    showMessage() {
        this.welcomeMessage = 'Welcome to Salesforce Development';
    }

    applyNow() {
        this.status = 'Applied';
    }
}

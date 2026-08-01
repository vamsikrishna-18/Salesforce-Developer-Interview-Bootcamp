import { LightningElement, api, wire } from 'lwc';

import getVehicleById from '@salesforce/apex/VehicleController.getVehicleById';

export default class VehicleChild extends LightningElement {

    @api recordId;

    vehicle;

   @wire(getVehicleById, { recordId: '$recordId' })
wiredVehicle({ data, error }) {

    console.log('Record Id =', this.recordId);

    if (data) {

        console.log('Vehicle =', data);
        this.vehicle = data;

    } else if (error) {

        console.error('Error =', JSON.stringify(error));

    }

}
    sendMessage(){

        const event = new CustomEvent('buttonclick');

        this.dispatchEvent(event);

    }

}

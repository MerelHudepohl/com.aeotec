'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DSC19 extends ZwaveDevice {
	
	onMeshInit() {
        this.registerCapability('onoff', 'SWITCH_BINARY');
        this.registerCapability('dim', 'SWITCH_MULTILEVEL');

        this.registerCapability('measure_power', 'METER');
        this.registerCapability('meter_power', 'METER');
		this.registerCapability('measure_voltage', 'METER');
		this.registerCapability('measure_current', 'METER');

        this.registerReportListener('BASIC', 'BASIC_SET', (report) => {
          this.setCapabilityValue('onoff', !!report.Value);
        });
    }

}

module.exports = DSC19;
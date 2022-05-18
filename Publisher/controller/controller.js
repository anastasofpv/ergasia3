'use strict';


const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
      
})


exports.postMQTT = (req,res) => {
    client.publish("ergasia3_up1057600",req.body.message);

    console.log(req.body.message);
    res.send("Data successfully sent");
}
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({region: "eu-central-1"});

function sendMsg() {

// Create an SQS service object
    var sqs = new AWS.SQS({apiVersion: "2012-11-05"});

    var params = {
        // Remove DelaySeconds parameter and value for FIFO queues
        DelaySeconds: 10,
        MessageAttributes: {
            Title: {
                DataType: "String",
                StringValue: "The Whistler",
            },
            Author: {
                DataType: "String",
                StringValue: "John Grisham",
            },
            WeeksOn: {
                DataType: "Number",
                StringValue: "6",
            },
        },
        MessageBody:
            "Information about current NY Times fiction bestseller for week of 12/11/2016.",
        QueueUrl: "http://localhost.localstack.cloud:4566/000000000000/test-local-my-test-queue",
    };

    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });
}

module.exports = sendMsg;

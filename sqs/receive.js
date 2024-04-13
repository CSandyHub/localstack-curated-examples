// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({region: "eu-central-1"});

function receiveMsg() {

// Create an SQS service object
    var sqs = new AWS.SQS({apiVersion: "2012-11-05"});

    var queueURL = "http://localhost.localstack.cloud:4566/000000000000/test-local-my-test-queue";

    var params = {
        AttributeNames: ["SentTimestamp"],
        MaxNumberOfMessages: 10,
        MessageAttributeNames: ["All"],
        QueueUrl: queueURL,
        VisibilityTimeout: 20,
        WaitTimeSeconds: 5,
    };

    sqs.receiveMessage(params, function (err, data) {
        if (err) {
            console.log("Receive Error", err);
        } else if (data.Messages.length > 0) {
            console.log("Message Received", data.Messages[0]);
            var deleteParams = {
                QueueUrl: queueURL,
                ReceiptHandle: data.Messages[0].ReceiptHandle,
            };
            sqs.deleteMessage(deleteParams, function (err, data) {
                if (err) {
                    console.log("Delete Error", err);
                } else {
                    console.log("Message Deleted", data);
                }
            });
        }

    });
}

module.exports = receiveMsg;

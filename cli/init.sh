#!/bin/bash

#S3
awslocal s3api create-bucket --bucket test-bucket --region eu-central-1 \
--create-bucket-configuration LocationConstraint=eu-central-1

#SES
awslocal ses verify-email-identity --region eu-central-1 --email lcm@digital.redbull.com
# Note that we neither need verify the email address nor receive email but you can query the sqs api
# to see the email message

# SQS
awslocal sqs create-queue --region eu-central-1 --queue-name lcm-local-task-queue.fifo --attributes \
 '{"FifoQueue":"true","ContentBasedDeduplication":"true","FifoThroughputLimit":"perQueue","DeduplicationScope":"messageGroup"
 ,"VisibilityTimeout":"30","MessageRetentionPeriod":"345600"}'
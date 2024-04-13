#!/bin/bash


#S3
awslocal s3api create-bucket --bucket test-bucket --region eu-central-1 \
--create-bucket-configuration LocationConstraint=eu-central-1
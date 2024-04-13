#!/bin/bash
#Start localstack
docker run \
  -d --rm -it \
  -p 4566:4566 \
  -p 4510-4559:4510-4559 \
  localstack/localstack

# Terraform plan & apply
terraform init && terraform plan && terraform apply -auto-approve

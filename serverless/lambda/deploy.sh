#!/bin/bash
docker stop $(docker ps -a -q)
docker-compose -f docker-compose.yml up -d
serverless deploy --stage local --region eu-central-1
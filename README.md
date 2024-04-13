# localstack-curated-examples
readme
## Using awslocal

Create an S3 bucket:

```bash
awslocal s3api create-bucket --bucket lcm-bucket --region eu-central-1
```

## Using docker

Run localstack in docker:

```bash
docker run -d --rm -it -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
```

## Service Endpoints for LocalStack

```bash
SES     :       http://ses.localhost.localstack.cloud:4566
S3      :       http://s3.localhost.localstack.cloud:4566
DYNAMOD :       http://localstack:4566
```

## Demo

### Terraform 

```bash
cd terraform
./run.sh
```

### Sqs

```bash
cd sqs
npm install 
npm run start
```


### Demo Serverless lambda function

```bash 

You can create a user by sending a POST request to the `/users` endpoint. Here's an example using `curl`:

```bash
curl --request POST 'http://localhost:4566/restapis/xxxxxxxx/local/_user_request_/users' --header 'Content-Type: application/json' --data-raw '{"name": "John", "userId": "someUserId"}'
```

### Fetching a User

You can fetch a user by sending a GET request to the `/users/{userId}` endpoint. Here's an example using `curl`:

```bash
curl http://localhost:4566/restapis/xxxxxxxx/local/_user_request_/users/someUserId
```

Please replace `xxxxxxxx` with your actual API ID and `someUserId` with the actual user ID.
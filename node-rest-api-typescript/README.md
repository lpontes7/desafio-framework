
# Serverless Nodejs Rest API TypeScript 

This is simple REST API Node for AWS Lambda By Serverless framwork with TypeScript.

## Deploy

### First

* Run ```npm install``` to install all the necessary dependencies.

### To Test It Locally

* Run ```npm run local``` use serverless offline to test locally. 

### To Run Test
* Run ```npm run test``` use mocha to test api. 

### To See coverage
* Run ```npm run coverage``` use to see test coverage. 


### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```

The expected result should be similar to:

```
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Installing dependencies for custom CloudFormation resources...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-rest-api-typescript.zip file to S3 (229.7 kB)...
Serverless: Uploading custom CloudFormation resources...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
................
Serverless: Stack update finished...
Service Information
service: aws-node-rest-api-typescript
stage: dev
region: us-east-1
stack: aws-node-rest-api-typescript-dev
resources: 19
api keys:
  None
endpoints:
  GET - https://xxxxxxxxx..execute-api.us-east-1.amazonaws.com/dev/calculo/{numero}
functions:
  calculo: aws-node-rest-api-typescript-dev-calculo
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Publishing service to the Serverless Dashboard...
Serverless: Successfully published your service to the Serverless Dashboard: https://app.serverless.com/lpontes7/apps/node-rest-api-typescript/aws-node-rest-api-typescript/dev/us-east-1
```

## Usage

send an HTTP request directly to the endpoint using a tool like curl

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/calculo/{numero}
```

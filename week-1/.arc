@app
init

@http
get /

## Uncomment the following lines to deploy to AWS!
@aws
profile default
region us-east-1
bucket 25-days-of-serverless-week-1
  
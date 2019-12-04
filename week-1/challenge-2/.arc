@app
25days-challenge-2

@http
get /

@scheduled
light-candles rate(10 minutes)

## Uncomment the following lines to deploy to AWS!
@aws
profile default
region us-east-1
bucket 25-days-of-severless-challenge-2
  
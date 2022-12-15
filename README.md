
## Installation

```bash
$ npm install
```

## Running the app docker

$ docker build .

$ docker compose up -d

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### queries
find sample query at /GQL_QUERIES.graphql


### Test questions
1. The main bottlenecks is my hardware might not be able to respond to that many number of calls, in that case two things could happen, it could damage my hardware and slow down the responses and effect on my background processes, or it could throttle many of calls and return an error
2. We can host our compute resources into a cloud platform and make use of auto scaling services and load balancer services 
3. That's the benefits of using cloud platforms, that performance of my application will be handled by the cloud resources, as long as we design our application according to best practices and design patterns 
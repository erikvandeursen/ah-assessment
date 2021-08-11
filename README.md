# AH Assessment

## Open Cypress
To make life easier the following scripts have been added to the package.json:
 - Open spec files on your current device:
 ```cli:<environment>```
 - Run spec files in a CI pipeline:
 ```dashboard:<environment>```
 - Included environments can be found below. Example script for running Cypress in a local environment:
``` cli:local```

## Environments
Includes the following environment variables for switchting between envs:
 - local
 - test
 - acceptance
 
## Scripts
 - 2 spec files are included:
   1. getstamp.spec.js: Tests on the amount of stamps received from the service endpoint
   2. getcards.spec.js: Tests on the amount of cards received from the service endpoint
 - Both files make use of a pom.json file (page object model) separating script logic and page objects for reusability between scripts and easier maintenance.
   
## Linting
An .eslintrc file is included for JS linting and can be extended witn rules if needed

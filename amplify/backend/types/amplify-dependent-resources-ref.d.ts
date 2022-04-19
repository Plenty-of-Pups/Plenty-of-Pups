export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "PlentyOfPups": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "PlentyOfPups": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3plentyofpupspics": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}
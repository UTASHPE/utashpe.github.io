//to run, add omitted information
//node createTable.js
var AWS = require('aws-sdk');

//give credentials and information
AWS.config.update({
    credentials: {
        accessKeyId: 'omitted',
        secretAccessKey: 'omitted'
    },
    region: "us-east-2",
    endpoint: "https://dynamodb.us-east-2.amazonaws.com"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: 'utashpe',
    KeySchema: [
        { AttributeName: 'email', KeyType: 'HASH'}
    ],
    AttributeDefinitions: [
        {AttributeName: 'email', AttributeType: 'S'}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data){
    if(err){
        console.log('unable to create table. Error JSON: ', JSON.stringify(err, null, 2));
    }
    else{
        console.log('Table Created! Table description JSON: ', JSON.stringify(data, null, 2));
    }
});
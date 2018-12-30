//create a new item
//will use AWS lambda for serverless server?
var AWS = require("aws-sdk");

AWS.config.update({
    credentials: {
        accessKeyId: 'omitted',
        secretAccessKey: 'omitted'
    },
    region: "us-east-2",
    endpoint: "https://dynamodb.us-east-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "utashpe";

var email = 'john.doe@mavs.uta.edu';
var fName = 'John';
var lName = 'doe';
var major = 'Mechanical Engineering';

var params = {
    TableName: table,
    Item:{
        "email": email,
        "FName": fName,
        "LName": lName,
        'Major': major
        
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});

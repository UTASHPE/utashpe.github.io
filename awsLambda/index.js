var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});
exports.handler = function(e, ctx, callback) {
    var table = "utashpe";
    var lName = 'doe1';
    var major = 'Mechanical Engineering';
    
    var params = {
        TableName: table,
        Item:{
            "email": e.email,
            "FName": e.fName,
            "LName": lName,
            'Major': major
            
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            callback(err,null);
        } else {
            callback(null, data);
        }
    });
}

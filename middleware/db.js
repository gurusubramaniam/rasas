"use strict"

exports.insertadminUsers = function(req, res, next) {
    var db = req.db,
        collection = db.get('userCollection'),
        emptyTable = req.body.emptyTable || 0;

    if (emptyTable) {

        collection.remove({}, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Deleted table successfully");
            }
        });

    } else {
        collection.insert({
            "userName" : req.body.userName,
            "password" : req.body.password || "admin"
        }, function (err, doc){
            if (err) {
                console.log('failed to insert datat o userCollection', err);
            } else {
                console.log('inserted data successfully', doc);
            }
            next();
        });
    }
}

exports.pickAdminUsersList = function (req, res, next){
    var db = req.db;
    var collection = db.get('userCollection');
    collection.find({},{},function(e, docs){
        console.log(docs);
        req.model = req.model || {};
        req.model.data = req.model.data || {};
        req.model.data.adminUsers = docs;
        next();
    });
}

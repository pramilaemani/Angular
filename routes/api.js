
//This is for logging purpose
var log4js = require('log4js');
log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('app.log'), 'app');
var logger = log4js.getLogger('app');
logger.setLevel(log4js.levels.TRACE);


var traceLogger = function (message) {
        logger.trace('message');
    };

var errorLogger = function (message) {
        logger.trace(message);
    };

/*
 * Serve JSON to our AngularJS client
 */
 exports.name = function (req, res) {
  res.json({
    name: 'Vin Camp Application'
  });
};

//GET Vindetails from DB
exports.allVinDetails = function(req, res){
var db = req.db;
var collection = db.get("vindetscollection");
      
 collection.find({}, function(e,docs){
   	res.json({allVinDetails: docs});
 });
};

//GET Campdetails from DB
exports.allCampDetails = function(req, res){
var db = req.db;
var collection = db.get("campdetcollection");
 
 collection.find({}, function(e,docs){
  res.json({allCampDetails: docs});
 });
};

exports.getSelCampDetails = function(req,res){
  logger.trace("in getSelCampDetails");
  var db = req.db;
  var vinid = req.params.vinid;
  logger.trace("Entered vinid is "+vinid);
  
  var collection = db.get("campdetcollection");
    collection.find({'VIN_ID':vinid}, function(e, docs){
      res.json({selCampDetails:docs});
      console.log(docs);
    });
};

exports.getSelVinDetails = function(req,res){
  logger.trace("in getSelVinDetails");
  var db = req.db;
  var campid = req.params.campid;
  logger.trace("Entered campid is "+campid);
  
  var collection = db.get("vindetscollection");
    collection.find({'CAMPAIGN_ID':campid}, function(e, docs){
      res.json({selVinDetails:docs});
      console.log(docs);
    });
};

exports.createVinDetails = function(req,res){
  logger.trace("creating Vin Details");
  
  var db = req.db;
  var vindetscollection = db.get("vindetscollection");
  
  var vinId = req.body.vinId;
  var modelId = req.body.modelId;
  var campaignId = req.body.campaignId;
  var vinCampStatus = req.body.vinCampStatus;
  var vinStatCd = req.body.vinStatCd;
  var modelTypeCd = req.body.modelTypeCd;

  logger.trace(req.body);
  db.vindetscollection.insert({
    'VIN_ID':vinId,
    'MODEL_ID':modelId,
    'CAMPAIGN_ID':campaignId,
    'VIN_CAMPAIGN_STATUS':vinCampStatus,
    'VIN_STAT_CD':vinStatCd,
    'MODEL_TYPE_CD':modelTypeCd
  });
  logger.trace("vin created Successfully");
};
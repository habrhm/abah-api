// var mongoose = require("mongoose");
// const multer = require('multer')
// const path = require('path')

// const Ads = require("../../models/Ads")

// //set storage engine
// const storage = multer.diskStorage({
//         destination : path.join(__dirname + './../public/images/'),
//         filename: function(req, file, cb){ 
//                    cb(null, file.fieldname + '-' + Date.now() +
//                     path.extname(file.originalname));    }});
// const upload = multer({ storage: storage })

//   router.post('/uploadphoto', upload.array('picture'), (req, res) => {
//     var img = fs.readFileSync(req.file.path);
//  var encode_image = img.toString('base64');
 
//  // Define a JSONobject for the image attributes for saving to database
  
//  var finalImg = {
//       contentType: req.file.mimetype,
//       image:  new Buffer(encode_image, 'base64')
//    };
//     Ads.collection('ads').insertOne(finalImg, (err, result) => {
//     console.log(result)
 
//     if (err) return console.log(err)
 
//     console.log('saved to database')
//     res.redirect('/')
   
     
//   })
// })
// router.get('/photos', (req, res) => {
//     Ads.collection('ads').find().toArray((err, result) => {
     
//           const imgArray= result.map(element => element._id);
//                 console.log(imgArray);
     
//        if (err) return console.log(err)
//        res.send(imgArray)
     
//       })
//     });

// router.get('/photo/:id', (req, res) => {
//     const filename = req.params.id;
         
//     Ads.collection('ads').findOne({'_id': ObjectId(filename) }, (err, result) => {
         
//     if (err) return console.log(err)
         
//     res.contentType('image/jpeg');
//     res.send(result.image.buffer)
           
            
//     })
//     })

// app.post('/Upload', function (req, res) {
//     var form = new formidable.IncomingForm();
//     form.uploadDir = __dirname+"/Uploads";
//     form.keepExtensions = true;
//     form.parse(req, function(fields, files) {
//         // Form validation
//         const { errors, isValid } = validateInput(req.body);

//         // Check validation
//         if (!isValid) {
//             return res.status(400).json(errors);
//         }

//             const name = req.body.name;
//             const address = req.body.address;
//             const lat  = req.body.lat;
//             const long = req.body.long;
//             const city = req.body.city;
//             const image = req.body.image;
//             const room = req.body.room;
//             const desc = req.body.desc;
//             const type = req.body.type ;
//             const price = req.body.price;
            

//             console.log('Files Uploaded: ' + files.file)
//             grid.mongo = mongoose.mongo;
//             var gfs = grid(conn.db);
//             var writestream = gfs.createWriteStream({
//                 filename: files.file.name
//             });
//             fs.createReadStream(files.file.path).pipe(writestream);
        
//             });
//             form.on('end', function () {
//             res.send('Completed ... go check fs.files & fs.chunks in mongodb');
//             });  
            
        
//         }         
            
// })

// module.exports = router;
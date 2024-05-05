const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use("/pdf", express.static("pdf"));

  //  ///img Start////->
  //  const multer = require("multer");

  //  const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "../QK_Hall_Client/public/images");
  //   },
  //   filename: function (req, file, cb) {
  //     const uniqueSuffix = Date.now();
  //     cb(null, uniqueSuffix + file.originalname);
  //   },
  // });
  
  // const upload = multer({ storage: storage });
  //    //img End////->

   //////pdf Start////->
   const multer = require("multer");

   const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../QK_hall_Server/pdf");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
     //pdf End////->



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s8or9pd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //////////////////////////////////
    const usersCollection = client.db('QK-Hall').collection('users');
    const tokenPurchesCollection = client.db('QK-Hall').collection('tokenPurches');
    const hallFeeCollection = client.db('QK-Hall').collection('hall_fee');
    const ComplainCollection = client.db('QK-Hall').collection('complain');
    const RoomAllotementCollection = client.db('QK-Hall').collection('roomAllotement');
    const imageCollection = client.db('QK-Hall').collection('images');
    const noticeCollection = client.db('QK-Hall').collection('notice');
      
    //  ///img Start////->

    //  app.post("/upload-image", upload.single("image"), async (req, res) => {

    //   const fileName = req.file.filename;
    // console.log(fileName);

    // // Assuming 'imageCollection' is your MongoDB collection
    // const result = await imageCollection.insertOne({ fileName });
    // console.log("Image inserted successfully:", result);

    // res.send(result);
    // });

    // app.get('/get-image', async (req, res) => {
    //   const cursor = imageCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // })

    //  //img End////->


     ///pdf Start////->

     app.post("/upload-pdf", upload.single("file"), async (req, res) => {

      const title = req.body.title;
      const date = req.body.date;
      const fileName = req.file.filename;
    console.log(title ,'-->',fileName);

    const result = await noticeCollection.insertOne({title:title, fileName:fileName,date:date });
    

     res.send(result);
    });

    app.get('/get-pdf', async (req, res) => {
      const cursor = noticeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

     //pdf End////->




    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.post('/tokenpurches', async (req, res) => {
      const token_info = req.body;
      console.log(token_info);
      const result = await tokenPurchesCollection.insertOne(token_info);
      res.send(result);
    });
    // app.get('/tokenpurches', async (req, res) => {
    //   const cursor = tokenPurchesCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);

    // });
    app.patch('/tokenpurches/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedBooking = req.body;
      console.log(updatedBooking);
      const updateDoc = {
        $set: {
          status: updatedBooking.status
        },
      };
      const result = await tokenPurchesCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    app.delete('/tokenpurches/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await tokenPurchesCollection.deleteOne(query);
      res.send(result);
    })
    app.get('/tokenpurches/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await tokenPurchesCollection.findOne(query);
      res.send(result);
    })
    app.get('/tokenpurches', async (req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email }
      }
      const result = await tokenPurchesCollection.find(query).toArray();
      res.send(result);
    })
    app.post('/hallfee', async (req, res) => {
      const hallfee = req.body;
      console.log(hallfee);
      const result = await hallFeeCollection.insertOne(hallfee);
      res.send(result);
    });
    app.get('/hallfee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await hallFeeCollection.findOne(query);
      res.send(result);
    })
    // app.get('/hallfee', async (req, res) => {
    //   const cursor = hallFeeCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);

    // });
    app.patch('/hallfee/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedBooking = req.body;
      console.log(updatedBooking);
      const updateDoc = {
        $set: {
          status: updatedBooking.status
        },
      };
      const result = await hallFeeCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    app.delete('/hallfee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await hallFeeCollection.deleteOne(query);
      res.send(result);
    })
    app.get('/hallfee', async (req, res) => {
      console.log(req.query.email);
      //console.log('token owner info', req.user)
      // if(req.user.email !== req.query.email){
      //     return res.status(403).send({message: 'forbidden access'})
      // }
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email }
      }
      const result = await hallFeeCollection.find(query).toArray();
      res.send(result);
    })
    app.post('/complains', async (req, res) => {
      const Complains = req.body;
      console.log(Complains);
      const result = await ComplainCollection.insertOne(Complains);
      res.send(result);
    });
    app.get('/complains', async (req, res) => {
      const cursor = ComplainCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    });
    app.delete('/complains/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await ComplainCollection.deleteOne(query);
      res.send(result);
    })
    app.post('/roomallotement', async (req, res) => {
      const RoomAllotement = req.body;
      console.log(RoomAllotement);
      const result = await RoomAllotementCollection.insertOne(RoomAllotement);
      res.send(result);
    });
    app.get('/roomallotement/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await RoomAllotementCollection.findOne(query);
      res.send(result);
    })
    // app.get('/roomallotement', async (req, res) => {
    //   const cursor = RoomAllotementCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);

    // });
    app.patch('/roomallotement/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedBooking = req.body;
      console.log(updatedBooking);
      const updateDoc = {
        $set: {
          status: updatedBooking.status,
          SelectedRoom: updatedBooking.SelectedRoom
        },
      };
      const result = await RoomAllotementCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    app.delete('/roomallotement/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await RoomAllotementCollection.deleteOne(query);
      res.send(result);
    })
    app.get('/roomallotement', async (req, res) => {
      console.log(req.query.email);
      //console.log('token owner info', req.user)
      // if(req.user.email !== req.query.email){
      //     return res.status(403).send({message: 'forbidden access'})
      // }
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email }
      }
      const result = await RoomAllotementCollection.find(query).toArray();
      res.send(result);
    })






    //////////////////////////////
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('QK Hall Server is running')
})

app.listen(port, () => {
  console.log(`QK Hall Server is running on port ${port}`)
})
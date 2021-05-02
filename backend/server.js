const express = require("express");
const app = express();
const port = 3001;
const secrects = require("./secrets");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: secrects.databaseURL
});

const auth = admin.auth();
const db = admin.firestore();

const orders = db.collection("orders");

app.get("/orders:id", async (request, response) => {

  const doc = await orders.doc(request.params.id).get();
  console.log("User id: ", request.params.id)
  if (!doc.exists) {
    console.log("No data to be displayed");
  } else {
    console.log("Data: ", doc.data());
    response.json(doc.data());
  }
});


app.listen(port, () => {
  console.log(`Express server is running on ${port}`);
});

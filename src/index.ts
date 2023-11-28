import connectDatabase from "./database/connectDatabase.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;
const mongoDbUrl =
  "mongodb+srv://Sergi:nmJKpBU0z9qPMoQ3@cluster0.bivdnqz.mongodb.net/?retryWrites=true&w=majority";

try {
  await connectDatabase(mongoDbUrl);
  console.log("Connected to database");

  await startServer(4000);
  console.log(`Server listening on port ${port}`);
} catch (error) {
  console.log(error.message);
}

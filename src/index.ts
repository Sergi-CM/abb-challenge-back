import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;

try {
  await startServer(4000);
  console.log(`Server listening on port ${port}`);
} catch (error) {
  console.log(error.message);
}

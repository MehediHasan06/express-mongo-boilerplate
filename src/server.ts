import mongoose from 'mongoose';
import app from './app';
import config from './config';

const port = config.port;

// mongoose connection
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(port, () => {
      console.log(`MongoDB atlas is connected on port ${port}...`);
    });
  } catch (error) {
    console.log("Failed to connect",error);
  }
}
main();

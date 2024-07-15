const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL = process.env.MONGO_URL;

  mongoose
    .connect(connectionURL)
    .then(() => console.log("Mongodb connected"))
    .catch((error) => console.log(error));
};

export default connectToDB;

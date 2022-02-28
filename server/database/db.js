import mongoose from "mongoose";
const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://user:vasu@proj1ectx.r7iqv.mongodb.net/PROJEXT?retryWrites=true&w=majority";
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("done it");
  } catch (error) {
    console.log("error occured ", error);
  }
};
export default Connection;

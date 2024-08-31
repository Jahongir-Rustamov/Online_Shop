import mongoose from "mongoose";

export async function mongodb() {
  try {
    await mongoose
      .connect(process.env.MongoDB_URL)
      .then(() => {
        console.log("Successfully connected with DB");
      })
      .catch((error) => {
        console.log("Error with DB:", error);
      });
  } catch (error) {
    console.log(error);
  }
}

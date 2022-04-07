import app from "./app.js";
import dotenv from "dotenv";

//CONFIG
dotenv.config();

// DEFINING THE PORT
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is istening on port ${port}`));

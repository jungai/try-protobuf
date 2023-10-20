import { app } from "./app.js";

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Service 1 listening on port ${PORT}`);
});

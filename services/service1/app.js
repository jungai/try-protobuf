import express from "express";
import cors from "cors";

// use from workspace instead of local protobufs in model
import { userpackage } from "protobufs";

function setupCors(e) {
  return e.use(cors());
}

function setupRoutes(e) {
  e.use("/users", (_req, res) => {
    const user = {
      id: 1,
      name: "IU",
      email: "iu@gmail.com",
      isValid: true,
    };

    return res.send(userpackage.UserResp.encode(user).finish());
  });

  return e;
}

export const app = [setupCors, setupRoutes].reduce(
  (ex, middleware) => middleware(ex),
  express()
);

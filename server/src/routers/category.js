import express from "express";
const router = express.Router();

router.get("/category", (request, response) => {
  console.log("GET /category");
});

router.get("/category/:id", (request, response) => {
  console.log("request.params.id: " + request.params.id);
});

router.post("/category", (request, response) => {
  console.log(request.body);
});

router.put("/category/:id", (request, response) => {
  console.log("request.params.id: " + request.params.id);
});

router.delete("/category/:id", (request, response) => {
  console.log("request.params.id: " + request.params.id);
});

export default router;

// In app.js

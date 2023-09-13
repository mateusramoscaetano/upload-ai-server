import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { fastifyCors } from "@fastify/cors";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAiCompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(require("fastify-supabase"), {
  supabaseKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllaXlzeG5nYWd4cGpyYmJ0ZHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NTgyMDcsImV4cCI6MjAxMDEzNDIwN30.2DrMSek65LMAc-tXWoFFAUF_f9ohokloENnbQtsxzUk",
  supabaseUrl: "https://ieiysxngagxpjrbbtdve.supabase.co",
});

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletionRoute);

app.listen({ port: 3333 }).then(() => {
  console.log("Http Server Running");
});

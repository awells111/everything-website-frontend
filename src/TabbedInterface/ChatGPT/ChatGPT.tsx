/* eslint-disable */
import React, { useEffect, useState } from "react";

import OpenAI from "openai";
import { Card, Typography } from "@mui/joy";

function ChatGPT() {
  const [message, setMessage] = useState("");
  async function callOpenAI() {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: "Write a haiku about recursion in programming.",
        },
      ],
    });
    setMessage(completion.choices[0].message.content ?? "Error");
  }

  // Call only on the first load
  useEffect(() => {
    callOpenAI();
  }, []);

  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <Typography level="h1">ChatGPT</Typography>
      <Typography>{message}</Typography>
    </Card>
  );
}

export default ChatGPT;

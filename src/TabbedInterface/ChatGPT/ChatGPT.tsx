/* eslint-disable */
import React, { useEffect, useMemo } from "react";

import OpenAI from "openai";
import { Card, Typography } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";

async function callOpenAI(): Promise<string> {
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
  return completion.choices[0].message.content ?? "Error";
}

function ChatGPT() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chatgptquery"],
    queryFn: callOpenAI,
  });
  function getMessage() {
    if (isLoading) {
      return "Loading...";
    }
    if (isError) {
      return "Error";
    }
    return data;
  }
  const text = getMessage();

  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <Typography level="h1">ChatGPT</Typography>
      <Typography>{getMessage()}</Typography>
    </Card>
  );
}

export default ChatGPT;

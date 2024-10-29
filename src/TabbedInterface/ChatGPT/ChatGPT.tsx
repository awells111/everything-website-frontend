/* eslint-disable */
import React, { useEffect } from "react";

import OpenAI from "openai";

function ChatGPT() {
  async function callOpenAI() {
    const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
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
    console.log(completion.choices[0].message);
  }

  // Call only on the first load
  useEffect(() => {
    callOpenAI();
  }, []);

  return <div>ChatGPT</div>;
}

export default ChatGPT;

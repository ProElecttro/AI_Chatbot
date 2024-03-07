import Head from "next/head";
import { useState } from "react";
import dotenv from "dotenv";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

dotenv.config();

const Aibot = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  const func = async (messages: any) => {
    console.log("Hello");
    try {
      const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
      });
      
      if (completion.choices && completion.choices.length > 0 && completion.choices[0].message.content) {
        setResponse(completion.choices[0].message.content);
      } else {
        throw new Error("Invalid response format or missing data.");
      }
    } catch (error) {
      console.error(error);
      alert("Error: " + error);
    }
  };
  

  const handleOnClick = () => {
    const messages = [
      // { role: "system", content: "You are a skilled JavaScript coder." },
      { role: "user", content: prompt },
    ];
    setResponse("Loading...");
    func(messages);
  };

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="My first Next app" />
      </Head>
      
      <div className="text-center mt-10 flex-col">
        <textarea
          className="border rounded-xl p-3 border-black"
          id="textarea"
          name="textarea"
          rows={2}
          cols={100}
          placeholder="Enter Prompt"
          value={prompt}
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-center">
          <button
            onClick={handleOnClick}
            className="mt-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded"
          >
            Send
          </button>
        </div>

        <textarea
          className="my-3 border rounded-xl p-3 border-black"
          id="textarea"
          name="textarea"
          rows={12}
          cols={100}
          placeholder="Your Response Here"
          value={response}
        ></textarea>
      </div>
    </div>
  );
};

export default Aibot;

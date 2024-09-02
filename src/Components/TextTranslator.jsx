import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function TextTranslator() {
  const [options, setOption] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("Translated Text");

  useEffect(() => {
    const getList = async () => {
      const url = "https://text-translator2.p.rapidapi.com/getLanguages";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":import.meta.env.VITE_APP_TRANSLATOR_KEY,
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setOption(result.data.languages);
      } catch (error) {
        console.error(error);
      }
    };

    getList();
  }, []);

  const getTranslate = async () => {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "75a5a70114mshd579c697a03cc19p1fa835jsn133f11245987",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: `${sourceLanguage}`,
        target_language: `${targetLanguage}`,
        text: `${inputValue}`,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.data.translatedText);
      setOutputValue(result.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  function source() {
    let utterance = new SpeechSynthesisUtterance(`${inputValue}`);
    utterance.lang = { sourceLanguage };
    speechSynthesis.speak(utterance);
  }

  function target() {
    let utterance = new SpeechSynthesisUtterance(`${outputValue}`);
    utterance.lang = { targetLanguage };
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="border-4 border-purple-800 p-6 mb-3 bg-purple-200">
      <div className="flex justify-end">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setInputValue("");
            setOutputValue("Translated Text");
          }}
        >
          ❌
        </motion.button>
      </div>
      <div className="flex max-sm:block ">
        <div>
          <div className="text-center ">
            <select
            className="bg-transparent"
              onChange={(e) => {
                setSourceLanguage(e.currentTarget.value);
              }}
            >
              <option>Select Source Language</option>
              {options.map((option, index) => {
                return (
                  <option key={index} value={option.code}>
                    {option.name}
                  </option>
                );
              })}
            </select>
          </div>
          <textarea
            className="w-80 h-80  max-sm:w-40 border-4 border-yellow-400 m-2 p-2 outline-none bg-yellow-100"
            placeholder="Text to be translated"
            onChange={(e) => setInputValue(e.currentTarget.value)}
          >
            {inputValue}
          </textarea>
          <button onClick={source}>🔊</button>
        </div>

        <div>
          <div className="text-center">
            <select
            className="bg-transparent"
              onChange={(e) => {
                setTargetLanguage(e.currentTarget.value);
              }}
            >
              <option>Select Target Language</option>
              {options.map((option, index) => {
                return (
                  <option key={index} value={option.code}>
                    {option.name}
                  </option>
                );
              })}
            </select>
          </div>
<div className="flex items-end">
          <p className="w-80 max-sm:w-40 h-80 border-4 border-pink-400 m-2 p-2 bg-pink-100">
            {outputValue}
          </p>
        <button onClick={target}>🔊</button>
</div>
  
        </div>
      </div>


      <div className="flex justify-center">
        <button
          className="bg-green-500 p-3 mt-3 rounded-lg text-lg"
          onClick={getTranslate}
        >
          Translate
        </button>
      </div>
    </div>
  );
}

export default TextTranslator;

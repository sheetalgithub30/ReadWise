import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import bottom from "./assets/bottom.svg";
import butterfly from "./assets/butterfly.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import LoginNavbar from "./Components/LoginNavbar";
import { motion } from "framer-motion";
import Card from "./Components/Card";
export default function Home() {
  const [fiction, setFiction] = useState([]);
  const [nonfiction, setnonFiction] = useState([]);
  const [historical, setHistorical] = useState([]);
  const [travel, setTravel] = useState([]);
  const [be, setBE] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetchData("fiction", 4);
    fetchData("nonfiction", 4);
    fetchData("historical", 4);
    fetchData("travel", 4);
    fetchData("business economics", 4);
  }, []);

  async function fetchData(subject, max) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=${max}`,
    );
    const result = await response.json();
    subject == "fiction" ? setFiction(result.items) : null;
    subject == "nonfiction" ? setnonFiction(result.items) : null;
    subject == "historical" ? setHistorical(result.items) : null;
    subject == "travel" ? setTravel(result.items) : null;
    subject == "business economics" ? setBE(result.items) : null;

    // console.log(result)
  }

  // console.log("f", fiction);
  const data = [
    {
      type: "FICTION",
      subject: "fiction",
    },
    {
      type: "NON FICTION",
      subject: "nonfiction",
    },
    {
      type: "HISTORICAL",
      subject: "historical",
    },
    {
      type: "TRAVEL",
      subject: "travel",
    },
    {
      type: "BUSINESS & ECONOMICS",
      subject: "business economics",
    },
  ];

  function viewAll(subject) {
    // alert(subject);
    subject=="fiction"?navigate("/allFiction"):null;
    subject=="nonfiction"?navigate("/allnonFiction"):null;
    subject=="historical"?navigate("/allhistorical"):null;
    subject=="travel"?navigate("/alltravel"):null;
    subject=="business economics"?navigate("/allbusiness&economics"):null;

  }
  return (
    <div>
      <LoginNavbar />
      <div className="bg-hero bg-cover h-[85vh] w-[100%]  bg-[center_bottom_3rem] relative">
        <div className="pt-16 text-center  text-white">
          <h1
            className=" text-7xl font-extrabold"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "white",
            }}
          >
            ReadWise
          </h1>
          <p
            className="text-3xl text-white font-bold mt-5"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "white",
            }}
          >
            Unlock New Worlds, One Page at a Time. Explore Books Now!
          </p>
        </div>
        <div className=" absolute bottom-[-20px]">
          <img src={bottom}></img>
        </div>
      </div>

      <div className="mt-5">
        {data.map((e) => {
          return (
            <>
              <div className="flex justify-around">
                <div className="m-2 flex w-[40rem]">
                  <h1 className=" text-4xl font-bold">{e.type}</h1>
                  <img src={butterfly} className="w-36"></img>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="text-xl text-violet-800 font-semibold"
                  onClick={() => viewAll(e.subject)}
                >
                  <u>View All</u>
                </motion.button>
              </div>
              <div className="flex justify-center flex-wrap">
                {e.subject == "fiction" ? (
                  fiction.map((ele) => {
                    return <Card src={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title}/>
                   
                  })
                ) : (
                  <></>
                )}
                {e.subject == "nonfiction" ? (
                  nonfiction.map((ele) => {
                    return <Card src={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title}/>
                   
                  })
                ) : (
                  <></>
                )}
                {e.subject == "historical" ? (
                  historical.map((ele) => {
                    return <Card src={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title}/>
                  })
                ) : (
                  <></>
                )}
                {e.subject == "travel" ? (
                  travel.map((ele) => {
                    return <Card src={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title}/>
                   
                  })
                ) : (
                  <></>
                )}
                {e.subject == "business economics" ? (
                  be.map((ele) => {
                    return <Card src={ele.volumeInfo.imageLinks.thumbnail} title={ele.volumeInfo.title}/>
                   
                  })
                ) : (
                  <></>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

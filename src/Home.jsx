import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import bottom from "./assets/bottom.svg";
import butterfly from "./assets/butterfly.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import LoginNavbar from "./Components/LoginNavbar";
import { motion } from "framer-motion";
import Card from "./Components/Card";
import { FaSearch } from "react-icons/fa";
import SingleComponent from "./Components/SingleComponent";
import Spinner from './Components/Spinner';
import Footer from "./Components/Footer";
export default function Home() {
  const [fiction, setFiction] = useState([]);
  const [nonfiction, setnonFiction] = useState([]);
  const [historical, setHistorical] = useState([]);
  const [travel, setTravel] = useState([]);
  const [be, setBE] = useState([]);
  const[click,setClick] = useState([])

  const [search, setSearch] = useState("");
  const[searchData,setSearchData] = useState([]);
  

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/");
    }
  }, []);

  const[isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setIsLoading(false);
    },2000)
  },[])

  useEffect(() => {
    fetchData("fiction", 4);
    fetchData("nonfiction", 10);
    fetchData("historical", 4);
    fetchData("travel", 4);
    fetchData("business economics", 4);
  }, []);

  async function fetchData(subject, max) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=${max}`
    );
    const result = await response.json();
    subject == "fiction" ? setFiction(result.items) : null;
    subject == "nonfiction" ? setnonFiction(result.items) : null;
    subject == "historical" ? setHistorical(result.items) : null;
    subject == "travel" ? setTravel(result.items) : null;
    subject == "business economics" ? setBE(result.items) : null;
  }

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
    subject == "fiction" ? navigate("/allFiction") : null;
    subject == "nonfiction" ? navigate("/allnonFiction") : null;
    subject == "historical" ? navigate("/allhistorical") : null;
    subject == "travel" ? navigate("/alltravel") : null;
    subject == "business economics" ? navigate("/allbusiness&economics") : null;
  }


  const handleCardClick = (id,data) => {
    if(data == "search"){
      setClick(searchData.filter((ele)=>{
        return ele.id == id
      }))
    }

    if(data === "fiction"){
      setClick(fiction.filter((ele)=>{
        return ele.id == id
      }))
    }

    if(data === "nonfiction"){
      setClick(nonfiction.filter((ele)=>{
        return ele.id == id
      }))
    }

    if(data === "historical"){
      setClick(historical.filter((ele)=>{
        return ele.id == id
      }))
    }

    if(data === "be"){
      setClick(be.filter((ele)=>{
        return ele.id == id
      }))
    }

    if(data === "travel"){
      setClick(travel.filter((ele)=>{
        return ele.id == id
      }))
    }
  };



  async function handleSearch(){
     const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=4`);
     const result = await response.json();
    //  console.log("search",search);
    console.log("result",result.items)
    //  setSearch(result);
    // console.log(result.items);
    setSearchData(result.items);
  }
  return (

  <>
    {isLoading ?(
   <div className='w-screen h-screen flex items-center justify-center
   overflow-hidden'>
      <Spinner/>
   </div>
   ):(
  
    <div>
      <LoginNavbar />
      <div className="bg-hero bg-cover h-[85vh] w-[100%]  bg-[center_bottom_3rem] relative">
        <div className="pt-16 text-center  text-white">
          <h1
            className=" text-7xl font-extrabold max-sm:text-5xl"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "white",
            }}
          >
            ReadWise
          </h1>
          <p
            className="text-3xl text-white font-bold mt-5 max-sm:text-lg"
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

      {/* search */}
      <div className="my-5 text-2xl flex justify-center items-center max-sm:text-xl">
        <input
          type="text"
          placeholder="Enter boook name"
          className="border-2 border-gray-500 p-[0.67rem] rounded-l-2xl max-sm:w-[60%]"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        ></input>
        <button className="bg-purple-600 p-4 rounded-r-2xl "
        onClick={handleSearch}
        >
          <FaSearch className="text-white" />
        </button>
      </div>


      <div>
          {click && click.map((e)=>{
            return <div className='flex justify-center mx-auto my-16 w-[60vw]'>
              <SingleComponent src={e.volumeInfo.imageLinks?.thumbnail} 
              title={e.volumeInfo.title}
               auth_name={e.volumeInfo.authors[0]}
               publisher={e.volumeInfo.publisher}
                p_date={e.volumeInfo.publishedDate} desc={e.volumeInfo.description} buy_link={e.saleInfo.buyLink ? e.saleInfo.buyLink :e.volumeInfo.infoLink} 
                preview_link={e.volumeInfo.previewLink}
                info_link={e.volumeInfo.infoLink}
                setClick={setClick}
                />
            </div>
          })}
        </div>

      {searchData.length>0 && 
      
      <div className="mt-10">
        <div className="flex justify-around">
          <div className="w-[25%]"></div>
        <h1 className="text-4xl font-bold text-violet-700 m-5 w-[33%]">Searched Result</h1>
        <button className="w-[15%]" onClick={()=>{setSearchData([])
          setSearch("")
        }}>❌</button>
        </div>
      <div className="flex justify-center flex-wrap">

{
  searchData && searchData.map((ele) => (
    ele.volumeInfo && ele.volumeInfo.imageLinks && ele.volumeInfo.imageLinks?.thumbnail ? 
    (
      <div onClick={()=>{
        handleCardClick(ele.id,"search")}}>
        <Card
          src={ele.volumeInfo.imageLinks.thumbnail}
          title={ele.volumeInfo.title}
        />
      </div>
    ) : (
      <></>
    )
  ))
}

      </div>
      </div>
      }

      <div className="">
        {data.map((e) => {
          return (
            <>
              <div className="flex justify-around">
                <div className="m-2 flex w-[40rem]">
                  <h1 className=" text-4xl font-bold max-sm:text-xl">{e.type}</h1>
                  <img src={butterfly} className="w-36 max-sm:w-16"></img>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="text-xl text-violet-800 font-semibold max-sm:text-base"
                  onClick={() => viewAll(e.subject)}
                >
                  <u>View All</u>
                </motion.button>
              </div>
              <div className="flex justify-center flex-wrap">
                {e.subject == "fiction" ? (
                  fiction.map((ele) => {
                    return (
                      <div
                      onClick={()=>{
                        handleCardClick(ele.id,"fiction")}}>

                        <Card
                          src={ele.volumeInfo.imageLinks?.thumbnail}
                          title={ele.volumeInfo.title}
                        
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
                {e.subject == "nonfiction" ? (
                  nonfiction.slice(4,8).map((ele) => {
                    return (
                      <div
                      onClick={()=>{
                        handleCardClick(ele.id,"nonfiction")}}>
                      <Card
                        src={ele.volumeInfo.imageLinks?.thumbnail}
                        title={ele.volumeInfo.title}
                      />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
                {e.subject == "historical" ? (
                  historical.map((ele) => {
                    return (
                      <div
                      onClick={()=>{
                        handleCardClick(ele.id,"historical")}}>
                      <Card
                        src={ele.volumeInfo.imageLinks?.thumbnail}
                        title={ele.volumeInfo.title}
                      />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
                {e.subject == "travel" ? (
                  travel.map((ele) => {
                    return (
                      <div
                      onClick={()=>{
                        handleCardClick(ele.id,"travel")}}>
                      <Card
                        src={ele.volumeInfo.imageLinks?.thumbnail}
                        title={ele.volumeInfo.title}
                      />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
                {e.subject == "business economics" ? (
                  be.map((ele) => {
                    return (
                      <div
                      onClick={()=>{
                        handleCardClick(ele.id,"be")}}>
                      <Card
                        src={ele.volumeInfo.imageLinks?.thumbnail}
                        title={ele.volumeInfo.title}
                      />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </>
          );
        })}
      </div>
      <Footer/>
    </div>
   )}
  </>
  );
}

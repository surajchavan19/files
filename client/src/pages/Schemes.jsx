import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Schemes = () => {
  const [schemeData, setSchemeData] = useState([]);
  const options = {
    method: "POST",
    url: "https://all-serp.p.rapidapi.com/all-serp-website",
    params: {
      keyword: "government schemes for person with disability",
      location: "in",
      language: "en",
      search_engine: "google",
      page_limit: "1",
      search_type: "All",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "b98b79de7fmsh8e00ccb66857cb9p100006jsnfb22fe23705f",
      "X-RapidAPI-Host": "all-serp.p.rapidapi.com",
    },
    data: '{"key1":"value","key2":"value"}',
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .request(options)
        .then(function (response) {
          setSchemeData(response.data.organic_results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchData();
  }, []);
  console.log(schemeData);
  return (
    <div>
      {schemeData.map((data) => {
        return (
          <>
            <h2>{data.title}</h2>
            <a href={data.url}>{data.url}</a>
          </>
        );
      })}
    </div>
  );
};

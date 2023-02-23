import axios from "axios";
import React, { useEffect, useState } from "react";

export const Jobs = () => {
  const [jobData, setjobData] = useState([]);
  const options = {
    method: "POST",
    url: "https://all-serp.p.rapidapi.com/all-serp-website",
    params: {
      keyword: "jobs for pwd people",
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
          setjobData(response.data.organic_results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchData();
  }, []);
  console.log(jobData);
  return (
    <div>
      {jobData.map((data) => {
        return (
          <>
            <h2>{data.title}</h2>
            <a href={data.url}>{data.url}</a>
            <h3>Location:India</h3>
          </>
        );
      })}
    </div>
  );
};

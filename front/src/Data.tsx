import React, { useState, useEffect } from "react";

interface DataType {
  lastname?: string;
  firstname?: string;
}

function Data() {
  const [data, setData] = useState<DataType>({});
  useEffect(() => {
    fetch("/data")
      .then((res: Response) => res.json() as Promise<DataType>)
      .then((data) => {
        setData(data);
        console.log("data read : ", data);
      });
  }, []);

  return (
    <div>
      {data.lastname} {data.firstname}
    </div>
  );
}

export default Data;

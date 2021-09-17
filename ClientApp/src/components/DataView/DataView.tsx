import "./dataView.scss";
import React from "react";
import Table from "./Table";
import { useEffect, useState } from "react";

interface DataViewProps {}

const DataView: React.FC<DataViewProps> = ({}) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const r = await fetch(
      "https://gist.githubusercontent.com/yakai911/736ab9ab58d77dbfe40ad222942ad6f4/raw/mtSongList.json"
    );

    const d = await r.json();
    console.log(d);
    setData(d);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='data-view'>
      {/**Cates */}
      {/**Search */}
      <Table data={data} />
    </div>
  );
};

export default DataView;

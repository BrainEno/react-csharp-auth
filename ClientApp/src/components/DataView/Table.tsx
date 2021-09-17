import React from "react";

interface TableProps {
  data: any;
}

const colTitles = ["ID", "曲名", "艺术家", "专辑名"];

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            {colTitles.map((t, index) => (
              <th key={index}>{t}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d: any, index: number) => (
            <>
              <tr key={index}>
                <td>{index}</td>
                <td>{d.Song}</td>
                <td>{d.Artist}</td>
                <td>{d.Album}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

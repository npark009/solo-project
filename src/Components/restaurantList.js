import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const restList = ({ restList, removeRest }) => {
  const columns = [
    {
      field: 'name',
      headerName: 'RESTAURANT',
      width: 250,
      editable: true,
    },
    {
      field: 'cuisine',
      headerName: 'TYPE',
      width: 200,
      editable: true,
    },
    {
      field: 'rating',
      headerName: 'RATING',
      width: 85,
      editable: true,
    },
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    const newRows = restList.map((el, i) => ({ ...el, id: i }));
    setRows(newRows);
  }, [restList]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};
//   if (restList?.length > 0) {
//     return (
//       <div className="rest-list">
//         {restList.map((rest, index) => {
//           return (
//             <div className="rest">
//               <h5 key={rest.id} className="rest-item">{restList}</h5>

//               <button
//                 className="delete-rest"
//                 onClick={() => {
//                   removeRest(rest);
//                 }}
//               >
//                 x
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     );
//   } else {
//     return (
//       <div className="empty">
//         <p>No Input Found</p>
//       </div>
//     );
//   }
// };

export default restList;

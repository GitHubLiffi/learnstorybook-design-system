import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const Table = ({ tableRows, tableColumns }) => {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 2,
    page: 0,
  });

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={tableRows}
        columns={tableColumns}
        pageSizeOptions={[5, 10, 25]}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#ECEFF1',
          },
        }}
      />
    </div>
  );
}

export default Table;
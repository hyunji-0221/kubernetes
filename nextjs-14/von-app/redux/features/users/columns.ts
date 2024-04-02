import {GridColDef } from '@mui/x-data-grid';

export default function MuiDemoColumns():GridColDef[] {
    return [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'username',
          width: 150,
          editable: true,
        },
        {
          field: 'password',
          headerName: 'password',
          width: 150,
          editable: true,
        },
        {
          field: 'name',
          headerName: 'name',
          width: 110,
          editable: true,
        },
        {
          field: 'phone',
          headerName: 'phone',
          width: 110,
          editable: true,
        },
        {
          field: 'job',
          headerName: 'job',
          width: 110,
          editable: true,
        },
        
    ];
  }
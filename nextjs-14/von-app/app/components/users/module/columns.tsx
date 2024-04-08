import { Typography } from '@mui/material'
import { GridRow, GridColDef } from '@mui/x-data-grid'
import { UserColumn } from '../model/UserColumn'

//타입의 정의는 function 밖에서
interface CellType{
    row : UserColumn
}

export default function UsersColumns(): GridColDef[] {
    return (
        [
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'id',
                headerName: 'No.',
                renderCell :({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>{row.id}</Typography>
                
            },
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'username',
                headerName: 'UserName',
                renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>{row.username}</Typography>
                
            },
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'password',
                headerName: 'Password',
                renderCell() {
                    return <>********</>
                }
            },
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'name',
                headerName: 'Name',
                renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>{row.name}</Typography>
            },
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'phone',
                headerName: 'Phone',
                renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>{row.phone}</Typography>
            },
            {
                flex: 0.04,
                minWidth: 30,
                sortable: false,
                field: 'job',
                headerName: 'Job',
                renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>{row.job}</Typography>
            },
        ]
    )
}
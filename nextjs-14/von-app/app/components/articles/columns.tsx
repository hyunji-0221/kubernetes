import { GridColDef } from "@mui/x-data-grid";

export default function Columns(): GridColDef[]{
    return [
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'id',
            headerName : 'ID',
            renderCell(){
                return <></>
            }
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'title',
            headerName : 'Title',
            renderCell(){
                return <></>
            }
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'content',
            headerName : 'Content',
            renderCell(){
                return <></>
            }
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'postdate',
            headerName : 'PostDate',
            renderCell(){
                return <></>
            }
        },
    ]
}


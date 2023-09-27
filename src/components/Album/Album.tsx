import React, {useMemo} from "react";
import {
    List,
    Datagrid,
    TextField,
    TextInput,
} from 'react-admin';


export const Album: React.FC = () => {
    const filters = useMemo(() => [
        <TextInput key="user-id" label="User Id" source="userId" alwaysOn/>,
    ], [])

    return (
        <List filters={filters}>
            <Datagrid rowClick="show" bulkActionButtons={false}>
                <TextField source="userId"/>
                <TextField source="title"/>
            </Datagrid>
        </List>
    )
};
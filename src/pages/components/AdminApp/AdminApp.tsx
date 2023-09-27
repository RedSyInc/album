import jsonServerProvider from "ra-data-json-server";
import {Admin, RaThemeOptions, Resource, defaultTheme} from "react-admin";
import {Album} from "@/pages/components/Album/Album";
import {Photos} from "@/pages/components/Photos/Photos";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const darkTheme: RaThemeOptions = {
    ...defaultTheme,
    palette: {mode: 'dark'},
};

const AdminApp = () => (
    <Admin dataProvider={dataProvider} darkTheme={darkTheme} defaultTheme="dark">
        <Resource name="albums" list={Album} show={Photos}/>
    </Admin>
);

export default AdminApp;
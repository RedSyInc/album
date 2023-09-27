import {NextPage} from "next";
import dynamic from "next/dynamic";
import {Preloader} from "@/components/Preloader/Preloader";

const AdminApp = dynamic(
    () => import("@/components/AdminApp/AdminApp"),
    {
        ssr: false,
        loading: () => <Preloader/>,
    }
);

const App: NextPage = () => <AdminApp/>;

export default App;

import { MagnifyIcon } from "@/assets/icons";
import Layout from "../layout/Layout";


export default function Loading() {
    return (
        <Layout>
            <div className="flex flex-col justify-center text-center text-white">
                <div className="animate-bounce w-30">
                    <MagnifyIcon />
                </div>
                <div className="font-press-start">Loading...</div>
            </div>
        </Layout>
    );
}


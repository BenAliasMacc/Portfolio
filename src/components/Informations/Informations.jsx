import { useState } from "react";
import Header from "./Header";
import InformationsMain from "./InformationsMain";
import Portfolio from "./Portfolio/Portfolio";

const Informations = () => {

    const [page, setPage] = useState(1)

    return (
        <article className="col-span-12 lg:col-span-8">
            <Header setPage={setPage} />
            <InformationsMain page={page} />
        </article>
    );
};

export default Informations;
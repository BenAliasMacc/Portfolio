import { useState } from "react";
import Header from "./Header/Header";
import InformationsMain from "./InformationsMain";

const Informations = ({ setPage, page }) => {

    return (
        <article className="col-span-12 lg:col-span-8">
            <Header setPage={setPage} />
            <InformationsMain page={page} />
        </article>
    );
};

export default Informations;
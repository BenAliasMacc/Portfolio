import Profil from "./Profil/Profil"

const Header = () => {
    return (
        <section className="container mx-auto fixed bg-[url('./assets/header-bg.png')] bg-center bg-cover w-full max-w-none min-h-screen">
            <div className="container mx-auto max-w-screen-xl grid grid-cols-12 md:gap-10 lg:mt-[220px]">
                <Profil />
            </div>
        </section>
    )
}

export default Header
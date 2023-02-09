const Header = ({ icon, altText, title}) => {
    return (
        <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#F95054]">
                <img src={icon} alt={altText} />
            </div>
            <h4 className="text-2xl dark:text-white font-medium">{title}</h4>
        </div>
    );
};

export default Header;
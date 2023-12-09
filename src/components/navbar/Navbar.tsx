import {Logo, LogoText, NavPanel} from "./styled.ts";

const Navbar = () => {
    return (
        <NavPanel>
            <Logo src={"/logo.png"}/>
            <LogoText>E-Library AIPS</LogoText>
        </NavPanel>
    );
};

export default Navbar;
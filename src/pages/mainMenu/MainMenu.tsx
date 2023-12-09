import {Buttons, Menu, MenuBack, MenuButton, MenuHeader} from "./styled.tsx";
import {useNavigate} from "react-router-dom";
import {ADD_ABONEMENT, ADD_BOA, BOOKS, PRINT} from "../../consts/routes.ts";

const MainMenu = () => {
    const navigate = useNavigate();

    const handleOpenBooks = () => {
        navigate(BOOKS)
    }

    const handleOpenAddAbonement = () => {
        navigate(ADD_ABONEMENT)
    }

    const handleOpenAddBoa = () => {
        navigate(ADD_BOA)
    }

    const handleOpenPrint = () => {
        navigate(PRINT)
    }

    return (
        <Menu>
            <MenuHeader>
                Главное меню
            </MenuHeader>
            <MenuBack>
                <Buttons>
                    <MenuButton onClick={handleOpenBooks}>Просмотреть книги</MenuButton>
                    <MenuButton onClick={handleOpenAddAbonement}>Добавить абонемент</MenuButton>
                    <MenuButton onClick={handleOpenAddBoa}>Добавить книгу в аб.</MenuButton>
                    <MenuButton onClick={handleOpenPrint}>Печать отчёта</MenuButton>
                </Buttons>
            </MenuBack>
        </Menu>
    );
};

export default MainMenu;
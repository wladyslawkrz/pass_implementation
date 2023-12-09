import {Buttons, Menu, MenuBack, MenuButton, MenuHeader} from "./styled.tsx";
import {useNavigate} from "react-router-dom";
import {ABONEMENTS, ADD_ABONEMENT, ADD_BOA, ADD_BOOK, BOOKS, PRINT} from "../../consts/routes.ts";

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

    const handleOpenAddBook = () => {
        navigate(ADD_BOOK)
    }

    const handleOpenAbonements = () => {
        navigate(ABONEMENTS)
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
                    <MenuButton onClick={handleOpenAddBook}>Добавить книгу</MenuButton>
                    <MenuButton onClick={handleOpenAbonements}>Просмотреть абонементы</MenuButton>
                </Buttons>
            </MenuBack>
        </Menu>
    );
};

export default MainMenu;
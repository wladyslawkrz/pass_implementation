import {
    AddBoaButton,
    AddBoaForm,
    AddBoaHeader,
    AddBoaInput,
    AddBoaInputContainer,
    AddBoaInputLabel,
    AddBoaMain
} from "./styled.ts";
import {abonements} from "../../consts/abonements.ts";
import {books} from "../../consts/books.ts";
import React, {useState} from "react";

const AddBookOnAbonement = () => {
    const [abonement, setAbonement] = useState<string>("")
    const [book, setBook] = useState<string>("")

    const handleAbonementSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAbonement(e.target.value)
    }

    const handleBookSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBook(e.target.value)
    }

    const handleAddBoaClick = () => {
        alert(`В абонемент ${abonement} добавлена книга ${book}`)
    }

    return (
        <AddBoaMain>
            <AddBoaHeader>Добавление книги в абонемент читателя</AddBoaHeader>
            <AddBoaForm>
                <AddBoaInputContainer>
                    <AddBoaInputLabel>Абонемент:</AddBoaInputLabel>
                    <AddBoaInput onChange={handleAbonementSelect}>
                        {abonements.map((abonement) => (
                            <option key={abonement.FIO}>{abonement.FIO}</option>
                        ))}
                    </AddBoaInput>
                </AddBoaInputContainer>
                <AddBoaInputContainer>
                    <AddBoaInputLabel>Книга:</AddBoaInputLabel>
                    <AddBoaInput onChange={handleBookSelect}>
                        {books.map((book, index) => (
                            <option key={index}>{book.bookName}</option>
                        ))}
                    </AddBoaInput>
                </AddBoaInputContainer>
                <AddBoaButton onClick={handleAddBoaClick}>Добавить</AddBoaButton>
            </AddBoaForm>
        </AddBoaMain>
    );
};

export default AddBookOnAbonement;
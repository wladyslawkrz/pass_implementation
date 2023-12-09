import {
    AddBookButton,
    AddBookForm,
    AddBookHeader,
    AddBookInput,
    AddBookInputContainer,
    AddBookInputLabel,
    AddBookMain
} from "./styled.ts";
import React, {useState} from "react";

const AddBook = () => {
    const [bookData, setBookData] = useState<{ author: string, name: string, dateOfPrint: string }>({
        author: "",
        name: "",
        dateOfPrint: ""
    })

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookData({...bookData, author: e.target.value})
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookData({...bookData, name: e.target.value})
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookData({...bookData, dateOfPrint: e.target.value})
    }

    const AddBookClick = () => {
        alert(`Добавлена книга:\n
        Автор: ${bookData.author},
        Название: ${bookData.name},
        Год печати: ${bookData.dateOfPrint}
        `)
    }


    return (
        <AddBookMain>
            <AddBookHeader>Добавить книгу</AddBookHeader>
            <AddBookForm>
                <AddBookInputContainer>
                    <AddBookInputLabel>Автор:</AddBookInputLabel>
                    <AddBookInput onChange={handleAuthorChange}/>
                </AddBookInputContainer>
                <AddBookInputContainer>
                    <AddBookInputLabel>Название:</AddBookInputLabel>
                    <AddBookInput onChange={handleNameChange}/>
                </AddBookInputContainer>
                <AddBookInputContainer>
                    <AddBookInputLabel>Год печати:</AddBookInputLabel>
                    <AddBookInput onChange={handleDateChange}/>
                </AddBookInputContainer>
                <AddBookButton onClick={AddBookClick}>Добавить</AddBookButton>
            </AddBookForm>
        </AddBookMain>
    );
};

export default AddBook;
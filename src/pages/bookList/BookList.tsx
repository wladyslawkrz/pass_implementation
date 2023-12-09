import {BookCard, BookImg, BooksContainer, BooksMenuHeader, BooksMenuMain, BookText} from "./styled.ts";
import {books} from "../../consts/books.ts";

const BookList = () => {
    return (
        <BooksMenuMain>
            <BooksMenuHeader>Список книг</BooksMenuHeader>
            <BooksContainer>
                {books.map((book, index) => (
                    <BookCard key={index}>
                        <BookImg src={book.img} alt={"H.P. Lovecraft Tales of Horror"}/>
                        <BookText>{book.author}</BookText>
                        <BookText>{book.bookName}</BookText>
                    </BookCard>
                ))}
            </BooksContainer>
        </BooksMenuMain>
    );
};

export default BookList;
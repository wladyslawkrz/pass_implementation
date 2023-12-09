import Login from "../pages/login/Login.tsx";
import MainMenu from "../pages/mainMenu/MainMenu.tsx";
import BookList from "../pages/bookList/BookList.tsx";
import AddAbonement from "../pages/addAbonement/AddAbonement.tsx";
import AddBookOnAbonement from "../pages/addBookOnAbonement/AddBookOnAbonement.tsx";
import PrintReport from "../pages/printReport/PrintReport.tsx";
import AddBook from "../pages/addBook/AddBook.tsx";
import AbonementList from "../pages/abonementList/AbonementList.tsx";

export const LOGIN = '/'
export const MENU = '/menu'
export const BOOKS = '/books'
export const ADD_ABONEMENT = '/add-abonement'
export const ADD_BOA = '/add-boa'
export const PRINT = '/print'
export const ADD_BOOK = '/add-book'
export const ABONEMENTS = '/abonements'

export const routes = [{
    path: LOGIN, component: Login,
}, {
    path: MENU, component: MainMenu,
}, {
    path: BOOKS, component: BookList,
}, {
    path: ADD_ABONEMENT, component: AddAbonement,
}, {
    path: ADD_BOA, component: AddBookOnAbonement,
}, {
    path: PRINT, component: PrintReport,
}, {
    path: ADD_BOOK, component: AddBook,
}, {
    path: ABONEMENTS, component: AbonementList,
},];
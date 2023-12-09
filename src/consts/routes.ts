import Login from "../pages/login/Login.tsx";
import MainMenu from "../pages/mainMenu/MainMenu.tsx";
import BookList from "../pages/bookList/BookList.tsx";
import AddAbonement from "../pages/addAbonement/AddAbonement.tsx";
import AddBookOnAbonement from "../pages/addBookOnAbonement/AddBookOnAbonement.tsx";
import PrintReport from "../pages/printReport/PrintReport.tsx";

export const LOGIN = '/'
export const MENU = '/menu'
export const BOOKS = '/books'
export const ADD_ABONEMENT = '/add-abonement'
export const ADD_BOA = '/add-boa'
export const PRINT = '/print'

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
},];
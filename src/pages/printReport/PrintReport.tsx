import {
    PrintButton,
    PrintForm,
    PrintHeader,
    PrintInput,
    PrintInputContainer,
    PrintInputLabel,
    PrintMain
} from "./styled.ts";
import {abonements} from "../../consts/abonements.ts";
import {books} from "../../consts/books.ts";
import ExampleDoc from '../../assets/output.pdf'

const PrintReport = () => {
    const handlePrint = () => {
        const iframe = document.createElement('iframe');
        iframe.src = ExampleDoc;
        iframe.style.width = "0";
        iframe.style.height = "0";
        document.body.appendChild(iframe);

        iframe.contentWindow?.print();

        document.body.removeChild(iframe);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = ExampleDoc;
        link.download = 'downloaded-pdf-file.pdf';
        link.click();
    };

    return (
        <PrintMain>
            <PrintHeader>Печать отчёта</PrintHeader>
            <PrintForm>
                <PrintInputContainer>
                    <PrintInputLabel>Абонемент:</PrintInputLabel>
                    <PrintInput>
                        {abonements.map((abonement) => (
                            <option key={abonement.FIO}>{abonement.FIO}</option>
                        ))}
                    </PrintInput>
                </PrintInputContainer>
                <PrintInputContainer>
                    <PrintInputLabel>Книга:</PrintInputLabel>
                    <PrintInput>
                        {books.map((book, index) => (
                            <option key={index}>{book.bookName}</option>
                        ))}
                    </PrintInput>
                </PrintInputContainer>
                <PrintButton onClick={handlePrint}>Печать</PrintButton>
                <PrintButton onClick={handleDownload}>Скачать</PrintButton>

            </PrintForm>
        </PrintMain>
    );
};

export default PrintReport;
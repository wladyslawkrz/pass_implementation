import {
    AddAbonementButton,
    AddAbonementForm,
    AddAbonementHeader,
    AddAbonementInput,
    AddAbonementInputContainer,
    AddAbonementInputLabel,
    AddAbonementMain
} from "./styled.ts";
import React, {useState} from "react";

const AddAbonement = () => {
    const [abonementData, setAbonementData] = useState<{ FIO: string, phone: string, address: string }>({
        FIO: "",
        address: "",
        phone: ""
    })

    const handleFIOChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAbonementData({...abonementData, FIO: e.target.value})
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAbonementData({...abonementData, address: e.target.value})
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAbonementData({...abonementData, phone: e.target.value})
    }

    const addAbonementClick = () => {
        alert(`Добавлен абонемент:\n
        ФИО: ${abonementData.FIO},
        Телефон: ${abonementData.phone},
        Адрес: ${abonementData.address}
        `)
    }


    return (
        <AddAbonementMain>
            <AddAbonementHeader>Добавить абонемент</AddAbonementHeader>
            <AddAbonementForm>
                <AddAbonementInputContainer>
                    <AddAbonementInputLabel>ФИО:</AddAbonementInputLabel>
                    <AddAbonementInput onChange={handleFIOChange}/>
                </AddAbonementInputContainer>
                <AddAbonementInputContainer>
                    <AddAbonementInputLabel>Телефон:</AddAbonementInputLabel>
                    <AddAbonementInput onChange={handlePhoneChange}/>
                </AddAbonementInputContainer>
                <AddAbonementInputContainer>
                    <AddAbonementInputLabel>Адрес:</AddAbonementInputLabel>
                    <AddAbonementInput onChange={handleAddressChange}/>
                </AddAbonementInputContainer>
                <AddAbonementButton onClick={addAbonementClick}>Добавить</AddAbonementButton>
            </AddAbonementForm>
        </AddAbonementMain>
    );
};

export default AddAbonement;
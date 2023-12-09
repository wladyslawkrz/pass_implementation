import {AbonementCard, AbonementsContainer, AbonementsMenuHeader, AbonementsMenuMain, AbonementText} from "./styled.ts";
import {abonements} from "../../consts/abonements.ts";

const AbonementList = () => {
    return (
        <AbonementsMenuMain>
            <AbonementsMenuHeader>Список абонементов</AbonementsMenuHeader>
            <AbonementsContainer>
                {abonements.map((abonement, index) => (
                    <AbonementCard key={index}>
                        <AbonementText>ФИО: {abonement.FIO}</AbonementText>
                        <AbonementText>Телефон: {abonement.phone}</AbonementText>
                        <AbonementText>Адрес: {abonement.address}</AbonementText>
                    </AbonementCard>
                ))}
            </AbonementsContainer>
        </AbonementsMenuMain>
    );
};

export default AbonementList;
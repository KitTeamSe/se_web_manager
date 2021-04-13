const size = 20;

export const menuListMock = [];
for (let index = 0; index < size; index++) {
    menuListMock.push({
        child: [],
        description: `Menu${index} Description`,
        menuId: `${index}`,
        menuOrder: 0,
        nameEng: `Menu${index} Name in Eng`,
        nameKor: `Menu${index} Name in Kor`
    })
}

export const menuByIdMock = ({id}) => {
    return {
    description: `Menu_by_id Description`,
    menuId: id,
    menuOrder: 0,
    nameEng: `Menu_by_id Name in Eng`,
    nameKor: `Menu_by_id Name in Kor`
}};


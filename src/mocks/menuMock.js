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

// 메뉴 생성 여부 성공/실패를 번갈아가면서 반환하도록 함.
export function* createMenuMockGenerator(){
    while(true){
        yield true;
        yield false;
    }
}

export function* deleteMenuMockGenerator(){
    while(true){
        yield true;
        yield false;
    }
}

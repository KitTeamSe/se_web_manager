const size = 20;

export const menuListMock = {code:0, message: "message", data: []};
for (let index = 0; index < size; index++) {
    menuListMock.data.push({
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
    nameKor: `Menu_by_id Name in Kor`,
    parentId: 1
}};

// 메뉴 생성 여부 성공/실패를 번갈아가면서 반환하도록 함.
export function* createMenuMockGenerator(){
    while(true){
        yield {status:200, result: { code: 1, data: 1, message: 'message1'}};
        yield {status:200, result: { code: 1, data: 1, message: 'message2'}};
        yield {status:200, result: { code: 2, data: 1, message: 'message3'}};
        yield {status:500, result: { code: 3, data: 1, message: 'message4'}};
    }
}

export function* deleteMenuMockGenerator(){
    while(true){
        yield {status:200, result: { code: 1, data: 1, message: 'message1'}};
        yield {status:200, result: { code: 1, data: 1, message: 'message2'}};
        yield {status:200, result: { code: 2, data: 1, message: 'message3'}};
        yield {status:500, result: { code: 3, data: 1, message: 'message4'}};
    }
}

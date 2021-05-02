const size = 20;

export const menuListMock = {code:0, message: "message", data: []};
for (let index = 0; index < size; index++) {
    menuListMock.data.push({
        child: [
            {
                child: [
                    {
                        child: [],
                        description: `${index+size}'s child Menu${index+size * 3} Description`,
                        menuId: `${index+size * 3}`,
                        menuOrder: `${index}`,
                        nameEng: `Menu${index+size * 3} Name in Eng`,
                        nameKor: `Menu${index+size * 3} Name in Kor`
                    },
                    {
                        child: [],
                        description: `${index+size}'s child Menu${index+size * 4} Description`,
                        menuId: `${index+size * 4}`,
                        menuOrder: `${index}`,
                        nameEng: `Menu${index+size * 4} Name in Eng`,
                        nameKor: `Menu${index+size * 4} Name in Kor`
                    }

                ],
                description: `${index}'s child Menu${index+size} Description`,
                menuId: `${index+size}`,
                menuOrder: `${index}`,
                nameEng: `Menu${index+size} Name in Eng`,
                nameKor: `Menu${index+size} Name in Kor`
            },
            {
                child: [],
                description: `${index}'s child Menu${index+size * 2} Description`,
                menuId: `${index+size * 2}`,
                menuOrder: `${index}`,
                nameEng: `Menu${index+size * 2} Name in Eng`,
                nameKor: `Menu${index+size * 2} Name in Kor`
            }
        ],
        description: `Menu${index} Description`,
        menuId: `${index}`,
        menuOrder: `${index}`,
        nameEng: `Menu${index} Name in Eng`,
        nameKor: `Menu${index} Name in Kor`
    })
}

export const menuByIdMock = ({id}) => (
    {
        message:"message",
        code:1,
        data:{
            description: `Menu_by_id Description`,
            menuId: id,
            menuOrder: 0,
            menuType: 'FOLDER',
            nameEng: `Menu_by_id Name in Eng`,
            nameKor: `Menu_by_id Name in Kor`,
            parentId: 1,
            url:'url'
        }
    }
);

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

export function* updateMenuMockGenerator(){
    while(true){
        yield {status:200, result: { code: 1, data: 1, message: 'message1'}};
        yield {status:200, result: { code: 1, data: 1, message: 'message2'}};
        yield {status:200, result: { code: 2, data: 1, message: 'message3'}};
        yield {status:500, result: { code: 3, data: 1, message: 'message4'}};
    }
}
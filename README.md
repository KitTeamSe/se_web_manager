# SE 게시판 관리자 페이지
## 개요
[SE Manage page](http://manager.se-testboard.duckdns.org/signin)
```
리뉴얼 된 SE 게시판(금오공과대학교 컴퓨터소프트웨어공학과 게시판) 관리를 위한 관리자 페이지 입니다.
권한이 없는 사용자에 대한 접근을 막고, 관리자는 전반적인 게시판 관리 기능을 수행합니다.
수기로 작성했던 교수님들의 시간표를 작성하고 저장할 수 있습니다.
```

## 기술 스택
### 사용
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=ffffff"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=ffffff"> <img src="https://img.shields.io/badge/Redux--Saga-999999?style=flat-square&logo=Redux-Saga&logoColor=ffffff"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=ffffff"><br>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=ffffff"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=ffffff"> <img src="https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&logo=Material-UI&logoColor=ffffff"> <img src="https://img.shields.io/badge/Font%20Awesome-339AF0?style=flat-square&logo=Font%20Awesome&logoColor=ffffff">

### 사용예정
<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=ffffff">

### 참고
- **"리액트를 다루는 기술(개정판) | 김민준"** 책을 토대로 시작했습니다.
- **Redux** 는 **Duck 타입**으로 작성하였습니다.
- **아토믹패턴**을 사용하였습니다.
   - 현재는 [**Line Entry의 Atomic Design 적용기**](https://www.youtube.com/watch?v=33yj-Q5v8mQ)를 참고하여 작성했습니다.
   - 기존 아토믹패턴의 Atoms - Molecules - Organisms - Templates - Pages 에서 <br>**Atoms - Modules - Templates** 로 간략하게 만들었습니다.
   - 적당한 boilerplate를 찾지 못해 최대한 의미에 맞게 작성하고 있습니다.
   - 처음 이 패턴을 사용하고자 하는 인원이 팀을 떠나 추후 바꿀 의향이 있습니다.

## 구현 사항
* 관리자 기능

|구분|기능|구현|
|:---:|:---:|:---:|
|**로그인 관리**|로그인|🟢|
||로그아웃|🟢|
||회원가입|🔴|
|**사용자 관리**|사용자 목록 조회|🟢|
||사용자 상세 조회|🟢|
||사용자 수정|🟢|
||사용자 삭제|🟢|
|**권한 관리**|권한 목록 조회|🟢|
||권한 상세 조회|🟢|
|**권한그룹 관리**|권한그룹 목록 조회|🟢|
||권한그룹 상세 조회|🟢|
||권한그룹 추가|🟢|
||권한그룹 수정|🟢|
||권한그룹 삭제|🟢|
|**권한-권한그룹 매핑 관리**|사용자-권한그룹 매핑 목록 조회|🟢|
||권한-권한그룹 매핑 상세 조회|🟢|
||권한-권한그룹 매핑 추가|🟡|
||권한-권한그룹 매핑 삭제|🟢|
|**사용자-권한그룹 매핑 관리**|사용자-권한그룹 매핑 목록 조회|🟢|
||사용자-권한그룹 매핑 상세 조회|🟢|
||사용자-권한그룹 매핑 추가|🟡|
||사용자-권한그룹 매핑 삭제|🟢|
|**메뉴 관리**|메뉴 목록 조회|🟡|
||메뉴 상세 조회|🟡|
||메뉴 추가|🟢|
||메뉴 수정|🟢|
||메뉴 삭제|🟢|
|**게시판 관리**|게시판 목록 조회|🟡|
||게시판 상세 조회|🟡|
||게시판 추가|🟢|
||게시판 수정|🟢|
||게시판 삭제|🟢|
|**게시글 관리**|게시글 목록 조회|🔴|
||게시글 상세 조회|🔴|
||게시글 추가|🔴|
||게시글 수정|🔴|
||게시글 삭제|🔴|
||게시글 이동|🔴|
|**태그 관리**|태그 목록 조회|🟢|
||태그 상세 조회|🟢|
||태그 추가|🟢|
||태그 수정|🟢|
||태그 삭제|🟢|
|**수신태그 관리**|수신태그 목록 조회|🟢|
||수신태그 상세 조회|🟢|
||수신태그 추가|🟢|
||수신태그 삭제|🟢|
|**취업정보 관리**|취업정보 업로드|🔴|
|**블랙리스트(IP차단) 관리**|블랙리스트 목록 조회|🟢|
||블랙리스트 상세 조회|🟢|
||블랙리스트 추가|🟢|
||블랙리스트 삭제|🟢|
|**알림 관리**|알림 목록 조회|🟢|
|**신고 관리**|신고 목록 조회|🟢|
||신고 상세 조회|🟢|
||신고 수정|🟢|
||신고 삭제|🟢|
|**로그 관리**||추가예정|
|**통계 관리**||추가예정|

* 시간표 관리

|구분|기능|구현|
|:---:|:---:|:---:|
|**강의실 관리**|강의실 목록 조회|🟡|
||강의실 상세 조회|🔴|
||강의실 추가|🟡|
||강의실 수정|🟡|
||강의실 삭제|🟡|
|**교원 관리**|교원 목록 조회|🟡|
||교원 상세 조회|🔴|
||교원 추가|🟡|
||교원 수정|🟡|
||교원 삭제|🟡|
|**교과 관리**|교과 목록 조회|🟡|
||교과 상세 조회|🔴|
||교과 추가|🟡|
||교과 수정|🟡|
||교과 삭제|🟡|
|**교시 관리**|교시 목록 조회|🟡|
||교시 상세 조회|🔴|
||교시 추가|🟡|
||교시 수정|🟡|
||교시 삭제|🟢|
|**시간표 관리**|협의중|추가예정|

구현완료: 🟢
구현중: 🟡
미구현: 🔴

## 설명
- 사용자와 권한, 권한그룹 추가 후 사용자와 권한을 권한그룹에 매핑합니다.
- 매핑하는 부분에 대해서는 추후 권한그룹에서 추가가 가능하게 생각중입니다.
- 수신태그관리는 관리자가 알림수신을 확인하기 위한 본인의 수신태그 입니다.
- 시간표관리의 사전정보(강의실, 교원, 교과, 교시)관리 부분은 다시 테이블형태로 바꿀 예정입니다.
- 로그관리와 통계관리는 google analytics 등을 사용해 추가할 예정입니다.

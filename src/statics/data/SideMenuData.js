import React from 'react';
import styled from 'styled-components';
import {
  faLink,
  faHashtag,
  faUser,
  faUsers,
  faUnlockAlt,
  faUserLock,
  faUserCog,
  faBars,
  faThLarge,
  faThList,
  faUserTag,
  faSuitcase,
  faBan,
  faBell,
  faExclamationTriangle,
  faDoorOpen,
  faChalkboardTeacher,
  faBook,
  faClock,
  faCode,
  faCog,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import {
  faCalendarAlt,
  faCalendarCheck
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleIconStyled = styled(FontAwesomeIcon)`
  font-size: 22px;
`;

const MenuIconStyled = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ManageListData = [
  {
    to: 'account',
    name: '사용자 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faUser} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'authority',
    name: '권한 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faUnlockAlt} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'authority_group',
    name: '권한그룹 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faUsers} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'authority_mapping',
    name: '권한-권한그룹 매핑',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faUserLock} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'account_mapping',
    name: '사용자-권한그룹 매핑',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faUserCog} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'menu',
    name: '메뉴 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faBars} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'board',
    name: '게시판 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faThLarge} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'post',
    name: '게시글 이동',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faThList} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'tag',
    name: '태그 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faHashtag} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'tag_listen',
    name: '수신 태그 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faUserTag} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'job',
    name: '취업정보 업로드',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faSuitcase} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'blacklist',
    name: 'IP차단 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faBan} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'notice',
    name: '알림 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faBell} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'report',
    name: '신고 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faExclamationTriangle} size="lg" />
      </IconWrapper>
    )
  }
];

const ScheduleListData = [
  {
    to: 'lecture_room',
    name: '강의실 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faDoorOpen} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'teacher',
    name: '교원 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faChalkboardTeacher} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'subject',
    name: '교과 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faBook} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'period',
    name: '교시 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faClock} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: 'schedule',
    name: '시간표 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faCalendarCheck} size="lg" />
      </IconWrapper>
    )
  }
];

const DevelopListData = [
  {
    to: 'http://swagger.se-testboard.duckdns.org/swagger-ui.html',
    name: 'Swagger (API)',
    icon: (
      <IconWrapper>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </IconWrapper>
    ),
    redirect: true
  },
  {
    to: 'http://npm.se-testboard.duckdns.org/',
    name: 'Nginx Proxy Manager',
    icon: (
      <IconWrapper>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </IconWrapper>
    ),
    redirect: true
  },
  {
    to: 'http://portainer.se-testboard.duckdns.org/',
    name: '포테이너',
    icon: (
      <IconWrapper>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </IconWrapper>
    ),
    redirect: true
  },
  {
    to: 'http://jenkins.se-testboard.duckdns.org/',
    name: '젠킨스',
    icon: (
      <IconWrapper>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </IconWrapper>
    ),
    redirect: true
  },
  {
    to: 'http://filetest.se-testboard.duckdns.org/',
    name: '파일 서버 테스트',
    icon: (
      <IconWrapper>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </IconWrapper>
    ),
    redirect: true
  },
  {
    to: '',
    name: '로그 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faThList} size="lg" />
      </IconWrapper>
    )
  },
  {
    to: '',
    name: '통계 관리',
    icon: (
      <IconWrapper>
        <MenuIconStyled icon={faChartPie} size="lg" />
      </IconWrapper>
    )
  }
];

const ManageNestedData = {
  name: '사이트 관리',
  icon: (
    <IconWrapper>
      <TitleIconStyled icon={faCog} size="lg" />
    </IconWrapper>
  )
};

const ScheduleNestedData = {
  name: '시간표 관리',
  icon: (
    <IconWrapper>
      <TitleIconStyled icon={faCalendarAlt} size="lg" />
    </IconWrapper>
  )
};

const DevelopNestedData = {
  name: '개발 관리',
  icon: (
    <IconWrapper>
      <TitleIconStyled icon={faCode} size="lg" />
    </IconWrapper>
  )
};

export {
  ManageListData,
  ScheduleListData,
  DevelopListData,
  ManageNestedData,
  ScheduleNestedData,
  DevelopNestedData
};

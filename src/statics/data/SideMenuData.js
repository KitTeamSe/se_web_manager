import React from 'react';
import {
  Menu,
  Dashboard,
  PostAdd,
  Label,
  Work,
  ViewList,
  Equalizer,
  Block,
  Notifications,
  Report,
  Person,
  Group,
  Schedule,
  Build,
  CalendarToday
} from '@material-ui/icons';
import AuthGroupListView from '../../components/templates/AuthGroupManagement/AuthGroupListView';
import AuthListView from '../../components/templates/AuthManagement/AuthListView';
import PostMoveView from '../../components/templates/PostManagement/PostMoveView';
import MenuListView from '../../components/templates/MenuManagement/MenuListView';
import BoardListView from '../../components/templates/BoardManagement/BoardListView';
import TagListView from '../../components/templates/TagManagement/TagListView';
import JobInfoUploadView from '../../components/templates/JobInfoUpload/JobInfoUploadView';
import LogListView from '../../components/templates/LogManagement/LogListView';
import StatisticsView from '../../components/templates/StatisticsManagement/StatisticsView';
import BlacklistListView from '../../components/templates/BlacklistManagement/BlacklistListView';
import NoticeListView from '../../components/templates/NoticeManagement/NoticeListView';
import ReportListView from '../../components/templates/ReportManagement/ReportListView';

const defaultPath = '/m';

const ManageListData = [
  {
    to: 'menu',
    name: '메뉴 관리',
    icon: <Menu />,
    page: <MenuListView />
  },
  {
    to: 'board',
    name: '게시판 관리',
    icon: <Dashboard />,
    page: <BoardListView />
  },
  {
    to: 'post',
    name: '게시글 이동',
    icon: <PostAdd />,
    page: <PostMoveView />
  },
  {
    to: 'tag',
    name: '태그 관리',
    icon: <Label />,
    page: <TagListView />
  },
  {
    to: 'job',
    name: '취업정보 업로드',
    icon: <Work />,
    page: <JobInfoUploadView />
  },
  {
    to: 'log',
    name: '로그 관리',
    icon: <ViewList />,
    page: <LogListView />
  },
  {
    to: 'statistics',
    name: '통계 관리',
    icon: <Equalizer />,
    page: <StatisticsView />
  },
  {
    to: 'blacklist',
    name: 'IP차단 관리',
    icon: <Block />,
    page: <BlacklistListView />
  },
  {
    to: 'notice',
    name: '알림 관리',
    icon: <Notifications />,
    page: <NoticeListView />
  },
  {
    to: 'report',
    name: '신고 관리',
    icon: <Report />,
    page: <ReportListView />
  },
  {
    to: 'authority_group',
    name: '권한그룹 관리',
    icon: <Group />,
    page: <AuthGroupListView />
  },
  {
    to: 'authority',
    name: '권한 관리',
    icon: <Person />,
    page: <AuthListView />
  }
];

const ScheduleListData = [
  {
    to: 'schedule',
    name: '시간표 관리1',
    icon: <Schedule />,
    page: <>시간표 메인</>
  },
  {
    to: 'schedule_2',
    name: '시간표 관리2',
    icon: <Schedule />,
    page: <>시간2표</>
  },
  {
    to: 'schedule_3',
    name: '시간표 관리3',
    icon: <Schedule />,
    page: <>시간3표</>
  },
  {
    to: 'schedule_4',
    name: '시간표 관리4',
    icon: <Schedule />,
    page: <>시간4표</>
  }
];

const ManageNestedData = {
  name: '사이트 관리',
  icon: <Build />
};

const ScheduleNestedData = {
  name: '시간표 관리',
  icon: <CalendarToday />
};

export {
  defaultPath,
  ManageListData,
  ScheduleListData,
  ManageNestedData,
  ScheduleNestedData
};

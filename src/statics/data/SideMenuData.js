import React from 'react';
import Menu from '@material-ui/icons/Menu';
import Dashboard from '@material-ui/icons/Dashboard';
import PostAdd from '@material-ui/icons/PostAdd';
import Label from '@material-ui/icons/Label';
import Work from '@material-ui/icons/Work';
import ViewList from '@material-ui/icons/ViewList';
import Equalizer from '@material-ui/icons/Equalizer';
import Block from '@material-ui/icons/Block';
import Notifications from '@material-ui/icons/Notifications';
import Report from '@material-ui/icons/Report';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import Schedule from '@material-ui/icons/Schedule';
import Build from '@material-ui/icons/Build';
import CalendarToday from '@material-ui/icons/CalendarToday';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import Class from '@material-ui/icons/Class';

import AuthGroupListPage from '../../components/templates/Manage/AuthGroupManagement/AuthGroupListPage';
import AuthListPage from '../../components/templates/Manage/AuthManagement/AuthListPage';
import PostMovePage from '../../components/templates/Manage/PostManagement/PostMovePage';
import MenuRouter from '../../components/templates/Manage/MenuManagement/MenuRouter';
import BoardListPage from '../../components/templates/Manage/BoardManagement/BoardListPage';
import TagListPage from '../../components/templates/Manage/TagManagement/TagListPage';
import JobInfoUploadPage from '../../components/templates/Manage/JobInfoUpload/JobInfoUploadPage';
import LogListPage from '../../components/templates/Manage/LogManagement/LogListPage';
import StatisticsPage from '../../components/templates/Manage/StatisticsManagement/StatisticsPage';
import BlacklistListPage from '../../components/templates/Manage/BlacklistManagement/BlacklistListPage';
import NoticeListPage from '../../components/templates/Manage/NoticeManagement/NoticeListPage';
import ReportListPage from '../../components/templates/Manage/ReportManagement/ReportListPage';

import LectureRoomListPage from '../../components/templates/Schedule/LectureRoomManagement/LectureRoomListPage';
import TeacherListPage from '../../components/templates/Schedule/TeacherManagement/TeacherListPage';
import SubjectListPage from '../../components/templates/Schedule/SubjectManagement/SubjectListPage';
import PeriodListPage from '../../components/templates/Schedule/PeriodManagement/PeriodListPage';
import ScheduleListPage from '../../components/templates/Schedule/ScheduleManagement/ScheduleListPage';

const ManageListData = [
  {
    to: 'menu',
    name: '메뉴 관리',
    icon: <Menu />,
    page: MenuRouter
  },
  {
    to: 'board',
    name: '게시판 관리',
    icon: <Dashboard />,
    page: BoardListPage
  },
  {
    to: 'post',
    name: '게시글 이동',
    icon: <PostAdd />,
    page: PostMovePage
  },
  {
    to: 'tag',
    name: '태그 관리',
    icon: <Label />,
    page: TagListPage
  },
  {
    to: 'job',
    name: '취업정보 업로드',
    icon: <Work />,
    page: JobInfoUploadPage
  },
  {
    to: 'log',
    name: '로그 관리',
    icon: <ViewList />,
    page: LogListPage
  },
  {
    to: 'statistics',
    name: '통계 관리',
    icon: <Equalizer />,
    page: StatisticsPage
  },
  {
    to: 'blacklist',
    name: 'IP차단 관리',
    icon: <Block />,
    page: BlacklistListPage
  },
  {
    to: 'notice',
    name: '알림 관리',
    icon: <Notifications />,
    page: NoticeListPage
  },
  {
    to: 'report',
    name: '신고 관리',
    icon: <Report />,
    page: ReportListPage
  },
  {
    to: 'authority_group',
    name: '권한그룹 관리',
    icon: <Group />,
    page: AuthGroupListPage
  },
  {
    to: 'authority',
    name: '권한 관리',
    icon: <Person />,
    page: AuthListPage
  }
];

const ScheduleListData = [
  {
    to: 'lecture_room',
    name: '강의실 관리',
    icon: <MeetingRoom />,
    page: LectureRoomListPage
  },
  {
    to: 'teacher',
    name: '교원 관리',
    icon: <Person />,
    page: TeacherListPage
  },
  {
    to: 'subject',
    name: '교과 관리',
    icon: <Class />,
    page: SubjectListPage
  },
  {
    to: 'period',
    name: '교시 관리',
    icon: <Schedule />,
    page: PeriodListPage
  },
  {
    to: 'schedule',
    name: '시간표 관리',
    icon: <CalendarToday />,
    page: ScheduleListPage
  }
];

const ManageNestedData = {
  name: '시간표 관리',
  icon: <CalendarToday />
};

const ScheduleNestedData = {
  name: '사이트 관리',
  icon: <Build />
};

export {
  ManageListData,
  ScheduleListData,
  ManageNestedData,
  ScheduleNestedData
};

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
import PersonAdd from '@material-ui/icons/PersonAdd';
import Group from '@material-ui/icons/Group';
import Schedule from '@material-ui/icons/Schedule';
import Build from '@material-ui/icons/Build';
import CalendarToday from '@material-ui/icons/CalendarToday';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import Class from '@material-ui/icons/Class';

const ManageListData = [
  {
    to: 'menu',
    name: '메뉴 관리',
    icon: <Menu />
  },
  {
    to: 'board',
    name: '게시판 관리',
    icon: <Dashboard />
  },
  {
    to: 'post',
    name: '게시글 이동',
    icon: <PostAdd />
  },
  {
    to: 'tag',
    name: '태그 관리',
    icon: <Label />
  },
  {
    to: 'job',
    name: '취업정보 업로드',
    icon: <Work />
  },
  {
    to: 'log',
    name: '로그 관리',
    icon: <ViewList />
  },
  {
    to: 'statistics',
    name: '통계 관리',
    icon: <Equalizer />
  },
  {
    to: 'blacklist',
    name: 'IP차단 관리',
    icon: <Block />
  },
  {
    to: 'notice',
    name: '알림 관리',
    icon: <Notifications />
  },
  {
    to: 'authority',
    name: '권한 관리',
    icon: <Person />
  },
  {
    to: 'authority_group',
    name: '권한그룹 관리',
    icon: <Group />
  },
  {
    to: 'authority_mapping',
    name: '권한-권한그룹 매핑',
    icon: <PersonAdd />
  },
  {
    to: 'account_mapping',
    name: '사용자-권한그룹 매핑',
    icon: <PersonAdd />
  },
  {
    to: 'report',
    name: '신고 관리',
    icon: <Report />
  }
];

const ScheduleListData = [
  {
    to: 'lecture_room',
    name: '강의실 관리',
    icon: <MeetingRoom />
  },
  {
    to: 'teacher',
    name: '교원 관리',
    icon: <Person />
  },
  {
    to: 'subject',
    name: '교과 관리',
    icon: <Class />
  },
  {
    to: 'period',
    name: '교시 관리',
    icon: <Schedule />
  },
  {
    to: 'schedule',
    name: '시간표 관리',
    icon: <CalendarToday />
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

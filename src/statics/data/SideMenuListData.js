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
  Group
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
const SideMenuListData = [
  {
    id: 'menu',
    name: '메뉴 관리',
    icon: <Menu />,
    page: <MenuListView />
  },
  {
    id: 'board',
    name: '게시판 관리',
    icon: <Dashboard />,
    page: <BoardListView />
  },
  {
    id: 'post',
    name: '게시글 이동',
    icon: <PostAdd />,
    page: <PostMoveView />
  },
  {
    id: 'tag',
    name: '태그 관리',
    icon: <Label />,
    page: <TagListView />
  },
  {
    id: 'job',
    name: '취업정보 업로드',
    icon: <Work />,
    page: <JobInfoUploadView />
  },
  {
    id: 'log',
    name: '로그 관리',
    icon: <ViewList />,
    page: <LogListView />
  },
  {
    id: 'statistics',
    name: '통계 관리',
    icon: <Equalizer />,
    page: <StatisticsView />
  },
  {
    id: 'blacklist',
    name: 'IP차단 관리',
    icon: <Block />,
    page: <BlacklistListView />
  },
  {
    id: 'notice',
    name: '알림 관리',
    icon: <Notifications />,
    page: <NoticeListView />
  },
  {
    id: 'report',
    name: '신고 관리',
    icon: <Report />,
    page: <ReportListView />
  },
  {
    id: 'authority_group',
    name: '권한그룹 관리',
    icon: <Group />,
    page: <AuthGroupListView />
  },
  {
    id: 'authority',
    name: '권한 관리',
    icon: <Person />,
    page: <AuthListView />
  }
];

export { defaultPath, SideMenuListData };

import React from 'react';
import AuthGroupListPage from '../../components/templates/Manage/AuthGroupManagement/AuthGroupListPage';
import AuthListPage from '../../components/templates/Manage/AuthManagement/AuthListPage';
import PostMovePage from '../../components/templates/Manage/PostManagement/PostMovePage';
import MenuListPageContainer from '../../components/templates/Manage/MenuManagement/MenuListPageContainer';
import BoardListPage from '../../components/templates/Manage/BoardManagement/BoardListPage';
import TagListPage from '../../components/templates/Manage/TagManagement/TagListPage';
import JobInfoUploadPage from '../../components/templates/Manage/JobInfoUpload/JobInfoUploadPage';
import LogListPage from '../../components/templates/Manage/LogManagement/LogListPage';
import StatisticsPage from '../../components/templates/Manage/StatisticsManagement/StatisticsPage';
import BlacklistListPage from '../../components/templates/Manage/BlacklistManagement/BlacklistListPage';
import NoticeListPage from '../../components/templates/Manage/NoticeManagement/NoticeListPage';
import ReportListPage from '../../components/templates/Manage/ReportManagement/ReportListPage';

import LectureRoomListPageContainer from '../../components/templates/Schedule/LectureRoomManagement/LectureRoomListPageContainer';
import TeacherListPageContainer from '../../components/templates/Schedule/TeacherManagement/TeacherListPageContainer';
import SubjectListPageContainer from '../../components/templates/Schedule/SubjectManagement/SubjectListPageContainer';
import PeriodListPageContainer from '../../components/templates/Schedule/PeriodManagement/PeriodListPageContainer';
import ScheduleListPage from '../../components/templates/Schedule/ScheduleManagement/ScheduleListPage';

const ManageRouteData = [
  {
    to: 'menu',
    page: <MenuListPageContainer />
  },
  {
    to: 'board',
    page: <BoardListPage />
  },
  {
    to: 'post',
    page: <PostMovePage />
  },
  {
    to: 'tag',
    page: <TagListPage />
  },
  {
    to: 'job',
    page: <JobInfoUploadPage />
  },
  {
    to: 'log',
    page: <LogListPage />
  },
  {
    to: 'statistics',
    page: <StatisticsPage />
  },
  {
    to: 'blacklist',
    page: <BlacklistListPage />
  },
  {
    to: 'notice',
    page: <NoticeListPage />
  },
  {
    to: 'report',
    page: <ReportListPage />
  },
  {
    to: 'authority_group',
    page: <AuthGroupListPage />
  },
  {
    to: 'authority',
    page: <AuthListPage />
  }
];

const ScheduleRouteData = [
  {
    to: 'lecture_room',
    page: <LectureRoomListPageContainer />
  },
  {
    to: 'teacher',
    page: <TeacherListPageContainer />
  },
  {
    to: 'subject',
    page: <SubjectListPageContainer />
  },
  {
    to: 'period',
    page: <PeriodListPageContainer />
  },
  {
    to: 'schedule',
    page: <ScheduleListPage />
  }
];

export { ManageRouteData, ScheduleRouteData };

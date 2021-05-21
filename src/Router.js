import React from 'react';
import { Route } from 'react-router-dom';
import { MANAGE_URL } from './statics/data/config';

import MenuListPageContainer from './components/templates/Manage/MenuManagement/MenuListPageContainer';
import MenuInfoPageContainer from './components/templates/Manage/MenuManagement/MenuInfoPageContainer';
import BoardListPageContainer from './components/templates/Manage/BoardManagement/BoardListPageContainer';
import BoardInfoPageContainer from './components/templates/Manage/BoardManagement/BoardInfoPageContainer';
import AuthorityListPageContainer from './components/templates/Manage/AuthorityManagement/AuthorityListPageContainer';
import AuthorityInfoPageContainer from './components/templates/Manage/AuthorityManagement/AuthorityInfoPageContainer';
import AuthorityGroupListPageContainer from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupListPageContainer';
import AuthorityGroupInfoPageContainer from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupInfoPageContainer';
import PostMovePage from './components/templates/Manage/PostManagement/PostMovePage';
import TagListPage from './components/templates/Manage/TagManagement/TagListPage';
import JobInfoUploadPage from './components/templates/Manage/JobInfoUpload/JobInfoUploadPage';
import LogListPage from './components/templates/Manage/LogManagement/LogListPage';
import StatisticsPage from './components/templates/Manage/StatisticsManagement/StatisticsPage';
import BlacklistListPage from './components/templates/Manage/BlacklistManagement/BlacklistListPage';
import NoticeListPage from './components/templates/Manage/NoticeManagement/NoticeListPage';
import ReportListPage from './components/templates/Manage/ReportManagement/ReportListPage';

import LectureRoomListPageContainer from './components/templates/Schedule/LectureRoomManagement/LectureRoomListPageContainer';
import TeacherListPageContainer from './components/templates/Schedule/TeacherManagement/TeacherListPageContainer';
import SubjectListPageContainer from './components/templates/Schedule/SubjectManagement/SubjectListPageContainer';
import PeriodListPageContainer from './components/templates/Schedule/PeriodManagement/PeriodListPageContainer';
import ScheduleListPage from './components/templates/Schedule/ScheduleManagement/ScheduleListPage';

const Router = ({ exact, to, children }) => (
  <Route exact={exact} path={`${MANAGE_URL}/${to}`} key={to}>
    {children}
  </Route>
);

const ManageRoute = () => (
  <>
    <Router exact to="menu">
      <MenuListPageContainer />
    </Router>
    <Router to="menu/:id">
      <MenuInfoPageContainer />
    </Router>
    <Router exact to="board">
      <BoardListPageContainer />
    </Router>
    <Router to="board/:id">
      <BoardInfoPageContainer />
    </Router>
    <Router to="post">
      <PostMovePage />
    </Router>
    <Router to="tag">
      <TagListPage />
    </Router>
    <Router to="job">
      <JobInfoUploadPage />
    </Router>
    <Router to="log">
      <LogListPage />
    </Router>
    <Router to="statistics">
      <StatisticsPage />
    </Router>
    <Router to="blacklist">
      <BlacklistListPage />
    </Router>
    <Router to="notice">
      <NoticeListPage />
    </Router>
    <Router to="report">
      <ReportListPage />
    </Router>
    <Router exact to="authority">
      <AuthorityListPageContainer />
    </Router>
    <Router to="authority/:id">
      <AuthorityInfoPageContainer />
    </Router>
    <Router exact to="authority_group">
      <AuthorityGroupListPageContainer />
    </Router>
    <Router to="authority_group/:id">
      <AuthorityGroupInfoPageContainer />
    </Router>
  </>
);

const ScheduleRoute = () => (
  <>
    <Router to="lecture_room">
      <LectureRoomListPageContainer />
    </Router>
    <Router to="teacher">
      <TeacherListPageContainer />
    </Router>
    <Router to="subject">
      <SubjectListPageContainer />
    </Router>
    <Router to="period">
      <PeriodListPageContainer />
    </Router>
    <Router to="schedule">
      <ScheduleListPage />
    </Router>
  </>
);

const Routes = () => (
  <>
    <ManageRoute />
    <ScheduleRoute />
  </>
);

export default Routes;

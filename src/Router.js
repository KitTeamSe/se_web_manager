import React from 'react';
import { Route } from 'react-router-dom';
import { MANAGE_URL } from './statics/data/config';

import MenuAddPage from './components/templates/Manage/MenuManagement/MenuAddPage';
import MenuUpdatePage from './components/templates/Manage/MenuManagement/MenuUpdatePage';
import MenuListPageContainer from './components/templates/Manage/MenuManagement/MenuListPageContainer';
import MenuInfoPageContainer from './components/templates/Manage/MenuManagement/MenuInfoPageContainer';
import BoardAddPage from './components/templates/Manage/BoardManagement/BoardAddPage';
import BoardUpdatePage from './components/templates/Manage/BoardManagement/BoardUpdatePage';
import BoardListPageContainer from './components/templates/Manage/BoardManagement/BoardListPageContainer';
import BoardInfoPageContainer from './components/templates/Manage/BoardManagement/BoardInfoPageContainer';
import TagAddPage from './components/templates/Manage/TagManagement/TagAddPage';
import TagUpdatePage from './components/templates/Manage/TagManagement/TagUpdatePage';
import TagListPageContainer from './components/templates/Manage/TagManagement/TagListPageContainer';
import TagInfoPageContainer from './components/templates/Manage/TagManagement/TagInfoPageContainer';
import AuthorityListPageContainer from './components/templates/Manage/AuthorityManagement/AuthorityListPageContainer';
import AuthorityInfoPageContainer from './components/templates/Manage/AuthorityManagement/AuthorityInfoPageContainer';
import AuthorityGroupAddPage from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupAddPage';
import AuthorityGroupUpdatePage from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupUpdatePage';
import AuthorityGroupListPageContainer from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupListPageContainer';
import AuthorityGroupInfoPageContainer from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupInfoPageContainer';
import PostMovePage from './components/templates/Manage/PostManagement/PostMovePage';
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

const MenuRoute = () => (
  <>
    <Router exact to="menu">
      <MenuListPageContainer />
    </Router>
    <Router to="menu/info/:id">
      <MenuInfoPageContainer />
    </Router>
    <Router exact to="menu/add">
      <MenuAddPage />
    </Router>
    <Router to="menu/update/:id">
      <MenuUpdatePage />
    </Router>
  </>
);

const BoardRoute = () => (
  <>
    <Router exact to="board">
      <BoardListPageContainer />
    </Router>
    <Router to="board/info/:id">
      <BoardInfoPageContainer />
    </Router>
    <Router exact to="board/add">
      <BoardAddPage />
    </Router>
    <Router to="board/update/:id">
      <BoardUpdatePage />
    </Router>
  </>
);

const AuthorityRoute = () => (
  <>
    <Router exact to="authority">
      <AuthorityListPageContainer />
    </Router>
    <Router to="authority/info/:id">
      <AuthorityInfoPageContainer />
    </Router>
  </>
);

const AuthorityGroupRoute = () => (
  <>
    <Router exact to="authority_group">
      <AuthorityGroupListPageContainer />
    </Router>
    <Router to="authority_group/info/:id">
      <AuthorityGroupInfoPageContainer />
    </Router>
    <Router exact to="authority_group/add">
      <AuthorityGroupAddPage />
    </Router>
    <Router to="authority_group/update/:id">
      <AuthorityGroupUpdatePage />
    </Router>
  </>
);

const TagRoute = () => (
  <>
    <Router exact to="tag">
      <TagListPageContainer />
    </Router>
    <Router to="tag/info/:id">
      <TagInfoPageContainer />
    </Router>
    <Router exact to="tag/add">
      <TagAddPage />
    </Router>
    <Router to="tag/update/:id">
      <TagUpdatePage />
    </Router>
  </>
);

const ManageRoute = () => (
  <>
    <MenuRoute />
    <BoardRoute />
    <Router to="post">
      <PostMovePage />
    </Router>
    <TagRoute />
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
    <AuthorityRoute />
    <AuthorityGroupRoute />
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

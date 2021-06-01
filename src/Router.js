import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MANAGE_URL } from './statics/data/config';

import BlacklistAddPage from './components/templates/Manage/BlacklistManagement/BlacklistAddPage';
import BlacklistListPageContainer from './components/templates/Manage/BlacklistManagement/BlacklistListPageContainer';
import BlacklistInfoPageContainer from './components/templates/Manage/BlacklistManagement/BlacklistInfoPageContainer';
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
import TagListenListPageContainer from './components/templates/Manage/TagListenManagement/TagListenListPageContainer';
import TagListenByAccountListPageContainer from './components/templates/Manage/TagListenManagement/TagListenByAccountListPageContainer';
import TagListenInfoPageContainer from './components/templates/Manage/TagListenManagement/TagListenInfoPageContainer';
import TagListenAddPage from './components/templates/Manage/TagListenManagement/TagListenAddPage';
import AccountListPageContainer from './components/templates/Manage/AccountManagement/AccountListPageContainer';
import AccountInfoPageContainer from './components/templates/Manage/AccountManagement/AccountInfoPageContainer';
import AccountUpdatePage from './components/templates/Manage/AccountManagement/AccountUpdatePage';
import AuthorityListPageContainer from './components/templates/Manage/AuthorityManagement/AuthorityListPageContainer';
import AuthorityInfoPageContainer from './components/templates/Manage/AuthorityManagement/AuthorityInfoPageContainer';
import AuthorityGroupAddPage from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupAddPage';
import AuthorityGroupUpdatePage from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupUpdatePage';
import AuthorityGroupListPageContainer from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupListPageContainer';
import AuthorityGroupInfoPageContainer from './components/templates/Manage/AuthorityGroupManagement/AuthorityGroupInfoPageContainer';
import AuthorityMappingAddPage from './components/templates/Manage/AuthorityMappingManagement/AuthorityMappingAddPage';
import AuthorityMappingListPageContainer from './components/templates/Manage/AuthorityMappingManagement/AuthorityMappingListPageContainer';
import AuthorityMappingInfoPageContainer from './components/templates/Manage/AuthorityMappingManagement/AuthorityMappingInfoPageContainer';
import AccountMappingAddPage from './components/templates/Manage/AccountMappingManagement/AccountMappingAddPage';
import AccountMappingListPageContainer from './components/templates/Manage/AccountMappingManagement/AccountMappingListPageContainer';
import AccountMappingInfoPageContainer from './components/templates/Manage/AccountMappingManagement/AccountMappingInfoPageContainer';
import ReportListPageContainer from './components/templates/Manage/ReportManagement/ReportListPageContainer';
import ReportInfoPageContainer from './components/templates/Manage/ReportManagement/ReportInfoPageContainer';
import ReportUpdatePage from './components/templates/Manage/ReportManagement/ReportUpdatePage';
import PostMovePage from './components/templates/Manage/PostManagement/PostMovePage';
import JobInfoUploadPage from './components/templates/Manage/JobInfoUpload/JobInfoUploadPage';
import NoticeListPageContainer from './components/templates/Manage/NoticeManagement/NoticeListPageContainer';
import NoticeInfoPageContainer from './components/templates/Manage/NoticeManagement/NoticeInfoPageContainer';
import LectureRoomListPageContainer from './components/templates/Schedule/LectureRoomManagement/LectureRoomListPageContainer';
import TeacherListPageContainer from './components/templates/Schedule/TeacherManagement/TeacherListPageContainer';
import SubjectListPageContainer from './components/templates/Schedule/SubjectManagement/SubjectListPageContainer';
import PeriodListPageContainer from './components/templates/Schedule/PeriodManagement/PeriodListPageContainer';
import ScheduleListPage from './components/templates/Schedule/ScheduleManagement/ScheduleListPage';

const Router = ({ exact, to, children }) => (
  <Route
    exact={exact}
    path={`${MANAGE_URL}/${to}`}
    key={to}
    render={() =>
      localStorage.getItem('token') ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: `/${MANAGE_URL}/account`
          }}
        />
      )
    }
  />
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

const AccountRoute = () => (
  <>
    <Router exact to="account">
      <AccountListPageContainer />
    </Router>
    <Router to="account/info/:id">
      <AccountInfoPageContainer />
    </Router>
    <Router to="account/update/:id">
      <AccountUpdatePage />
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

const AuthorityMappingRoute = () => (
  <>
    <Router exact to="authority_mapping">
      <AuthorityMappingListPageContainer />
    </Router>
    <Router to="authority_mapping/info/:id">
      <AuthorityMappingInfoPageContainer />
    </Router>
    <Router exact to="authority_mapping/add">
      <AuthorityMappingAddPage />
    </Router>
  </>
);

const AccountMappingRoute = () => (
  <>
    <Router exact to="account_mapping">
      <AccountMappingListPageContainer />
    </Router>
    <Router to="account_mapping/info/:id">
      <AccountMappingInfoPageContainer />
    </Router>
    <Router exact to="account_mapping/add">
      <AccountMappingAddPage />
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

const TagListenRoute = () => (
  <>
    <Router exact to="tag_listen">
      <TagListenListPageContainer />
    </Router>
    <Router exact to="tag_listen/list/:id">
      <TagListenByAccountListPageContainer />
    </Router>
    <Router to="tag_listen/info/:id">
      <TagListenInfoPageContainer />
    </Router>
    <Router exact to="tag_listen/add">
      <TagListenAddPage />
    </Router>
  </>
);

const BlacklistRoute = () => (
  <>
    <Router exact to="blacklist">
      <BlacklistListPageContainer />
    </Router>
    <Router to="blacklist/info/:id">
      <BlacklistInfoPageContainer />
    </Router>
    <Router exact to="blacklist/add">
      <BlacklistAddPage />
    </Router>
  </>
);

const ReportRoute = () => (
  <>
    <Router exact to="report">
      <ReportListPageContainer />
    </Router>
    <Router to="report/info/:id">
      <ReportInfoPageContainer />
    </Router>
    <Router to="report/update/:id">
      <ReportUpdatePage />
    </Router>
  </>
);

const NoticeRoute = () => (
  <>
    <Router exact to="notice">
      <NoticeListPageContainer />
    </Router>
    <Router to="notice/info/:id">
      <NoticeInfoPageContainer />
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
    <TagListenRoute />
    <Router to="job">
      <JobInfoUploadPage />
    </Router>
    <NoticeRoute />
    <BlacklistRoute />
    <AccountRoute />
    <AuthorityRoute />
    <AuthorityGroupRoute />
    <AuthorityMappingRoute />
    <AccountMappingRoute />
    <ReportRoute />
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

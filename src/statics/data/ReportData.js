export const ReportTypeItems = [
  {
    value: 'POST',
    label: '게시글'
  },
  {
    value: 'REPLY',
    label: '댓글'
  }
];

export const StatusItems = [
  {
    value: 'SUBMITTED',
    label: '제출'
  },
  {
    value: 'REVIEWING',
    label: '검토 중'
  },
  {
    value: 'PROCESSED',
    label: '처리됨'
  },
  {
    value: 'REJECTED',
    label: '거절됨'
  },
  {
    value: 'POSTPONED',
    label: '연기됨'
  }
];

export const ReportUpdateData = [
  {
    key: 'reportId',
    name: '신고 ID',
    type: 'number',
    placeholder: '0'
  },
  {
    key: 'status',
    name: '상태',
    items: StatusItems,
    type: 'dropdown',
    placeholder: '0'
  },
  {
    key: 'description',
    name: '비고',
    type: 'string',
    placeholder: '0'
  }
];

const ReportData = [
  {
    key: 'reportId',
    name: '신고 ID',
    type: 'number',
    placeholder: '0'
  },
  {
    key: 'reportType',
    name: '신고타입',
    items: ReportTypeItems,
    type: 'dropdown',
    placeholder: '0'
  },
  {
    key: 'targetId',
    name: '신고대상 ID',
    type: 'number',
    placeholder: '0'
  },
  {
    key: 'description',
    name: '비고',
    type: 'string',
    placeholder: '0'
  },
  {
    key: 'status',
    name: '상태',
    items: StatusItems,
    type: 'dropdown',
    placeholder: '0'
  },
  {
    key: 'processorId',
    name: '처리자 ID',
    type: 'number',
    placeholder: '0'
  },
  {
    key: 'reporterId',
    name: '신고자 ID',
    type: 'number',
    placeholder: '0'
  }
];

export default ReportData;

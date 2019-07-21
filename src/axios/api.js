import ajax from '../axios/ajax'

// 获取表格数据
export const getTableList = (params) => ajax.post('/table1', params)
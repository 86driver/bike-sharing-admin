import ajax from '../axios/ajax'

// 获取表格数据
export const getTableList = (params) => ajax.get('/table/list')
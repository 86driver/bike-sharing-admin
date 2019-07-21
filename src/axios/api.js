import ajax from '../axios/ajax'

// 获取表格数据
export const getTableList = (params) => ajax.get('/table/list', params)

// 获取城市管理表格数据
export const getCityList = (params) => ajax.get('/open_city', params)

// 城市开通
export const openCity = (params) => ajax.get('/city/open', params)
import { request } from '../request'
function getDetailList(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export default {
    getDetailList
}


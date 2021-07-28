import { getUserApi, getPageApi } from './api'

export const getUser = async () => {
    const { data, status} = await getUserApi()
    if(status !== 200) {
        console.log('获取失败')
    }else{
        console.log(data)
    }
}

export const getPage = async () => {
    const { data, status } = await getPageApi()
    if(status !== 200) {
        console.log('获取失败')
    }else{
        console.log(data)
    }
}
// import React from 'react';
import axios from 'axios'
import url from '../utils'

axios.defaults.baseURL = url.baseUrl
// React.Component.prototype.$axios = axios

export const getUser = async () => {
    const { data, status } = await axios.get('/user')
    if (status !== 200) {
    console.log('获取失败')
    } else {
        console.log(data)
    }
    // console.log(data)
}
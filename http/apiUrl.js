let baseUrl = ""
let baseH5Url = ""
if(process.env.NODE_ENV === 'development'){
    // 开发环境
    baseUrl = 'http://***.***.***.***:****' 
    baseH5Url = 'http://***.***.***.***:****';
}else{
    // 生产环境
    baseUrl = 'http://***.***.***.***:****' 
    baseH5Url = 'http://***.***.***.***:****';
}
export default {
    baseUrl,
    baseH5Url
}
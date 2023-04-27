
import request from './request.js'

let  $request = (url,data,methods='GET') => {	
	return new Promise((resolve,reject) => {		
		request({
			url,
			methods,
			data,
			success:(({data}) => {
				resolve(data)
			})
		})
	})
}

let  $get = (url,data) => {	
	return $request(url, data,'GET')
}
let  $post = (url,data) => {	
	return $request(url, data,'POST')
}
uni.$request = $request
uni.$get = $get
uni.$post = $post
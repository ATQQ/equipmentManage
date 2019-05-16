const baseUrl="http://localhost:8080/xxxx/"

$(function (params) {
    
    sessionStorage
    localStorage
    //----分割线
    name();

    /** */
    /**
     * 函数的作用
     * Number|String|Date|Array|Object|Bool
     * @param {Number} params1 参数1
     * @param {String} par2  日期
     * @ret
     */
    function name(params1,par2) {

        return 1;
    }
})

$.ajax({
    url:baseUrl+"user/login",
    type:"POST|GET|PUT|DELETE",
    heades:{
        'token':"ssss",
        "Content-Type":"application/json;charset=utf-8"
    },
    // dataType:,
    data:JSON.stringify({
        "titl":123
    }),
    success:function (res) {
        
    },
    error:function (e) {
        alert("网络错误");
    }
})

/**
 * 
 */
$('selector').on('event', function (params) {

})
$('selector').on('event','child',function (params) {
    
})


var data={
    "title":"sss",
    "array":[
        {
            "name":"小明",
            "sex":"男"
        },
        {
            "name": "小明",
            "sex": "男"
        }
    ]
}
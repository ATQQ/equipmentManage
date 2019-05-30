## 新增设备 
* url:**device/device**
* method:**POST**
* 响应示例
  1. 请求成功示例1
  ```js
    {
        "code":200,
        "data":{
            "eq_id":3,
            "eq_name":"数码相机",
            "eq_number":"dsfsf34444",
            "category_id":31,
            "introduce":"颠三倒四发顺丰",
            "amount":99,
            "loan":76,
            "number_use":999,
            "eq_date":33333333333,
            "eq_admin":"userAdin",
            "images":"[1.png,3242.jpg]"
        },
        "errMsg":"OK"
    }
  ```
  1. 请求成功示例2
  ```js
    {
        "code":200,
        "data":{
            "eq_id":1,
            "eq_name":"的数码相机",
            "eq_number":"dsfsf34444",
            "category_id":11,
            "introduce":"颠三倒四发顺丰",
            "amount":3,
            "loan":12,
            "number_use":399,
            "eq_date":332333333333,
            "eq_admin":"userAdin",
            "images":"[]"
        },
        "errMsg":"OK"
    }
  ```

    1. 设备编号已存在
  ```js
    {
        "code":201,
        "data":"",
        "errMsg":"eq_number is Exist"
    }
  ```

  1. 其它未知异常错误
  ```js
    {
        "code":206,
        "data":"",
        "errMsg":"unKnown fault"
    }
  ```


## 获取设备列表数据 
* url:**devices/{account}**
* method:**GET**
* 响应示例
  1. 请求成功示例
  ```js
    {
        "code":200,
        "data":{
            "equipment":[
                {
                "eq_id":3,
                "eq_name":"数码相机",
                "eq_number":"dsfsf34444",
                "category_id":31,
                "introduce":"颠三倒四发顺丰",
                "amount":99,
                "loan":76,
                "number_use":999,
                "eq_date":33333333333,
                "eq_admin":"userAdin",
                "images":"[1.png,3242.jpg]"
                },
                {
                "eq_id":1,
                "eq_name":"的数码相机",
                "eq_number":"dsfsf34444",
                "category_id":11,
                "introduce":"颠三倒四发顺丰",
                "amount":3,
                "loan":12,
                "number_use":399,
                "eq_date":332333333333,
                "eq_admin":"userAdin",
                "images":"[]"
                }
            ]
        },
        "errMsg":"OK"
    }
  ```

  2. 没有权限
  ```js
    {
        "code":201,
        "data":"",
        "errMsg":"no power"
    }
  ```

  3. 服务端错误
  ```js
    {
        "code":500,
        "data":"",
        "errMsg":"unKnown fault"
    }
  ```

## 删除指定设备 
* url:**device/device**
* method:**DELETE**
* 响应示例
  1. 请求成功示例
  ```js
    {
        "code":200,
        "data":{
            "status":true
        },
        "errMsg":"OK"
    }
  ```

    1. 没有权限
  ```js
    {
        "code":201,
        "data":"",
        "errMsg":"no power"
    }
  ```

  1. 其它未知异常错误
  ```js
    {
        "code":206,
        "data":"",
        "errMsg":"unKnown fault"
    }
  ```

## 更新设备部分字段内容 
* url:**device/device**
* method:**PUT**
* 响应示例
  1. 请求成功示例
  ```js
    {
        "code":200,
        "data":{
            "status":true
        },
        "errMsg":"OK"
    }
  ```

    1. 没有权限
  ```js
    {
        "code":201,
        "data":"",
        "errMsg":"no power"
    }
  ```

  1. 其它未知异常错误
  ```js
    {
        "code":206,
        "data":"",
        "errMsg":"unKnown fault"
    }
  ```



## 相关SQL
* 创建数据库
  * lab_equipment
    * ```sql
        CREATE DATABASE `lab_equipment` CHARACTER SET 'utf8';
      ```
* 创建表
  * equipment(设备)
    * ```sql
      CREATE TABLE `equipment` (
        `eq_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键自增非空',
        `eq_name` varchar(32) NOT NULL COMMENT '设备名称',
        `eq_number` varchar(32) NOT NULL COMMENT '设备编号',
        `category_id` int(11) NOT NULL COMMENT '设备所属分类',
        `introduce` varchar(200) NOT NULL COMMENT '设备简介',
        `amount` int(11) NOT NULL COMMENT '可外借数量库存',
        `loan` int(11) NOT NULL COMMENT '外借借出数量',
        `number_use` int(11) NOT NULL COMMENT '已被外借次数',
        `eq_date` datetime NOT NULL COMMENT '设备创建日期',
        `eq_admin` varchar(32) NOT NULL COMMENT '创建者账号',
        `images` varchar(255) NOT NULL COMMENT '设备相关图片',
        PRIMARY KEY (`eq_id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      ```
  * category(种类/分类)
    * ```sql
            CREATE TABLE `category` (
            `cg_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
            `cg_name` varchar(16) NOT NULL COMMENT '分类名称',
            `cg_date` datetime NOT NULL COMMENT '创建日期',
            `cg_admin` varchar(32) NOT NULL COMMENT '创建者账号',
            PRIMARY KEY (`cg_id`)
           )ENGINE=InnoDB DEFAULT CHARSET=utf8;
      ```   
  * eq_correlation(设备关联表)
    * ```sql
      CREATE TABLE `eq_correlation` (
        `eq_co_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '     主键',
        `eq_parent_id` int(11) NOT NULL COMMENT '主设备id',
        `eq_child_id` int(11) NOT NULL COMMENT '被关联的设备id',
        PRIMARY KEY (`eq_co_id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      ```



# 数据库表设计文档v1.0.1
**Tips**
* NN=NOT NULL
* PK=PrimaryKey
* N=default NULL
* UN=Unique
* AI=Auto Increase
### equipment(设备)

|    name     |     type     | property |      comment      |        example        |    default     |
| :---------: | :----------: | :------: | :---------------: | :-------------------: | :------------: |
|    eq_id    |     int      | PK/NN/AI |   主键自增非空    |           1           |   数据表自增   |
|   eq_name   | varchar(32)  |    NN    |     设备名称      |      xxx相机213       |    用户设置    |
|  eq_number  | varchar(32)  |  NN/UN   |     设备编号      |     231361sada13      |    用户设置    |
| category_id |     int      |    NN    |   设备所属分类    |     1(类型表主键)     |    用户设置    |
|  introduce  | varchar(200) |    NN    |     设备简介      |   一大段叙述性文字    |    用户设置    |
|   amount    |     int      |    NN    | 可外借数量(库存)  |          123          |    用户设置    |
|    loan     |     int      |    NN    | 外借数量/借出数量 |    100(<=库存总量)    |       0        |
| number_use  |     int      |    NN    | 已被借次数(销量)  |          666          |       0        |
|   eq_date   |   datetime   |    NN    |     创建日期      |  2019-01-01 00:00:00  |  数据创建时间  |
|  eq_admin   | varchar(32)  |    NN    |    创建者账号     |       admin666        | 管理员账号账号 |
|   images    | varchar(255) |    NN    |   设备相关图片    | ["abc.png","123.jpg"] |       []       |

### category(种类/分类)

|   name   |    type     | property |   comment    |       example       |   default    |
| :------: | :---------: | :------: | :----------: | :-----------------: | :----------: |
|  cg_id   |     int     | PK/NN/AI | 主键自增非空 |          1          |  数据表自增  |
| cg_name  | varchar(16) |  NN/UN   |   分类名称   |      电子产品       |   用户设置   |
| cg_date  |  datetime   |    NN    |   创建日期   | 2019-01-01 00:00:00 | 数据创建时间 |
| cg_admin | varchar(32) |    NN    |  创建者账号  |      admin666       |  创建者账号  |

### eq_correlation(设备关联表)
|     name     | type  | property |   comment    | example |  default   |
| :----------: | :---: | :------: | :----------: | :-----: | :--------: |
|   eq_co_id   |  int  | PK/NN/AI | 主键自增非空 |    1    | 数据表自增 |
| eq_parent_id |  int  |    NN    |   主设备id   |    3    |  用户选择  |
| eq_child_id  |  int  |    NN    |  附属设备id  |    4    |  用户选择  |



---
# 用户表(user)
|      name       |    type     | property |      comment       |   example   | default |
| :-------------: | :---------: | :------: | :----------------: | :---------: | :-----: |
|     user_id     |     int     | NN/PK/AI |        主键        |      1      |         |
|   user_number   | varchar(32) |    NN    |        工号        |   xxxxxx    |         |
|    password     | vachar(64)  |    NN    |        密码        |   a123456   | a123456 |
|   first_login   |     int     |    NN    |    是否初次登录    |      1      |    1    |
|   user_power    |     int     |    NN    |      用户权限      |      0      |    1    |
|  user_academy   | vachar(32)  |    NN    |      所属学院      |   艺术院    |
| user_profession | varchar(32) |    NN    |        专业        |  播音主持   |
|   user_phone    | varchar(32) |    N     |      电话号码      | 173xxxx5658 |
|     deposit     |     int     |    NN    |      押金金额      |   默认:0    |    0    |
|     open_id     | varchar(64) |   N/UN   | 微信用户身份标识id |  sadada...  |
```sql
CREATE TABLE `user` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_number` varchar(32) NOT NULL COMMENT '工号',
  `password` varchar(64) NOT NULL COMMENT '密码',
  `first_login` int(11) NOT NULL COMMENT '初次登录',
  `user_power` int(11) NOT NULL COMMENT '权限',
  `user_academy` varchar(32) NOT NULL COMMENT '学院',
  `user_profession` varchar(32) NOT NULL COMMENT '专业',
  `user_phone` varchar(32) DEFAULT NULL COMMENT '电话号码',
  `deposit` int(11) NOT NULL COMMENT '押金',
  `open_id` varchar(64) DEFAULT NULL COMMENT '微信身份',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

# 设备租借数据管理表/订单(order)
|      name       |    type     | property |   comment    |  example   |
| :-------------: | :---------: | :------: | :----------: | :--------: |
|    order_id     |     int     | PK/NN/AI |     主键     |     1      |
|  order_number   | varchar(32) |    NN    |   订单编号   |     10     |
|      eq_id      |     int     |    NN    |    设备id    |     9      |
|   order_start   |  datatime   |    NN    | 订单开始时间 | 2019-07-12 |
|    order_end    |  datatime   |    N     | 订单结束时间 | 2019-07-28 |
| order_lend_days |     int     |    NN    |   租借天数   |     30     |
|     number      |     int     |    NN    |   借用个数   |     8      |
|   user_number   | varchar(32) |    NN    |  租借人工号  |    xxxx    |
|  order_status   |     int     |    NN    |   订单状态   |     0      |
```sql
CREATE TABLE `order` (
  `order_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `order_number` varchar(32) NOT NULL COMMENT '订单编号',
  `eq_id` int(11) NOT NULL COMMENT '设备id',
  `order_start` datetime NOT NULL COMMENT '订单开始时间',
  `order_end` datetime DEFAULT NULL COMMENT '订单结束时间',
  `order_lend_days` int(11) NOT NULL COMMENT '租借天数',
  `number` int(11) NOT NULL COMMENT '租借个数',
  `user_number` varchar(32) NOT NULL COMMENT '租借人工号',
  `order_status` int(11) NOT NULL COMMENT '订单状态',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
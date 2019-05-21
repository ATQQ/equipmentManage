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
          `eq_co_id` int(11) NOT NULL COMMENT '主键',
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
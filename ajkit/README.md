# 公共组件目录 #
### 公共样式 ###
**详情**: 主题色等相同样式

**位置**: wmkit/styles/index.js
```sh
例: import { mainColor } from 'styles'

```


### 按钮 ###
**详情**: 各种形式按钮

**位置**: wmkit/button.js
```sh
例: 
import { Button } from 'wmkit'
const LongButton = Button.LongButton

(onClick() => {} 必传)

```


### 方法初始值 ###
**详情**: 定义Function的初始值

**位置**: wmkit/noop.js
```sh
例: 
import { noop } from 'wmkit'
```


### 与业务耦合的商品数量步进器 ###
**详情**: 实现加减数量的同时同步数据库

**位置**: biz/goods-num/index.js
```sh
例: 
import { GoodsNum } from 'biz'
```
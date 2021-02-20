### 使用create-react-app 来自动创建react项目
* 使用yarn、npm安装
* `create-react-app <name>`

### 从cdn引入
* !!要引入两样东西
* react.development.min.js (umd) universal module definition
* react-dom.development.min.js (umd)

#### 引入react
* 新手--命令行工具create-react-app
* 老手--配置webpack及rollup

### 关于React
* react与vue的最大区别在于，vue的功能封装的十分完善，很多直接简单套用调用即可，而react则需要十分多的js操作技巧，需要写的更多，但也很灵活。
* 例子；index1

  在index1.js中，想要操作使得n+1，必须要手动在render一次才行。

  **直接render是没有用的，必须要考虑到js的解析特性，使用函数封装一下App，才可以实时更新渠道外部变量**  面试注意6个6问题

* createElement方法创建一个虚拟DOM对象，React内部自动会将两个虚拟DOM进行对比，然后针对性渲染。    比较不同的方法称为DOM Diff算法！
#### React JSX jsx
* 将XML转换成React.createElement
* 弥补react代码太繁琐的弊端
* JSX是js的一种扩展
* JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能
##### 与Vue对比
* Vue通过vue-loader将模板语法通过内部编译器转变为构造选项render语法。
* React有类似的JSX   原始的jsx-loader后来集成到了babel-loader中（webpack内部集成）

#### 引入jsx
1. 通过cdn（不常用）babel-standalone

  示例 index11.html 与index1.html效果一致
  * 在生产环境中永不使用这种方式，太低效。
2. 通过webpack + babel-loader
* 配置麻烦
3. 使用create-react-app 默认已经配置完毕
* 注意事项
  * class变成className
  * 变量 { n }
  * 对象{ {name: 'myObj'} }
* 例子；app1.js

#### 在jsx中使用if-else
* Vue写法
<div v-if="n % 2 === 0">n is even number</div>

  <div v-else>n is odd number</div>
* react写法如下
  ```
  const Component = () => {
    return (
      <div>
        { n % 2 === 0 ? <div>n is even number</div> : <div>n is odd number</div> }
      </div>  
    )
  }
  ```
  另一种自由写法
  ```
  const Component = () => {
    const inner = n % 2 === 0 ? <div>n is even number</div> : <div>n is odd number</div>
    const content = (
      <div>
        {inner}
      </div>
    )
    return content
  }
  ```
  * 单层花括号里放入表达式

# JSX里一起皆js 自由度很高

#### 在React中使用for
* Vue写法
<div v-for="(value, index) in list" :key="index"> {{ value }} </div>
* react写法
```
const Component = (props) => {
  return (
    <div>
      { props.list.map((item) => {
        return <div>value is {item}</div>
      }) }
    </div>
  )
}
// 必须要加上key
```
* 例子；app2.js
  
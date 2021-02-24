### React的组件
* React主要分为元素与组件
* 约定元素变量名小写、组件大写
* 元素一般是createElement方法返回的是元素，组件则是一个函数，它返回React元素。
  * `const Div = () => React.createElement('div', null, [children])`

#### 组件分类
1. 函数组件

  function Hi(props) {
    return <h1>Hi, {props.name}</h1>
  }

  * props是外部属性，需要外部传入

  <Hi name='jjj' />
2. 类组件
  
  class Hi extends React.Component {
    render() {
      return <h1>Hi, {this.state.name}</h1>
    }
  }

  使用 <Hi name='jjj' />

-------------------------------------------------
# 工具 Babel online 
* 将模板XML语法转义为React.createElement
----------------------------------------
#### React.createElement方法
* 接收三种形式的参数
  1. 字符串
  2. 函数（自动调用，取得返回值）
  3. 类 （自动加new，得到实例，并调用实例的render方法）

#### 学习React组件的典型例子
* 例子：app1.js
  
  组件需要配合属性（相当于Vue的data），外部属性为props，内部属性为state

  在类组件中要使用setState方法

  React.useState方法后续研究。
#### 使用React props与state
1. 使用props
   * props特指外部属性，函数组件与类组件的用法有些区别

   例子；app1.js
2. 使用state
* 类组件
   * 特指内部属性，相当于Vue的data
   * React有数据不可变的思想，所以改变state数据，需要手动传入新对象，通过类组件中setState方法。
   * 若要改变状态，则使用新对象替换原有对象，而不在原有对象上修改。
   * setState方法是异步的，因此最好传入一个函数，更加灵活。
* 函数组件
  * 在函数组件中使用state，通过React.useState方法。
  * [value, setValue] = React.useState(0)
  * setValue 方法实际上不能改变value值，而是采取别的方法
3. 总结
  * React的这些理念，是函数式理念
  ![总结](sumUp1.png)

##### 复杂state情况
* 类组件
  * 当state中有多个数据时，使用setState对其中一个数据进行修改，剩下的数据不会被undefined，而是自动沿用以前的数据。
* 函数组件
  * 与类组件一致，但是函数组件使用起来非常简单。推荐！
  * 函数组件也可以使用state和setState，但函数组件的setState不会自动合并，不推荐用
* 例子；app11.js
* 另外当出现对象数据时，也不会自动合并，要善于使用扩展运算符，手动合并。

  例子；app12.js

#### React组件中的事件绑定
1. 类组件
* 推荐写法

  `<button onClick={() => {this.add()}}>xxx</button>`

  * 不能写成`<button onClick={this.add}>xxx</button>`

    React在内部相当于button.onClick.call()即button.add.call() 默认执行环境是window。

    或者还可以使用 `<button onClick={this.add.bind(this)}>xxx</button>`
* 目前最推荐、最好的写法
  * 写在类组件的自身属性里

    例子；app2.js
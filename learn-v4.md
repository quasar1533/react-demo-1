## React函数组件

#### 函数组件
* 特点：简短，方便书写，使用简单。
* 关注点：

  函数组件如何使用state 与生命周期钩子
#### 通过useState与useEffect方法
* React直至16.8版本后开始支持这些方法。
* 例子：app1.js

  简单理解一下这两个方法如何模拟state与hook。

  函数组件里的一切自然都使用函数去模拟实现。 

* 使用useEffect来模拟一下componentWillUnmount

  例子；app2.js

  演示了useState的灵活使用。

#### 函数组件一切皆函数
* 函数组件的特性使得我们可以自定义钩子， useXXX

  并将其放置在单独文件中，以便复用
* 例子；app3.js

  useEffect方法无法做到在页面从无到有的渲染时不执行。
  自定义一个useUpdate方法来实现这一点。
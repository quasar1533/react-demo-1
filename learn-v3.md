## React 类组件详解。生命周期等

#### 过时class组件
* ES5 
* const A = React.createClass({
    render() {
      return (
        <div>xxx</div>
      )
    }
  })

#### props
* props数据由外部传入，会被封装为一个对象。
  
  例子；app1.js

  在类组件内部使用this.props 即为外部传入的数据的对象的地址
* React规定最好不要去改写props的值

  既然是外部数据，那么原则上就应该由外部去修改。
##### 了解react hooks
* 一个在某个特定阶段执行的函数就是钩子

  例子；app1.js

  使用一个已经过时不再使用的钩子来演示一下，componentWillReceiveProps(newProps, newContext)

* props的作用
  
  接收外部数据、函数。只读不写

#### state与setState
* setState异步。

  this.setState(state, callback)

  使用函数来实时保存更新。会被react封装托管。

  例子；app2.js

* setState有自动合并功能，shallow merge自动进行以及合并。

#### React声明周期
* 几个重要的声明周期
  constructor()
  shouldComponentUpdate()
  render()
  componentDidMount()
  componentDidUpdate()
  componentWillUnmount()

* 其他声明周期
  static getDerivedStateFromProps()
  getSnapShotBeforeUpdate()
  static getDerivedStateFromError()
  componentDidCatch()

##### constructor
* 初始化props和state、
* 用来bind this， 可以用新语法替代

##### shouldComponentUpdate
* 返回值true、false来是否阻止UI更新
* 高自由度
* 对比Vue，数据变动，立即更新，而React可以选择
* 例子；app3.js
  
  React的原则是数据不可变，新的数据对应新的UI渲染，所以尽管数据一模一样，但对象却是不一样的，所以React会重新渲染，这时就可以使用该生命周期来操作。

##### React.PureComponent
* 检查数据是否改变并决定是否重新render是一个很必要的功能，除了可以手动，React中也有可以自动检验的组件
* 例子app31.js
  
  会自动个对比， 浅对比！

* 这一切都是React的编程哲学

#### render周期
* 虚拟DOM是一个对象，log出来查看
* 例子；app4.js
  
  原则，jsx语法必须包含在一个封闭tag里。
  可以使用<React.fragment> 等价于 <>

  render函数十分的灵活，配合判断和循环。
  
* Each children in a list should have a unique key prop in React.

  所以对于循环结构都要加上key。

#### componentDidMount 周期
* 在元素插入页面后执行的代码，这些代码依赖于DOM。

  例子；app5.js

  在元素挂载后取到元素宽度。

* 这个钩子适合发起加载数据的AJAX请求
* 首次渲染必会执行该钩子

##### 关于React ref 
* 在组件中的任意地方想要获取页面中的元素，使用React提供的refs 要更优于使用id。
* 例子； app5.js

#### componentDidUpdate 钩子
* UI更新**后**执行代码
* ！！！首次渲染不会执行该钩子
* ！！ 在钩子中setState可能引起无限循环
* componentDidUpdate(prevProps, prevState, snapshot)

#### componentWillUnmount 钩子
* 组件将要从页面移至内存并在内存中销毁前执行
* unmount后的组件无法再次mount
* 专用于治理污染。  如某组件创建了timer，listener，ajax等，需要在销毁前取消掉。

  **重要**


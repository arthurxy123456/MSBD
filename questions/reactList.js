let reactList = [
  {
    question: `
      1.什么是JSX？
      `,
    answer: `
      JSX是一种Javascript的语法扩展，可以很好的描述UI的架构。
      是React.createElement的语法糖。
      浏览器不能直接解析JSX文件，需要通过Bable进行转译成js。
      `
  },
  {
    question: `
      2.讲一下虚拟Dom？
      `,
    answer: `
      虚拟Dom：虚拟Dom是描述真实Dom的js对象。<br/>
      特点：<br/>
      1.处理了浏览器兼容性问题,避免用户操作真实dom,不容易出错<br/>
      2.可以实现跨平台开发<br/>
      3.在更新的时候,比较两棵虚拟DOM树的差异,差异化更新
      `
  },
  {
    question: `
      3.类组件和函数组件之间的区别是什么？
      `,
    answer: `
      相同点：它们都可以接收属性并且返回React元素。<br/>
      不同点：<br/>
      1.类组件需要创建实例,是基于面向对象的方式编程,
      函数组件不需要创建实例,接收输入,返回输出,是基于函数编程的思想.<br/>
      2.类组件需要创建并且保持实例，会占用一定的内存，
      函数组件不需要创建实例，可以节约内存占用。<br/>
      3.类组件有完整的生命周期,
      函数组件没有生命周期(现在通过useEffect实现类似生命周期的功能)<br/>
      4.类组件通过shouldComponent和pureComponent跳过更新,
      而函数组件可以通过React.memo跳过更新。<br/>
      ***延伸题：<br/>
      源码如何区分函数组件与类组件？<br/>
      通过Component.prototype.isReactComponent属性来判断
      `
  },
  {
    question: `
      4.setState 同步还是异步？（比较常问）
      `,
    answer: `
    (1)React生命周期中以及事件处理中,为异步<br/>
    (2)原生方法(setTimeout,setInnerval,addEventListener)中是同步的<br/>
    原理:setState本身并不是异步,只是因为react的性能优化机制体现为异步。<br/>
    在react的生命周期函数或者作用域下为异步,在原生的环境下为同步<br/>
    因为每次调用setState都会触发更新,异步操作是为了提高性能,
    将多个状态合并一起更新,减少re-render调用
    `
  },
  {
    question: `5.你知道那些hook函数？`,
    answer: `
    useState():状态管理钩子.调用useState会返回一个数组,
    数组的第一个元素是创建的状态,第二个元素是修改状态的方法<br/>
    useEffect():副作用钩子.它接收两个参数,第一个是回调函数,第二个是依赖数组,
    useEffect的作用类似类式组件的生命周期<br/>
    useContext():共享钩子 该钩子的作用是,在组件之间共享状态<br/>
    useRef():获取dom元素,在生命周期中只会初始化一次
    <br/>
    <br>
    useMemo和useCallback的异同:
    <br/>
    useMemo和useCallback接收的参数都是一样,第一个参数为回调,
    第二个参数为要依赖的数据
    <br/>
    相同点:
    <br/>
    1.仅仅依赖数据,发生变化,才会重新计算结果,也就是起到缓存的作用
    <br/>
    两者区别:
    <br/>
    1.useMemo主要用于缓存计算结果的值,应用场景如:
    需要计算的状态<br/>
    2.useCallback主要用于缓存函数,应用场景如:
    因为函数式组件每次任何一个state的变化整个组件都会被重新刷新,
    一些函数是没有必要被重新刷新的,此时就应该缓存起来,提高性能,
    和减少资源浪费
    <br/>
      `
  },
  {
    question: `
      6.React事件绑定的方式有哪些？区别？
      `,
    answer: `
    1.render方法中使用bind <br/>
    2.render方法中使用箭头函数<br/>
    3.constructor中bind <br/>
      `
  },

  {
    question: `
      7.受控组件和非受控组件的区别
      `,
    answer: `
    受控组件:受react控制的组件,input等表单输入框值不存在于dom中,
    而是以我们的组件状态存在.每当我们想要更新值时,
    我们就像以前一样调用setState<br/>
    不受控制组件:表单数据由dom处理,而不是react组件,refs用于获取其当前值
      `
  },
  {
    question: `
      8.react组件之间如何通信
      `,
    answer: `
    父传子:props 子传父:子调用父组件中的函数并传参<br/>
    兄弟:使用发布订阅库PubSub.js;使用redux或mobx
      `
  },
  {
    question: `
      9.说说react中引入css的方式有哪几种？区别？
      `,
    answer: `
    1.在组件内直接使用<br/>
    2.组件中引入 .css 文件<br/>
    3.组件中引入 .module.css 文件,可以解决类名相同导致的样式冲突
      `
  },
  {
    question: `
      10.如何在React中使用innerHTML
      `,
    answer: `
      增加dangerouslySetInnerHTML属性，并且传入对象的属性名叫_html
      `
  },
  {
    question: `
      11.state 和 props 区别是啥？
      `,
    answer: `
      1.state 是组件自己管理数据，控制自己的状态，可变；<br/>
      2.props 是外部传入的数据参数，不可变；<br/>
      3.没有state的叫做无状态组件，有state的叫做有状态组件；<br/>
      `
  },
  {
    question: `
      12.super()和super(props)有什么区别？
      `,
    answer: `
      在React中，类组件基于ES6，所以在constructor中必须使用super
      在调用super过程，无论是否传入props，React内部都会将porps赋值给组件实例porps属性中
      如果只调用了super()，那么this.props在super()和构造函数结束之间仍是undefined
      `
  },
  {
    question: `
      13.什么是diff算法？
      `,
    answer: `
      diff算法，就是用来找出两段文本之间的差异的一种算法。
      Diff算法就是在虚拟DOM树从上至下进行同层比对，如果上层已经不同了，那么下面的DOM全部重新渲染。<br/>
      这样的好处是算法简单，减少比对次数，加快算法完成速度。
      `
  },
  {
    question: `
      14.vdom为什么用diff算法？
      `,
    answer: `
      由于DOM操作是非常消耗性能的，就可以通过diff算法来减少DOM操作。
      `
  },
  {
    question: `
      15.在react中怎么实现组件间的过渡动画？
      `,
    answer: `
      在react中，react-transition-group是一种很好的解决方案，其为元素添加enter，enter-active，exit，exit-active这一系列勾子
      可以帮助我们方便的实现组件的入场和离场动画<br/>
      其主要提供了三个主要的组件：<br/>
      1.CSSTransition：在前端开发中，结合 CSS 来完成过渡动画效果<br/>
      2.SwitchTransition：两个组件显示和隐藏切换时，使用该组件<br/>
      3.TransitionGroup：将多个动画组件包裹在其中，一般用于列表中元素的动画
      `
  },
  {
    question: `
      16.React有哪些性能优化的方法？
      `,
    answer: `
    1.使用memo来缓存组件;<br/>
    2.使用useMemo缓存需要大量的计算的数据;<br/>
    3.style样式避免使用内联对象:<br>
    使用内联对象时,react会在每次渲染时重新创建对象,
    ,组件通过浅层比较发现接受的props一直变化,
    于是组件便一直重新渲染<br>
    不推荐这样写:<br>
    function Mc(){
        return(
            <div style={{color:'red'}}>
              hello
            </div>
        )
    }<br/>
    推荐这样写:<br>
    let sty = {color:'red'};<br/>
    function Mc(){
        return(
            <div style={sty}>
              hello
            </div>
        )
    }<br/>
    4.使用React.Fragment避免添加额外的DOM<br/>
    5.使用lazy懒加载不是立即需要使用的组件<br>
      `
  },
  {
    question: `
      17.React中refs的作用是什么？
      `,
    answer: `
      Refs 提供了一种方式，用于访问在 render 方法中创建的 React 元素或 DOM 节点。<br/>
      Refs 应该谨慎使用，如下场景使用 Refs 比较适合：<br/>
      1.处理焦点、文本选择或者媒体的控制<br/>
      2.触发必要的动画<br/>
      3.集成第三方 DOM 库<br/>
      `
  },
  {
    question: `
      18.react-router 里的 Link 标签和 a 标签的区别
      `,
    answer: `
      对比 <a> 标签, Link 避免了不必要的重新渲染。<br/>
      Link 跳转做了三件事情：<br/>
      1.有onclick那就执行onclick <br/>
      2.click的时候阻止a标签默认事件<br/>
      3.根据跳转 href，用 history 跳转，此时只是链接变了，并没有刷新页面<br/>
      而 a 标签就是普通的超链接了，用于从当前页面跳转到href指向的另一个页面（非锚点情况）。<br/>
      `
  },
  {
    question: `
      19.React-Router的路由有几种模式？
      `,
    answer: `
      React-Router 支持使用 hash（对应 HashRouter）和 browser（对应 BrowserRouter） 两种路由规则， <br/>
      react-router-dom 提供了 BrowserRouter 和 HashRouter 两个组件来实现应用的 UI 和 URL 同步：<br/>
      1.BrowserRouter 创建的 URL 格式：http://xxx.com/path<br/>
      2.HashRouter 创建的 URL 格式：http://xxx.com/#/path
      `
  },
  {
    question: `
      20.Redux 和 Vuex 有什么区别，它们有什么共同思想吗？
      `,
    answer: `
    相同点：<br/>
    1.都是共享数据的库<br/>
    2.流程一致:定义全局state,触发修改state<br/>
    不同点：<br/>
    从实现原理上来说：<br/>
    1.Redux使用的是不可变数据,而Vuex的数据是可变的;<br>
    2.Redux每次都是用新的state替换旧的state,而Vuex是直接修改;<br/>
    3.Redux在检测数据变化的时候,是通过 diff 的方式比较差异的,
    而Vuex其实和Vue的原理一样,是通过 getter/setter来比较的<br/>
    从表现层来说：<br/>
    1.vuex定义了state、getter、mutation、action四个对象;
    redux定义了state、reducer、action<br/>
    2.vuex中state统一存放,方便理解;
    reduxstate依赖所有reducer的初始值<br/>
    3.vuex有getter,目的是快捷得到state;
    redux没有这层,react-redux mapStateToProps参数做了这个工作<br/>
    4.vuex中action有较为复杂的异步ajax请求;
    redux中action调用异步ajax依赖redux-thunk插件<br/>
    `
  },
  {
    question: `
      21.Redux中的connect有什么作用？
      `,
    answer: `
      connect负责连接React和Redux
      `
  },
  {
    question: `
      22.mobox 和 redux 有什么区别？
      `,
    answer: `
      **（1）共同点**<br/>
      - 为了解决状态管理混乱，无法有效同步的问题统一维护管理应用状态;<br/>
      - 某一状态只有一个可信数据来源（通常命名为store，指状态容器）;<br/>
      - 操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）;<br/>
      - 支持将store与React组件连接，如react-redux，mobx- react;<br/>
      **（2）区别**<br/>
      Redux更多的是遵循Flux模式的一种实现，是一个 JavaScript库，它关注点主要是以下几方面∶ <br/>
      - Action∶ 一个JavaScript对象，描述动作相关信息，主要包含type属性和payload属性∶ <br/>
            o type∶ action 类型; o payload∶ 负载数据;<br/>
      - Reducer∶ 定义应用状态如何响应不同动作（action），如何更新状态;<br/>
      - Store∶ 管理action和reducer及其关系的对象，主要提供以下功能∶ <br/>
            o 维护应用状态并支持访问状态(getState());<br/>
            o 支持监听action的分发，更新状态(dispatch(action)); <br/>
            o 支持订阅store的变更(subscribe(listener));<br/>
      - 异步流∶ 由于Redux所有对store状态的变更，都应该通过action触发，异步任务（通常都是业务或获取数据任务）也不例外，而为了不将业务或数据相关的任务混入React组件中，就需要使用其他框架配合管理异步任务流程，如redux-thunk，redux-saga等; <br/>
      Mobx是一个透明函数响应式编程的状态管理库，它使得状态管理简单可伸缩∶<br/>  
      -  Action∶定义改变状态的动作函数，包括如何变更状态;<br/>
      -  Store∶ 集中管理模块状态（State）和动作(action)<br/>
      -  Derivation（衍生）∶ 从应用状态中派生而出，且没有任何其他影响的数据<br/>    
      **对比总结：**<br/>     
      - redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中<br/>
      - redux使用plain object保存数据，需要手动处理变化后的操作;mobx适用observable保存数据，数据变化后自动处理响应的操作<br/>
      - redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数;mobx中的状态是可变的，可以直接对其进行修改<br/>
      - mobx相对来说比较简单，在其中有很多的抽象，mobx更多的使用面向对象的编程思维;redux会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用<br/>
      - mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测;而redux提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易<br/>
      `
  },
  {
    question: `
      23.说说对Redux中间件的理解？常用的中间件有哪些？实现原理？
      `,
    answer: `
    在使用redux时,改变state的一个固定套路是调用store.dispatch(action)方法,
    将action送到reducer中.所谓中间件,就是在dispatch发送action和
    action到达reducer之间,加入一些中间层,对action进行处理<br/>
    如:redux-thunk:用于异步操作<br/>
    redux-logger:用于日志记录
      `
  },
  {
    question: `
      24.说说你对React Router的理解？常用的Router组件有哪些？
      `,
    answer: `
      react-router可以实现无刷新的条件下切换显示不同的页面<br/>
      BrowserRouter、HashRouter<br/>
      Route<br/>
      Link、NavLink<br/>
      switch<br/>
      redirect
      `
  },
  {
    question: `
      25.react的生命周期
      `,
    answer: `
      componentDidMount() {} /* 组件渲染完成时触发 */<br/>
      componentDidUpdate(){} /* 组件更新时触发 */<br/>
      componentWillUnmount(){}/* 组件销毁前触发 */
      `
  },
  {
    question: `
      26.如何创建ref的方式？如何获取真实dom？
      `,
    answer: `
    使用ref可以获取真实多么元素<br/>
    有三种方式的ref:<br/>
    1.字符串形式的ref:ref='myref'<br/>
    2.回调函数形式的ref:ref={(c)=>{this.myref=c}}<br/>
    3.使用createRef创建ref对象:myref=React.createRef()<br/>
      `
  },
  {
    question: `
      27.列出 Redux 的组件
      `,
    answer: `
    1.store:就是保存数据的地方,可以看成一个容器,整个应用只能有一个store<br/>
    2.state:redux中的数据状态<br/>
    3.action:action是一个对象,是dispatch方法传的参数,包含两个属性:<br/>
    type:事件名<br/>
    data:事件要传递的参数<br/>
    4.reducer:reducer是一个函数,他接受当前的state和action,返回新的state<br/>
      `
  },
  {
    question: `
    28.组件通信的方式有哪些
    `,
    answer: `
    - ⽗组件向⼦组件通讯: ⽗组件可以向⼦组件通过传 props 的⽅式，向⼦组件进⾏通讯 <br/>
    - ⼦组件向⽗组件通讯: props+回调的⽅式，⽗组件向⼦组件传递props进⾏通讯，此props为作⽤域为⽗组件⾃身的函 数，⼦组件调⽤该函数，将⼦组件想要传递的信息，作为参数，传递到⽗组件的作⽤域中 <br/>
    - 兄弟组件通信: 找到这两个兄弟节点共同的⽗节点,结合上⾯两种⽅式由⽗节点转发信息进⾏通信 <br/>
    - 跨层级通信: Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题或⾸选语⾔，对于跨越多层的全局数据通过 Context 通信再适合不过 <br/>
    - 发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引⼊event模块进⾏通信 <br/>
    - 全局状态管理⼯具: 借助Redux或者Mobx等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼Store,并根据不同的事件产⽣新的状态<br/>
    `
  },
  {
    question: `
  29. React Hook 的使用限制有哪些？
  `,
    answer: `
   React Hooks的限制主要有两条：<br/>
  - 不要在循环、条件或嵌套函数中调用 Hook；<br/>
  - 在 React 的函数组件中调用 Hook。<br/>
  `
  },
  {
    question: `
  30. React Hooks 解决了哪些问题？
  `,
    answer: `
  （1）在组件之间复用状态逻辑很难**：<br/>
  （2）复杂组件变得难以理解**br/>
  （3）难以理解的 class**<br/>
  `
  },
  {
    question: `
  31.在React中组件的this.state和setState有什么区别？
  `,
    answer: `
    this.state通常是用来初始化state的,this.setState是用来修改state值的.
    如果初始化了state之后再使用this.state,
    之前的state会被覆盖掉,如果使用this.setState,
    只会替换掉相应的state值<br/>
    所以,如果想要修改state的值,就需要使用setState,而不能直接修改state,
    直接修改state之后页面是不会更新的<br/>
  `
  },
  {
    question: `
  32. React组件的state和props有什么区别？
  `,
    answer: `
    1.props<br/>
    props是一个从外部传进组件的参数,主要作为就是从父组件向子组件传递数据,
    它是不允许被修改的<br/>
    2.state<br/>
    state的主要作用是用于组件保存以及修改自己的状态,
    它只能在constructor中初始化,
    它算是组件的私有属性,不可通过外部访问和修改,
    只能通过组件内部的this.setState来修改,
    修改state属性会导致组件的重新渲染<br/>
  `
  },
  {
    question: `
  33. React如何获取组件对应的DOM元素？
  `,
    answer: `
  可以用ref来获取某个子节点的实例，然后通过当前class组件实例的一些特定属性来直接获取子节点实例。ref有三种实现方法:<br/>

  - 字符串格式：字符串格式，这是React16版本之前用得最多的，例如：<p ref="info">span</p>  <br/>
  - 函数格式：ref对应一个方法，该方法有一个参数，也就是对应的节点实例，例如：<p ref={ele => this.info = ele}></p>   <br/>
  - createRef方法：React 16提供的一个API，使用React.createRef()来实现 　　　　　 <br/>
  `
  },
  {
    question: `
  34. React中setState的第二个参数作用是什么？
  `,
    answer: `
  setState的作用:
  1.修改state的数据<br/>
  2.触发render方法渲染更新页面<br/>
  setState的第二个参数是一个可选的回调函数。这个回调函数将在组件重新渲染后执行,最新的数据。<br/>
  setState是对象的合并，需要用...,useState的setXXX是对象的替换
  `
  },
  {
    question: `
  36. 类组件与函数组件有什么异同？
  `,
    answer: `
    1.设计思想不同：函数式组件是函数式编程思想,而类组件是面向对象编程思想<br/>
    2.类组件有状态管理state,而函数式组件的状态需要使用useState自定义状态
    3.创建组件时,函数式组件只需调用函数即可创建组件,
    而类组件必须先实例化一个对象,
    然后通过这个实例化对象调用render函数来创建组件<br/>
    4.函数组件没有生命周期钩子函数,使用useEffect替代了生命周期钩子函数的作用
  `
  },
  {
    question: `
  37. React 数据持久化有什么实践吗？
  `,
    answer: `
    使用redux-persist,将数据保存到localStorage里面<br/>
  `
  },
  {
    question: `
  38. 在React中页面重新加载时怎样保留数据
  `,
    answer: `
  这个问题就设计到了**数据持久化，** 主要的实现方式有以下几种：
- Redux：将页面的数据存储在redux中，在重新加载页面时，获取Redux中的数据；<br/>
- data.js： 使用webpack构建的项目，可以建一个文件，data.js，将数据保存data.js中，跳转页面后获取；<br/>
- sessionStorge：在进入选择地址页面之前，componentWillUnMount的时候，将数据存储到sessionStorage中，每次进入页面判断sessionStorage中有没有存储的那个值，有，则读取渲染数据；没有，则说明数据是初始化的状态。返回或进入除了选择地址以外的页面，清掉存储的sessionStorage，保证下次进入是初始化的数据<br/>
- history API：History API 的 pushState 函数可以给历史记录关联一个任意的可序列化 state，所以可以在路由 push 的时候将当前页面的一些信息存到 state 中，下次返回到这个页面的时候就能从 state里面取出离开前的数据重新渲染。react-router 直接可以支持。这个方法适合一些需要临时存储的场景。<br/>
  `
  },
  {
    question: `
  39. React 高阶组件是什么，和普通组件有什么区别，适用什么场景
  `,
    answer: `
    高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件.<br/>
    优点:<br/>
    1.实现了对原有组件的增强和优化;<br/>
    2.可以对原有组件中的state, props和逻辑执行增删改操作,
    一般用于代码重用和组件增强优化<br/>
    应用场景:<br/>
    1.需要代码重用时,,react如果有多个组件都用到了同一段逻辑,,
    这时,就可以把共同的逻辑部分提取出来,
    利用高阶组件的形式将这段逻辑整合到每一个组件中,,从而减少代码的逻辑重复<br/>
    2.需要组件增强优化时,比如我们在项目中使用的组件有些不是自己写的,
    而是从网上下载下来的,但是第三方写的组件可能比较复杂,,有时不能完全满足需求,
    但第三方组件不易修改,,此时也可以用高阶组件,在不修改原始组件的前提下,
    对组件添加满足实际开发需求的功能<br/>
  `
  },
  {
    question: `
  40. React 高阶组件、Render props、hooks 有什么区别，为什么要不断迭代
  `,
    answer: `
  这三者是目前react解决代码复用的主要方式：<br/>

- 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。具体而言，高阶组件是参数为组件，返回值为新组件的函数。<br/>
- render props是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术，更具体的说，render prop 是一个用于告知组件需要渲染什么内容的函数 prop。<br/>
- 通常，render props 和高阶组件只渲染一个子节点。让 Hook 来服务这个使用场景更加简单。这两种模式仍有用武之地，（例如，一个虚拟滚动条组件或许会有一个 renderltem 属性，或是一个可见的容器组件或许会有它自己的 DOM 结构）。但在大部分场景下，Hook 足够了，并且能够帮助减少嵌套。<br/>
  `
  },
  {
    question: `
  41. useEffect的作用
  `,
    answer: `
  函数式组件没有状态state,useState给其提供了状态;<br/>
  函数式组件没有生命周期,useEffect给其提供了类似于生命周期的回调函数<br/>
  第一个参数:是一个回调函数<br/>
  第二个参数:是一个依赖数组,数组中传依赖的数据,当依赖的数据发生变化时,回调函数就会触发<br/>
  useEffect第2个参数的的几种传参情况:<br/>
  1.不传第二个参数:
    组件内任何数据的变化都会触发useEffect回调函数的执行<br/>
    此时回调函数相当于componentDidMount和ComponentDidUpdate两个钩子函数<br/>

  2.传一个空数组:
    回调函数只会在组件渲染完成时触发一次,<br/>
    此时回调函数相当于componentDidMount,<br/>
    我们可以在回调函数里面发数据请求<br/>
  
  3.传一个数组,数组里面放依赖数据<br/>
    页面渲染完成回调函数会触发一次,当依赖的数据发生变化,<br/>
    回调函数也会触发,此时回调函数相当于componentDidMount,componentDidUpdate<br/>
    
  useEffect第1个回调函数参数里面return一个函数,return的函数相当于<br/>
  是componetWillUnmount生命周期钩子函数,这个函数什么时候会触发:<br/>
    1.组件卸载的时候会触发<br/>
    2.当组件依赖的数据变化时,它也会触发<br/>
    这个函数里面可以用来做移除监听事件,清除定时器等操作<br/>
  `
  },
  {
    question: `42.React路由v5和v6版本嵌套路由和重定向`,
    answer: `
        匹配一个路由包裹组件<br/>
        v5:"< Switch >< / Switch> "<br/>
        v6:"< Routes >< / Routes>"<br/>

        注册路由指向的组件属性：<br/>
        v5:component 值为组件名称，如Home<br/>
        v6:element 值为组件 <Home/><br/>

        嵌套路由：<br/>
        v5:需要写父级路由，如/home/news<br/>
        v6:不写父级路由，如news<br/>

        重定向：<br/>
        v5:用Redirect标签，如：<Redirect to="/home"><br/>
        v6:用Route,element值为Navigate标签，如：<Route path="*" element={<Navigate to="home"/>}/><br/>

        精准匹配与模糊匹配：<br/>
        v5:默认是模糊匹配，通过在Route配置加exact开启精准匹配<br/>
        v6:默认开启精准匹配，加/*开启模糊匹配<br/>
        `
  },
  {
    question: `
  43.shouldComponentUpdate的作用?
  `,
    answer: `
    shouldComponentUpdate是一个生命周期钩子函数,它的作用是告诉react
    是否需要更新组件,它的返回值是个bool类型,如果返回true表示需要更新组件,
    否则不需要更新组件.<br/>
    shouldComponentUpdate有两个参数:<br/>
      nextProps:表示下一个props的值<br/>
      nextState:表示下一个state的值<br/>
    当组件的props或state变化时,我们可以将其和上一次的值比较,如果变化了,
    就让组件更新,否则不让组件更新,以此达到提升组件性能的目的.
  `
  },
  {
    question: `
      44.谈谈react的合成事件?
      `,
    answer: `
    合成事件原理:<br/>
    React并不是将click事件绑定到真实的DOM上,
    而是在根节点root处监听了所有的事件,
    当事件发生并且冒泡到root处的时候,
    React将事件内容封装并交由真正的处理函数运行.
    这样的方式不仅仅减少了内存的消耗,
    还能在组件销毁时统一订阅和移除事件.<br/>
    `
  }
]
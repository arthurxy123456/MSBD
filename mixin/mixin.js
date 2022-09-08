let mixin = {
  mounted() {
    /* 设置题目闭包函数 */
    this.qus_block = this.random_qus();
  },
  methods: {
    /* 搜索方法 */
    search() {
      /* 获取所有面试题 */
      /* 判断关键字是否包含逗号 */
      let flag = this.keywords.match(/,|，/g);
      /* 如果关键字包含逗号(双关键字查找) */
      if (flag) {
        /* 获取符号 */
        let sym = flag[0];
        /* 如果不是逗号,直接return */
        if (sym != ',' && sym != '，') return;
        /* 获取关键字数组 */
        let words = this.keywords.split(sym);
        /* 定义结果数组 */
        let resAry = [];
        resAry = this.list.filter(item1 => {
          /* 保留出现了两个关键字的面试题 */
          return words.every(item => {
            /* 不区分大小写 */
            let a = item1.question.toLowerCase()
            return a.includes(item.toLowerCase())
          })
        });
        return resAry;
      }
      /* 如果关键字不包含逗号(单关键字查找) */
      else {
        return this.list.filter(item => {
          /* 不区分大小写 */
          let a = item.question.toLowerCase()
          return a.includes(this.keywords.toLowerCase())
        })
      }
    },

    /* 帮助 */
    showHelp() {
      alert(`
            软件说明:
              疫情原因,前端面试多改为线上,为了帮助同学们在线
              上面试可以快速找到原题,遂做此app.
              1.支持单关键字查询
              2.支持多关键字查询,多个关键字之间要以逗号隔开,
              如:数据,原理 会将题库中包含数据和原理的题目筛选
              出来

              作者:扫地小孩
              时间:2022.5.14
            `)
    },

    /* 点击类型按钮方法 */
    change(index) {
      this.selectindex = index;
      switch (index) {
        case 0:
          this.list = [...jsList, ...cssList, ...vueList];
          /* 清空随机出题闭包函数,并赋为新函数 */
          this.qus_block = null;
          this.qus_block = this.random_qus();
          break;
        case 1:
          this.list = jsList;
          this.qus_block = null;
          this.qus_block = this.random_qus();
          break;
        case 2:
          this.list = cssList;
          this.qus_block = null;
          this.qus_block = this.random_qus();
          break;
        case 3:
          this.list = vueList;
          this.qus_block = null;
          this.qus_block = this.random_qus();
          break;
        case 4:
          this.list = reactList;
          this.qus_block = null;
          this.qus_block = this.random_qus();
          break;
        default:
          break;
      }
    },

    /* 设置模式 */
    setTestMode() {
      this.testMode = !this.testMode;
    },
    /* 随机出题 */
    random_qus() {
      /* 深拷贝一份题目list */
      this.qusList = JSON.parse(JSON.stringify(this.list))
      return () => {
        /* 如果面试题抽完了,从头开始 */
        if (this.qusList.length == 0) {
          this.qusList = JSON.parse(JSON.stringify(this.list))
        }
        /* 隐藏列表 */
        this.isShowList = false;
        /* 随机索引 */
        let index = Math.floor(Math.random() * this.qusList.length);
        /* 随机题目 */
        this.qus = this.qusList[index];
        /* 删除出现过的题目 */
        this.qusList = this.qusList.filter(item => {
          return item.question !== this.qus.question;
        })
      }

    },
    /**
    继续背诵
    **/
    goonRecite() {
      /* 显示列表,隐藏出题页面 */
      this.isShowList = true;
    }

  }
}
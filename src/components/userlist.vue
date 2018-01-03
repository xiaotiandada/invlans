<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>

<script>
  export default {
    name: 'userlist',
    data () {
      return {
        columns7: [
          {
            title: '姓名',
            key: 'name',
            render: (h, params) => {
              return h('div', [
//                h('Icon', {
//                  props: {
//                    type: 'person'
//                  }
//                }),
                h('strong', params.row.name)
              ]);
            }
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '性别',
            key: 'sex'
          },
          {
            title: '职业',
            key: 'occupation'
          },
          {
            title: '身份证',
            key: 'idCard'
          },
          {
            title: '注册时间',
            key: 'enrollTime'
          },
          {
            title: '登录时间',
            key: 'logoTime'
          },
          {
            title: '状态',
            key: 'status'
          },
          {
            title: '审核',
            key: 'examine'
          },
          {
            title: '认证',
            key: 'attestation'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data6: [
          {
            name: '张三',
            age: 18,
            sex: '男',
            occupation: '程序员',
            idCard: '3333333333333',
            enrollTime: '2017-12-1 14:00',
            logoTime: '2017-12-1 14:00',
            status: '在线',
            examine: '未审核',
            attestation: '未认证'
          },
          {
            name: '张三',
            age: 18,
            sex: '男',
            occupation: '程序员',
            idCard: '3333333333333',
            enrollTime: '2017-12-1 14:00',
            logoTime: '2017-12-1 14:00',
            status: '在线',
            examine: '未审核',
            attestation: '未认证'
          },
          {
            name: '张三',
            age: 18,
            sex: '男',
            occupation: '程序员',
            idCard: '3333333333333',
            enrollTime: '2017-12-1 14:00',
            logoTime: '2017-12-1 14:00',
            status: '在线',
            examine: '未审核',
            attestation: '未认证'
          },
          {
            name: '张三',
            age: 18,
            sex: '男',
            occupation: '程序员',
            idCard: '3333333333333',
            enrollTime: '2017-12-1 14:00',
            logoTime: '2017-12-1 14:00',
            status: '在线',
            examine: '未审核',
            attestation: '未认证'
          },
          {
            name: '张三',
            age: 18,
            sex: '男',
            occupation: '程序员',
            idCard: '3333333333333',
            enrollTime: '2017-12-1 14:00',
            logoTime: '2017-12-1 14:00',
            status: '在线',
            examine: '未审核',
            attestation: '未认证'
          },
          {
            name: '张三',
            age: 18,
            sex: '男',
            occupation: '程序员',
            idCard: '3333333333333',
            enrollTime: '2017-12-1 14:00',
            logoTime: '2017-12-1 14:00',
            status: '在线',
            examine: '未审核',
            attestation: '未认证'
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `姓名：${this.data6[index].name}<br>
                    年龄：${this.data6[index].age}<br>
                    性别：${this.data6[index].sex}<br>
                    职业：${this.data6[index].occupation}<br>
                    身份证：${this.data6[index].idCard}<br>
                    注册时间：${this.data6[index].enrollTime}<br>
                    登录时间：${this.data6[index].logoTime}<br>
                    状态：${this.data6[index].status}<br>
                    审核：${this.data6[index].examine}<br>
                    认证：${this.data6[index].attestation}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>


<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>

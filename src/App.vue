<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="1-1">
                    <router-link to="./userList" tag="span">用户列表</router-link>
                    </MenuItem>
                    <MenuItem name="1-2">
                    <!-- <router-link to="./adminList">管理员列表</router-link> -->
                    <router-link to="./adminList" tag="span" >管理员列表</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        认证管理
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        内容管理
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        审核管理
                    </template>
                    <MenuItem name="4-1">Option 1</MenuItem>
                    <MenuItem name="4-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        权限管理
                    </template>
                    <MenuItem name="5-1">Option 1</MenuItem>
                    <MenuItem name="5-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="6">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        组成员&nbsp;&nbsp;
                    </template>
                    <MenuItem name="6-1">Option 1</MenuItem>
                    <MenuItem name="6-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        活动管理
                    </template>
                    <MenuItem name="7-1">Option 1</MenuItem>
                    <MenuItem name="7-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="8">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        日志管理
                    </template>
                    <MenuItem name="8-1">Option 1</MenuItem>
                    <MenuItem name="8-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="height: 600px">
                      <router-view></router-view>
                      </div>
                </Card>
            </Content>
        </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }

</style>

<!--系统管理-角色权限-->
<template>
    <nav class="nav">
       <div class="menu-logo">
            <img src="../../assets/img/hide.jpg" alt="菜单展开" class="logo-open">
        </div>
        <ul class="nav-top">
            <li v-on:mouseenter="toggleMenu()"
                v-on:mouseleave="heidMenu()">
                <i v-if="navIcons" v-bind:class="navIcon"></i>
                <i v-else v-bind:class="backIcon"></i>
            </li>
            <li>当前位置 : {{back}}</li>
        </ul>
        <!-- 系统管理员-->
        <div class="nav-role" v-on:mouseenter="showRole()"
             v-on:mouseleave="hideRole()">
            <div>
                <img src="../../assets/img/user.png" alt="管理员">
                <span>{{role}}：</span>
                <span>{{roleName}}</span>
                <i v-bind:class="[roleDown, {'roleUp':isShowRole}]"></i>
            </div>
            <ul v-bind:class="{'show':isShowRole}">
                <li v-for="user in users" v-bind:class="user.divider">
                    <a v-bind:href="user.userHref">
                        <i v-bind:class="user.userIcon"></i>
                        <span>{{user.userName}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      href: "SpaceDetail",
      navIcons: false,
      navIcon: "el-icon-d-arrow-right",
      backIcon: "el-icon-d-arrow-left", //
      back: "下一级菜单",
      role: "系统管理员",
      isShowRole: false,
      roleName: "admin",
      roleDown: "el-icon-arrow-down",
      users: [
        {
          userHref: "List1",
          userIcon: "el-icon-picture",
          userName: "查看个人详情"
        },
        {
          userHref: "List2",
          userIcon: "el-icon-edit-outline",
          userName: "编辑个人信息"
        },
        {
          userHref: "List3",
          userIcon: "el-icon-more",
          userName: "更改密码"
        },
        {
          divider: "divider"
        },
        {
          userHref: "#",
          userIcon: "el-icon-menu",
          userName: "退出系统"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.navIcons = true;
      this.$emit("isMenuEvent", this.navIcons);
    },
    heidMenu() {
      this.navIcons = false;
      this.$emit("isMenuEvent", this.navIcons);
    },
    showRole() {
      this.isShowRole = true;
    },
    hideRole() {
      this.isShowRole = false;
    }
  }
};
</script>
<style lang="less" scoped>
// @import url("../../assets/style/nav");
.nav {
  // width: calc(100% - 200px);
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  box-shadow: none;
  border-bottom: 1px solid #f3eeee33;
  background-color: #1b2b4e;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.03);
  position: fixed;
  top: 0;
  // margin-left: 200px;
  transition: all 0.1s;
  z-index: 9999;
  > .menu-logo {
    // width: 100%;
    // height: 86px;
    // text-align: center;
    // line-height: 86px;
    float: left;
    margin: 0 70px;
    > .logo-open {
      transition: all 0.1s;
      height: 56px;
      // padding-top: 20px;
    }
    > .logo-hide {
      display: none;
      margin-left: -6px;
    }
  }
  > ul {
    height: 100%;
    float: left;
    list-style: none;
    display: flex;
    align-items: center;
    > li {
      line-height: 56px;
      float: left;
      // color: #e9ebf1f0;
      color: rgb(174, 192, 230);
      font-size: 14px;
      // font-weight: 700;
      padding-right: 14px;
      display: flex;
      align-items: center;
      > .ivu-icon {
        font-size: 19px;
      }
      &:first-child {
        padding-left: 16px;
        cursor: pointer;
      }
      > a {
        width: 15px;
        text-align: center;
        display: block;
        // color: rgb(174, 192, 230);
        cursor: pointer;
        > .ivu-icon {
          font-size: 15px;
        }
      }
    }
  }
  > .nav-role {
    float: right;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > div {
      margin-top: 6px;
      padding: 6px;
      // border: 1px solid rgba(255, 255, 255, 0.0470588);
      display: flex;
      align-items: center;
      > img {
        height: 30px;
        margin-right: 5px;
      }
      > span {
        font-size: 14px;
        // color: rgb(115, 121, 136);
        color: #e9ebf1f0;
      }
      > i {
        color: #e9ebf1f0;
        transition: all 0.1s;
        margin-left: 5px;
        margin-top: 3px;
        &.roleUp {
          transform: rotate(-180deg);
        }
      }
    }
    > ul {
      width: 180px;
      box-sizing: border-box;
      margin-top: 6px;
      list-style: none;
      border-radius: 2px;
      padding: 0;
      z-index: 999;
      // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.176);
      overflow: hidden;
      position: relative;
      display: none;
      transition: all 0.4s;
      &.show {
        display: block;
      }
      > .divider {
        height: 1px;
        overflow: hidden;
        background-color: #e5e5e5;
      }
      > li {
        // background-color: rgba(27, 43, 78);
        padding: 0 15px;
        > a {
          height: 40px;
          width: 100%;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          &:hover span {
            color: #00a9e8;
          }
          > i {
            // color: rgba(214, 214, 253, 0.96);
            margin-right: 5px;
            width: 18px;
            height: 18px;
            font-size: 17px;
            line-height: 18px;
          }
          > span {
            // color: rgba(214, 214, 253, 0.96);
            font-size: 14px;
          }
          &:hover {
            i {
              color: #50c8ea;
            }
          }
        }
        &:hover {
          // background-color: rgba(27, 43, 78);
        }
        &:hover span {
          color: #00a9e8;
        }
      }
    }
    > ul:hover {
      display: block;
    }
  }
}
</style>

<!--菜单列表-->
<template>
    <aside class="demo-menu-list">
        <ul>
            <li v-for="(menuObj,index) in demoMenuList">
                <span @click="submenu(menuObj,index)">
                    <router-link
                        :to="menuObj.href"
                        v-bind:class="[menuObj.activeHide, {'active':!menuObj.isShow}]" >
                        <i v-bind:class="menuObj.menuIcon"></i>{{menuObj.content}}
                        <span v-bind:class="[menuObj.menuDown, {'overturn':!menuObj.isShow}]"></span>
                    </router-link>
                </span>
                <ul v-bind:class="{'isHides':menuObj.isShow, 'childFirst':!menuObj.isShow}">
                    <li v-for="(menuSecond, index) in menuObj.submenu">
                        <router-link
                            :to="menuSecond.href"
                            v-bind:class="{'active':menuSecond.isShow}">{{menuSecond.content}}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>
<script>
import { demoMenuList } from "../../assets/js/menuListDataJS"; // 菜单数据
export default {
  name: "demo-menu-list",
  data() {
    return {
      immediately: "",
      demoMenuList: demoMenuList
    };
  },
  methods: {
    submenu(menuObj, index) {
      this.immediately = index;
      if (menuObj.isShow === true) {
        this.demoMenuList.forEach(function(element) {
          element.isShow = true;
        });
        menuObj.isShow = !menuObj.isShow; // 菜单展开
      } else {
        menuObj.isShow = !menuObj.isShow; // 菜单合上
      }
    }
  }
};
</script>
<style lang="less" scoped>
.demo-menu-list {
  position: fixed;
  top: 76px;
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  box-shadow: none;
  // border-color: rgb(27, 43, 78);
  // background: #424f63;
  // background-color: rgba(27, 43, 78, 0.85098);
  // border-right: 1px solid rgba(255, 255, 255, 0.0470588);
  // background-color: rgba(27, 43, 78);
  z-index: 1;
  > ul {
    width: 100%;
    font-size: 14px;
    list-style: none;
    padding: 0;
    overflow-x: hidden;
    li {
      a {
        padding: 8px 10px;
        line-height: 18px;
        color: rgb(174, 192, 230);
        display: block;
        transition: background-color 0.4s;
        > i {
          position: relative;
          top: 3px;
          margin-left: 9px;
          margin-right: 14px;
          width: 18px;
          height: 18px;
          background-size: contain !important;
          display: inline-block;
          font-size: 18px;
        }
        > span {
          position: absolute;
          right: 20px;
          margin-top: 4px;
          transition: transform 0.3s;
          font-size: 15px;
          &.overturn {
            transform: rotate(-180deg);
          }
        }
        &:hover {
          color: rgb(174, 192, 230);
          // background-color: #202c37;
          background-color: #03171f4f;
        }
        &.active {
          color: rgb(174, 192, 230);
          // background-color: #00a9e8;
          background-color: #03171f4f;
        }
      }
      > .isHides {
        display: none;
        list-style: none;
      }
      > .childFirst {
        background-color: rgba(10, 20, 41, 0.952941);
        list-style: none;
        padding-left: 0;
        > li {
          > a {
            padding: 10px 0 10px 56px;
            &.actived {
              color: rgb(174, 192, 230);
              background: #202c37;
            }
          }
        }
      }
    }
  }
}
</style>

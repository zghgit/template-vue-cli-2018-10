<!--菜单列表-->
<template>
    <aside class="demo-menu-list">
        <div class="menu-logo">
            <img src="../../assets/img/open.jpg" alt="菜单展开" class="logo-open">
            <img src="../../assets/img/hide.jpg" alt="菜单缩小" class="logo-hide">
        </div>
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
                    <li v-for="(menuSecond, index) in menuObj.submenu" v-if="">
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
    import { demoMenuList } from '../../assets/js/menuListDataJS';  // 菜单数据
    export default {
        name: 'demo-menu-list',
        data() {
            return {
                immediately: '',
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
                    menuObj.isShow = !menuObj.isShow;  // 菜单展开
                } else {
                    menuObj.isShow = !menuObj.isShow;   // 菜单合上
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .demo-menu-list{
        position: fixed;
        top: 0;
        width: 200px;
        height: 100%;
        background: #424f63;
        z-index: 1;
        >.menu-logo{
            width: 100%;
            height: 86px;
            text-align: center;
            line-height: 86px;

            >.logo-open{
                transition: all .1s;
                height: 56px;
                padding-top: 20px;
            }
            >.logo-hide{
                display: none;
                margin-left: -6px;
            }
        }
        >ul{
            width: 100%;
            font-size: 14px;
            list-style: none;
            padding: 0;
            overflow-x: hidden;
            li{
                a{
                    padding: 8px 10px;
                    line-height: 18px;
                    color: #fff;
                    display: block;
                    transition: background-color .4s;
                    >i{
                        position: relative;
                        top: 3px;
                        margin-left: 9px;
                        margin-right: 14px;
                        width: 18px;
                        height: 18px;
                        background-size: contain!important;
                        display: inline-block;
                        font-size: 18px;
                    }
                    >span{
                        position: absolute;
                        right: 20px;
                        margin-top: 4px;
                        transition: transform .3s;
                        font-size: 15px;
                        &.overturn{
                            transform: rotate(-180deg);
                        }
                    }
                    &:hover {
                        color: #FFF;
                        background-color: #202c37;
                    }
                    &.active{
                        color: #fff;
                        background-color: #00a9e8;
                    }
                }
                >.isHides{
                    display: none;
                    list-style: none;
                }
                >.childFirst{
                    list-style: none;
                    padding-left: 0;
                    >li {
                        > a {
                            padding: 10px 0 10px 56px;
                            &.actived {
                                color: #FFF;
                                background:  #202c37;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

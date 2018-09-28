<!--系统管理-角色权限-->
<template>
    <nav class="nav">
        <ul class="nav-top">
            <li v-on:click="toggleMenu()">222
                <i v-bind:class="navIcon"></i>
            </li>
            <li>
                <a v-on:click="goBack()">111
                    <i v-bind:class="backIcon"></i>
                </a>
            </li>
            <li>当前位置 : {{back}}</li>
        </ul>
        <!-- 系统管理员-->
        <div class="nav-role" v-on:mouseenter="showRole()"
             v-on:mouseleave="hideRole()">
            <div>
                <img src="../../assets/img/user.png" alt="管理员">
                <span>{{role}}：&nbsp</span>
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
    export default{
        data() {
            return {
                href: 'SpaceDetail',
                navIcon: 'ivu-icon ivu-icon-navicon-round',
                backIcon: 'ivu-icon ivu-icon-chevron-left',
                back: '下一级菜单',
                role: '系统管理员',
                isShowRole: false,
                roleName: 'admin',
                roleDown: 'ivu-icon ivu-icon-chevron-down',
                users: [
                    {
                        userHref: 'List1',
                        userIcon: 'ivu-icon ivu-icon-person',
                        userName: '查看个人详情'
                    },
                    {
                        userHref: 'List2',
                        userIcon: 'ivu-icon ivu-icon-person',
                        userName: '编辑个人信息'
                    },
                    {
                        userHref: 'List3',
                        userIcon: 'ivu-icon ivu-icon-compose',
                        userName: '更改密码'
                    },
                    {
                        divider: 'divider'
                    },
                    {
                        userHref: '#',
                        userIcon: 'ivu-icon ivu-icon-power',
                        userName: '退出系统'
                    }
                ]
            };
        },
        methods: {
            toggleMenu() {
                console.log('菜单收缩，菜单展开');
            },
            goBack() {
                console.log('上一页，下一页');
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
<style lang="scss" scoped>
    .nav{
        width: calc(100% - 200px);
        height: 56px;
        background: #FFF;
        box-shadow: 0 2px 2px rgba(0,0,0,.03),0 1px 0 rgba(0,0,0,.03);
        position: fixed;
        top: 0;
        margin-left: 200px;
        transition: all 0.1s;
        z-index: 9999;
        >ul{
            height: 100%;
            float: left;
            list-style: none;
            padding: 0;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            >li{
                line-height: 56px;
                float: left;
                color: rgba(0,0,0,.75);
                font-size: 16px;
                font-weight: 700;
                padding-right: 14px;
                display: flex;
                align-items: center;
                >.ivu-icon{
                    font-size: 19px;
                }
                &:first-child{
                    padding-left:16px;
                    cursor: pointer;
                }
                >a{
                    width:15px;
                    text-align: center;
                    display: block;
                    color: #333;
                    cursor: pointer;
                    >.ivu-icon{
                        font-size: 15px;
                    }
                }
            }
        }
        >.nav-role{
            float: right;
            margin-right: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            >div{
                margin-top: 6px;
                padding: 6px;
                border: 1px solid #f0f0f8;
                display: flex;
                align-items: center;
                >img{
                    height: 30px;
                }
                >span{
                    font-size: 14px;
                    color: black;
                }
                >i{
                    transition: all 0.1s;
                    margin-left: 5px;
                    margin-top: 3px;
                    &.roleUp{
                        transform: rotate(-180deg);
                    }
                }
            }
            >ul{
                width: 180px;
                box-sizing: border-box;
                margin-top: 6px;
                list-style: none;
                border-radius: 2px;
                padding: 0;
                z-index: 999;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.176);
                overflow: hidden;
                position: relative;
                display: none;
                transition: all 0.4s;
                &.show{
                    display: block;
                }
                >.divider{
                    height: 1px;
                    overflow: hidden;
                    background-color: #e5e5e5;
                }
                >li{
                    background: #fff;
                    padding: 0 15px;
                    >a{
                        height: 40px;
                        width: 100%;
                        cursor: pointer;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        &:hover span{
                            color: #00a9e8;
                        }
                        >i{
                            color: #333;
                            margin-right: 5px;
                            width: 18px;
                            height: 18px;
                            font-size: 17px;
                            line-height: 18px;
                        }
                        >span{
                            color: #333;
                            font-size: 14px;
                        }
                        &:hover{
                            i{
                                color: #50C8EA;
                            }
                        }
                    }
                    &:hover {
                        background: #f5f5f5;
                    }
                    &:hover span{
                        color: #00a9e8;
                    }
                }
            }
            >ul:hover{
                display: block;
            }
        }
    }
</style>

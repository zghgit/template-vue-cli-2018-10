<!-- 下拉框-->
<template>
    <div class="select-list">下拉框
        <!--在组件上总是必须用 key 配合 v-for-->
        <!--v-for 比 v-if 具有更高的优先级，-->
        <ul v-if="shouldShowUsers">
            <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'select-list',
        props: {},
        components: {},
        computed: {},
        data() {
            return {
                shouldShowUsers: true,
                todos: [
                    {
                        id: 1,
                        text: '32432rdf'
                    },
                    {
                        id: 2,
                        text: 'dsfds'
                    }
                ]
            };
        },
        mounted() {},
        methods: {}
    };
</script>
<style lang="less" scoped>
    .select-list {
        // font-size: @g-fontSize;
        width: 500px;
    }

</style>

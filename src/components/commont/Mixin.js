/**
 * Created by Guo Hua on 2018/10/18.
 */
export default {
    name: 'mixin.js',
    props: [],
    components: {},
    mixins: [],
    data() {
        return {
            routerParams: {},
            showTable: false,
            ss: 0
        };
    },
    create() {
        // this.getForm();
    },
    methods: {
        getForm(arr) {
            if (arr === 'ALL') {
                return '混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活';
            } else {
                return '混入对象可以包含任意组件选项';
            }
        }
    }
};

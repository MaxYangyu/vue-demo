<template>
    <div id="tmpl">
        <div class="title">
            <h4 v-text="list.title"></h4>
            <p>{{ list.add_time | datefmt('YYYY-MM-DD') }}  {{list.click}}次浏览</p>
        </div>
        <div id="content" v-html="list.content" ></div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import common from '../../kits/common'
    export default {
        data() {
            return {
                id: 0,
                list: {}
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getlist()
        },
        methods: {
            getlist() {
                var url = common.api+"/api/getnew/" + this.id;
                this.$http.get(url).then(function (res) {
                    if (res.body.status != 0) {
                        Toast(res.body.message);
                        return;
                    }
                    this.list = res.body.message[0]
                })
            }
        }
    }
</script>

<style scoped>
    .title h4{
        color: #0094ff;
    }
    .title p{
        color:rgba(0,0,0,0.5);
    }

    .title,#content{
        padding: 5px;
    }

</style>
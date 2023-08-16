<template>
    <div id="header">
        <div class="logo">
            <a href="/">
                <div class="logo-anime">
                    <div class="logo-anime-obj"></div>
                </div>
            </a>
        </div>
        <div class="reserve">
            <a href="/">
                <div class="reserve-anime">
                    <div class="reserve-anime-obj"></div>
                </div>
            </a>
        </div>
        <div class="navBarBtn" @click="navBarOpen">
            <a href="javascript:void(0);">
                <div class="navBarBtn-anime">
                    <div class="navBarBtn-anime-obj"></div>
                </div>
            </a>
        </div>
        <div class="height"></div>
    </div>
</template>
<script>
export default {
    methods: {
        navBarOpen() {
            this.$emit('navBarOpen')
        }
    },
}
</script>

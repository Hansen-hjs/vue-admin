<template>
    <el-scrollbar class="scroll-container" ref="scrollContainer" :vertical="false" @wheel.native.prevent="handleScroll">
        <slot />
    </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// const tagSpacing = 4;

@Component({})
export default class ScrollPane extends Vue {
    handleScroll(e: MouseWheelEvent) {
        const value = (e as any).wheelDelta || -e.deltaY * 40;
        const scrollContainer = this.$refs.scrollContainer as Vue;
        const scrollWrapper = scrollContainer.$refs.wrap as HTMLElement;
        scrollWrapper.scrollLeft = scrollWrapper.scrollLeft + value / 4;
    }

    // moveToTarget(currentTag: HTMLElement) {
    //     const scrollContainer = this.$refs.scrollContainer as Vue;
    //     const container = scrollContainer.$el as HTMLElement;
    //     const containerWidth = container.offsetWidth;
    //     const scrollWrapper = scrollContainer.$refs.wrap as HTMLElement;
    //     const tagList = this.$parent.$refs.tag as any[];

    //     let firstTag = null;
    //     let lastTag = null;

    //     // find first tag and last tag
    //     if (tagList.length > 0) {
    //         firstTag = tagList[0];
    //         lastTag = tagList[tagList.length - 1];
    //     }

    //     if (firstTag === currentTag) {
    //         scrollWrapper.scrollLeft = 0;
    //     } else if (lastTag === currentTag) {
    //         scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - containerWidth;
    //     } else {
    //         // find preTag and nextTag
    //         const currentIndex = tagList.findIndex(item => item === currentTag);
    //         const prevTag = tagList[currentIndex - 1];
    //         const nextTag = tagList[currentIndex + 1];
    //         // the tag's offsetLeft after of nextTag
    //         const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagSpacing;
    //         // the tag's offsetLeft before of prevTag
    //         const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagSpacing;

    //         if (afterNextTagOffsetLeft > scrollWrapper.scrollLeft + containerWidth) {
    //             scrollWrapper.scrollLeft = afterNextTagOffsetLeft - containerWidth;
    //         } else if (beforePrevTagOffsetLeft < scrollWrapper.scrollLeft) {
    //             scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
    //         }
    //     }
    // }
}
</script>

<style lang="scss">
.scroll-container {
    white-space: nowrap;
    // position: relative;
    // overflow: hidden;
    width: 100%;
    .el-scrollbar__bar {
        bottom: 0px;
    }

    .el-scrollbar__wrap {
        height: 49px;
    }
}
</style>

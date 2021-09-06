<template>
  <div ref="refEditor" class="monaco-editor"/>
</template>

<script>
import * as monaco from 'monaco-editor'

export default {
  name: 'monacoEditor',
  // data: {}
  mounted() {
    monaco.editor.create(this.$refs['refEditor'], {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript"
    })
  }
}
</script>

<style lang="scss" scoped>
.monaco-editor {
  width: 100%;
  height: 100%;
}
</style>

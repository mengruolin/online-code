<template>
  <div class="codeEdit">
    <monaco-editor />
  </div>
</template>

<script>
import monacoEditor from '@components/monaco-editor/'

export default {
  components: {
    [monacoEditor.name]: monacoEditor
  }
}
</script>
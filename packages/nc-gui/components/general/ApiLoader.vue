<script lang="ts" setup>
const { isLoading } = useGlobal()
</script>

<template>
  <div class="flex justify-center self-center min-w-6">
    <div v-if="isLoading" class="flex items-center gap-2 text-gray-200 text-xs" data-testid="nc-loading">
      <component :is="iconMap.loading" class="animate-infinite animate-spin" />
    </div>
  </div>
</template>

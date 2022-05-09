<template>
    {{ timerCount }}
</template>

<script>
    export default {
        data() {
            return {
                timerCount: 5 // 5 segundos
            }
        },
        watch: {
            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                },
                immediate: true // This ensures the watcher is triggered upon creation
            }
        }
    }
</script>
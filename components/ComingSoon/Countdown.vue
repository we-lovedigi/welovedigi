<template>
    <ul class="countdown">
        <li v-if="days > 0">
            <p class="text">{{ days > 1 ? 'days' : 'day' }}</p>
            <p class="digit">{{ days | twoDigits }}</p>
        </li>
        <li>
            <p class="text">{{ hours > 1 ? 'hours' : 'hour' }}</p>
            <p class="digit">{{ hours | twoDigits }}</p>
        </li>
        <li>
            <p class="text">min</p>
            <p class="digit">{{ minutes | twoDigits }}</p>
        </li>
        <li>
            <p class="text">sec</p>
            <p class="digit">{{ seconds | twoDigits }}</p>
        </li>
    </ul>
</template>

<script>
let interval = null;

export default {
    props: {
        deadline: {
            type: String
        },
        end: {
            type: String
        },
        stop: {
            type: Boolean
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null,
            diff: 0
        }
    },
    created() {
        if (!this.deadline && !this.end) {
            throw new Error("Missing props 'deadline' or 'end'");
        }

        let endTime = this.deadline ? this.deadline : this.end;
        this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);

        if (!this.date) {
            throw new Error("Invalid props value, correct the 'deadline' or 'end'");
        }

        interval = setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000);
    },
    computed: {
        seconds() {
            return Math.trunc(this.diff) % 60
        },

        minutes() {
            return Math.trunc(this.diff / 60) % 60
        },

        hours() {
            return Math.trunc(this.diff / 60 / 60) % 24
        },

        days() {
            return Math.trunc(this.diff / 60 / 60 / 24)
        }
    },
    watch: {
        now(value) {
            this.diff = this.date - this.now;
            if(this.diff <= 0 || this.stop){
                this.diff = 0;
                // Remove interval
                clearInterval(interval);
            }
        }
    },
    filters: {
        twoDigits(value) {
            if ( value.toString().length <= 1 ) {
                return '0'+value.toString()
            }
            return value.toString()
        }
    },
    destroyed() {
        clearInterval(interval);
    }
}
</script>
<style lang="stylus">
.countdown
	display flex
	align-items center
	margin 6.2rem 0 4.2rem 0
	li
		& + li
			margin-left 4.2rem
	p
		line-height 1
		+ p
			margin 0
	.text
		bold()
		font-size 1rem
		color $black
	.digit
		bold()
		color $secondary
		font-size 7.2vw
</style>

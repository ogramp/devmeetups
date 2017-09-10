<template>
	<div>
		<v-container>
			<v-layout row wrap class="mb-2">
				<v-flex xs12 sm6 class="text-xs-center text-sm-right">
					<v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
				</v-flex>
				<v-flex xs12 sm6 class="text-xs-center text-sm-left">
					<v-btn large router to="/meetups/new" class="info">Organize Meetup</v-btn>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex x12>
					<v-carousel>
						<v-carousel-item
							v-for="meetup in meetups"
							v-bind:src="meetup.imageUrl"
							:key="meetup.id">
							<div class="title">
								{{ meetup.title }}
							</div>
						</v-carousel-item>
					</v-carousel>
				</v-flex>
			</v-layout>
			<v-layout row wrap class="mt-2">
				<v-flex xs12 class="text-xs-center">
					<p>Join Our Awesome Meetups!</p>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      meetups: [
        {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg', id: 'adsaffasdf123153', title: 'Meetup In New York'},
        {imageUrl: 'https://c1.staticflickr.com/3/2463/3598596311_84211f2566_b.jpg', id: 'adsaffaasdfsdf1223143153', title: 'Meetup In Paris'}
      ]
    }
  }
}
</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		font-size: 2em;
		padding: 20px;
	}
</style>
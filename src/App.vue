<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
	<main>
		<nav class="nav">
			<RouterLink class="link" to="/">Задачи</RouterLink>
			<RouterLink class="link" to="/about">Завершенные задачи</RouterLink>
		</nav>

		<div class="content">
			<RouterView />
		</div>
		
	</main>
</template>

<style scoped>
main {
	display: flex;
}

.content {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	border-top-left-radius: 15px;
	background-color: #DCF2F1 ;
	margin-top: 15px;
}

.nav {
	height: 100vh;
	width: 300px;
	display: flex;
	flex-direction: column;
	background-color: #7FC7D9;
}

.link {
	text-decoration: none;
	padding: 15px;
	color: #000;
}

.link:hover {
	background-color: #84e5f7;
}
</style>

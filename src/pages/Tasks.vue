<script setup>
import { ref, onMounted } from 'vue'

const tasks = ref([{id: 1, text: 'моя первая задача', user: 'mihai' }, {id: 2, text: 'моя вторая задача', user: 'mihai' }])

const text = ref('')

const addTask = () => {
	tasks.value.push({id: Math.random(), text: text.value})
}

const removeTask = (id) => {
	const newArr = tasks.value.filter(item => item.id !== id)
	tasks.value = newArr;
}
</script>

<template>
	<h2>Задачи</h2>
	<div class="task-item" v-for="task in tasks" :key="task.text">
		<span class="task-text">{{ task.text }}</span>
	    <span class="task-user">{{ task.user }}</span>
		<button @click="removeTask(task.id)">Убрать задачу</button>
	</div>

	<input @keyup.enter="addTask" v-model="text" class="input" type="text">
	
</template>

<style scoped>

.input {
	margin-top: auto;
	margin-bottom: 10px;
	height: 40px;
}

.task-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f2f2f2;
	width: 100%;
	padding: 10px 20px;
	margin-bottom: 5px;
	border-radius: 5px;
	transition: background-color 0.3s ease;
}

.task-item:hover {
	background-color: #e0e0e0;
}

.task-text {
	font-size: 16px;
	font-weight: 500;
	color: #333;
}

.task-user {
	font-size: 14px;
	font-weight: 400;
	color: #666;
}
</style>
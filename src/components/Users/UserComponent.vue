<template>
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div class="flex items-center space-x-4 mb-4">
            <img :src="generateAvatarUrl(user.name)" :alt="user.name"
                class="w-14 h-14 rounded-full object-cover border-2 border-purple-300" />
            <div>
                <h3 class="text-lg font-semibold text-gray-800">{{ user.name }}</h3>
                <p class="text-sm text-gray-500">{{ user.email }}</p>
            </div>
        </div>
        <div class="space-y-1 text-sm text-gray-700">
            <p><span class="font-medium text-purple-700">Age:</span> {{ user.age }}</p>
            <p><span class="font-medium text-purple-700">Major:</span> {{ user.major || 'N/A' }}</p>
            <p>
                <span class="font-medium text-purple-700">Salary:</span>
                {{ formatSalary(user.salary) }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
            default: () => ({
                name: '',
                age: 0,
                major: '',
                salary: 0,
                email: ''
            })
        }
    },
    methods: {
        generateAvatarUrl(name) {
            const encodedName = encodeURIComponent(name)
            return `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${encodedName}`
        },
        formatSalary(salary) {
            if (!salary || isNaN(salary)) return 'N/A'
            return `$${parseFloat(salary).toLocaleString()}`
        }
    }
}
</script>
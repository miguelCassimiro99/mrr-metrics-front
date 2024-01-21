<script setup lang="ts">
const columns = ["Status", "ID usuário", "Plano", "Valor", "Data de início"];

const exampleTable = [
  {
    status: "active",
    user_id: 123,
    plan: "mensal",
    plan_value: 342.99,
    start_date: "01/04/2023",
  },
  {
    status: "canceled",
    user_id: 124,
    plan: "anual",
    plan_value: 2000.99,
    start_date: "01/04/2023",
  },
  {
    status: "active",
    user_id: 125,
    plan: "mensal",
    plan_value: 342.99,
    start_date: "01/04/2023",
  },
  {
    status: "canceled",
    user_id: 126,
    plan: "mensal",
    plan_value: 199.99,
    start_date: "01/04/2023",
  },
];
</script>
<template>
  <div
    class="flex-1 h-[400px] flex flex-col items-start justify-start gap-4 rounded-[8px] bg-[#272953] p-2"
  >
    <h3 class="text-lg text-gray-100">Recent MRR changes</h3>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-100">
        <thead class="text-xs text-gray-400 uppercase bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-3 py-2"
              v-for="(col, index) in columns"
              :key="col"
            >
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b border-gray-400"
            v-for="user in exampleTable"
            :key="user.user_id"
          >
            <td class="p-3 font-medium whitespace-nowrap text-gray-100">
              {{ user.status }}
            </td>
            <td class="p-3 font-medium whitespace-nowrap text-gray-100">
              {{ user.user_id }}
            </td>
            <td class="p-3 font-medium whitespace-nowrap text-gray-100">
              {{ user.plan }}
            </td>
            <td class="p-3 font-medium whitespace-nowrap text-gray-100">
              {{ user.plan_value }}
            </td>
            <td class="p-3 font-medium whitespace-nowrap text-gray-100">
              {{ user.start_date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped lang="sass"></style>

<script setup lang="ts">
import { parse } from "vue/compiler-sfc";

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
  {
    status: "canceled",
    user_id: 126,
    plan: "mensal",
    plan_value: 199.99,
    start_date: "01/04/2023",
  },
  {
    status: "canceled",
    user_id: 126,
    plan: "mensal",
    plan_value: 199.99,
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

const parsedValue = function (originalValue: number) {
  return computed(() => {
    if (originalValue >= 1000000)
      return (originalValue / 1000000).toFixed(1) + "M";
    if (originalValue >= 1000) return (originalValue / 1000).toFixed(1) + "k";

    return originalValue;
  });
};
</script>
<template>
  <div
    class="flex-1 h-[400px] flex flex-col items-start justify-start gap-4 rounded-[8px] bg-[#272953] p-2 overflow-x-auto"
  >
    <h3 class="text-lg text-gray-100">Recent MRR changes</h3>

    <div class="relative overflow-auto w-full">
      <table class="w-full text-sm text-left rtl:text-right text-gray-100">
        <thead class="text-xs text-gray-400 uppercase bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-1 py-0 md:py-2 md:px-2 font-medium"
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
            <td class="mrr-table-td">
              <span class="w-4 h-5">
                <Icon
                  :name="
                    user.status === 'active'
                      ? 'material-symbols:arrow-circle-up'
                      : 'bitcoin-icons:cross-filled'
                  "
                  class="w-4 h-4"
                  :class="
                    user.status === 'active' ? 'text-gray-100' : 'text-red-600'
                  "
                />
              </span>
            </td>
            <td class="mrr-table-td">
              {{ user.user_id }}
            </td>
            <td class="mrr-table-td">
              {{ user.plan }}
            </td>
            <td class="mrr-table-td">R$ {{ parsedValue(user.plan_value) }}</td>
            <td class="mrr-table-td">
              {{ user.start_date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped lang="sass"></style>

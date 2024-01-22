<script setup lang="ts">
const file = ref<File | null>(null);

type MRRType = {
  active_subscribers: number;
  annual_subcriptions: number;
  monthly_subscriptions: number;
  monthly_billing: number;
  annual_billing: number;
  total_mrr: number;
};

type ChurnRateType = {
  inactive_subscribers: number;
  annual_subscriptions_canceled: number;
  monthly_subscriptions_canceled: number;
  monthly_billing_canceled: number;
  annual_billing_canceled: number;
  total_churn_rate: number;
};

type APIDataResult = {
  mrr: MRRType;
  churn_rate: ChurnRateType;
};

const data = ref<APIDataResult | null>(null);

const onChangeFile = (event: Event) => {
  const [_file] = (event.target as HTMLInputElement).files as FileList;
  file.value = _file;
};

const sendFile = async () => {
  try {
    if (!file.value) return;
    const body = new FormData();

    body.append("file", file.value, file.value.name);

    const response = await $fetch<APIDataResult | null>(
      "http://127.0.0.1:8000/upload-file",
      {
        method: "POST",
        body,
      }
    );

    if (!response) throw new Error("Error during the process");
    data.value = response;
  } catch (error) {
    console.log("Error");
  }
};

const examplesCards = [
  {
    isMonetary: true,
    countValue: 89900,
    description: "MRR this mount",
  },
  {
    isMonetary: false,
    countValue: 4581,
    description: "MRR today",
  },
  {
    isMonetary: true,
    countValue: 89900,
    description: "MRR yesterday",
  },
];

const lastColumnExample = [
  {
    isMonetary: true,
    countValue: 984600,
    description: "Total MRR",
  },
  {
    isMonetary: false,
    countValue: 4581,
    description: "Paying customers",
  },
  {
    isMonetary: false,
    countValue: 89900,
    description: "Mensal plan customers",
  },
  {
    isMonetary: true,
    countValue: 89900,
    description: "Annual plan customers",
  },
  {
    isMonetary: false,
    countValue: 89900,
    description: "Total users",
  },
];
</script>

<template>
  <main
    class="w-[100vw] min-h-screen overflow-y-auto overflow-x-hidden bg-secondary flex flex-col-reverse md:flex-col p-2 gap-2"
  >
    <header class="h-20 border bg-secondary"></header>

    <section
      class="dashboard-section w-full h-full flex flex-col lg:overflow-hidden lg:flex-row gap-2"
    >
      <div class="column-quarter flex flex-col h-full w-full gap-2">
        <div class="row gap-2 flex flex-col md:flex-row">
          <div
            class="col-monthly flex flex-row overflow-x-auto w-full md:flex-col md:w-1/3 gap-2 h-fit"
          >
            <Card v-for="(item, index) in examplesCards">
              <ValueDescription
                :count-value="item.countValue"
                :description="item.description"
                :is-monetary="item.isMonetary"
              />
            </Card>
          </div>
          <div class="mrr-graph flex w-full h-[316px]">
            <ClientOnly>
              <ChartComponent height="316" />
            </ClientOnly>
          </div>
        </div>

        <div class="row flex-1 flex flex-col md:flex-row gap-2 h-[400px]">
          <MRRChangesTable />

          <div class="mrr-graph flex w-full md:w-1/2 h-[400px]">
            <ClientOnly>
              <ChartComponent height="400px" />
            </ClientOnly>
          </div>
        </div>
      </div>

      <div
        class="column-total w-full gap-4 lg:w-1/5 h-fit rounded-[8px] bg-[#272953] p-2 flex flex-wrap justify-between lg:gap-4 lg:flex-col"
      >
        <div
          v-for="indicator in lastColumnExample"
          :key="indicator.description"
        >
          <ValueDescription
            :count-value="indicator.countValue"
            :description="indicator.description"
            :is-monetary="indicator.isMonetary"
          />
        </div>
      </div>
    </section>
  </main>
</template>

const skillsOptions: any[] = [];

for (let i = 0; i < 5; i++) {
  skillsOptions.push({
    className:
      "bg-[rgba(236,_242,_255,_1)] rounded-[28px] flex items-center text-[18px]",
    label: `المهارة ${i}`,
    value: `skill ${i}`,
  });
}
const servicesOptions: any[] = [];

for (let i = 0; i < 5; i++) {
  let nestedServices = [];
  for (let ii = 0; ii < 5; ii++) {
    nestedServices.push({
      label: `الخدمة ${ii}`,
      value: `service ${Math.random()}`,
      key: `${Math.random()}`,
    });
  }
  servicesOptions.push({
    label: `الخدمة ${i}`,
    value: `service ${i}`,
    children: nestedServices,
  });
}
export { skillsOptions, servicesOptions };

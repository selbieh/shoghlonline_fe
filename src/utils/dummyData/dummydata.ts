const skillsOptions = [{}];

for (let i = 10; i < 36; i++) {
  skillsOptions.push({
    className:
      "bg-[rgba(236,_242,_255,_1)] rounded-[28px] flex items-center text-[18px]",
    label: `المهارة ${i}`,
    value: `skill ${i}`,
  });
}
export { skillsOptions };

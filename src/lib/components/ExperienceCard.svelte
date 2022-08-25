<script>
    export let experience
</script>
<div class="flex w-full items-start justify-start">
    <div class="w-12 h-12 mr-4 ">
      <img src={experience.company.logo} class="w-12 mr-4" alt="" />
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between">
        <div class="font-bold">{experience.role}</div>

        <div class="text-gray-600 text-sm">{experience.date.start} - {experience.date.end}</div>
      </div>
      <div class="flex items-center justify-between">
        <div class="font-ligher">{experience.company.name} {experience.isFulltime? '. Full-time' : ''}</div>
        <div class="text-gray-600 text-xs">{experience.company.location.city}, {experience.company.location.country} {experience.isRemote ? "(Remote)" : ""}</div>
      </div>

      <p class="font-light pt-2">
        {experience.description}
      </p>
    </div>
  </div>
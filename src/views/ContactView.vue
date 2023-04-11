<template>
  <div className="h-[23rem] max-w-3xl mx-auto p-4 mt-10">
    {{ $t('contact.title') }}
    <div className="mt-4"><strong>E-mail</strong>: berdavoglio@gmail.com</div>
    <div className="mt-4"><strong>Telefone</strong>: +55 (41) 9 8477-6477</div>
    <div className="mt-4"><strong>GitHub</strong>: https://github.com/BerDavoglio</div>
    <div className="mt-4"><strong>LinkedIn</strong>: https://www.linkedin.com/in/bernardo-davoglio-487649214/</div>
    <div className="mt-4">{{ $t('contact.subtitle') }}</div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
};
</script>

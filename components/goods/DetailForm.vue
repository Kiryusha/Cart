<template lang="html">
  <form
    ref="form"
    class="detail-form"
    @submit.prevent="handleSubmit"
  >
    <div class="row">
      <AppInput
        name="name"
        type="text"
        required
        :value="name"
        @input="e => name = e.target.value"
      />
    </div>
    <div class="row">
      <AppInput
        name="price"
        type="number"
        required
        :value="price"
        @input="e => price = e.target.value"
      />
    </div>
    <div class="row">
      <AppInput
        name="date"
        type="date"
        required
        :value="date"
        @change="e => date = e.target.value"
      />
    </div>
    <div class="row">
      <AppButton
        @click="cancel"
      >
        Отменить
      </AppButton>
      <AppButton
        type="submit"
      >
        Сохранить
      </AppButton>
    </div>
  </form>
</template>

<script>
export default {
  name: 'DetailForm',

  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      name: '',
      price: '',
      date: ''
    }
  },

  mounted () {
    this.setDefaults()
  },

  methods: {
    setDefaults () {
      this.name = this.info.name
      this.price = this.info.price
      // Обычно я использую какой-нибудь дейтпикер, который принимает объект даты, но так как
      // использование библиотек нежелательно, но товары должны быть редактируему по ТЗ, то
      // попробуем использовать тип date в инпуте. В IE он будет обычным инпутом
      this.date = new Date(this.info.date)
        .toISOString()
        .substr(0, 10)
    },

    cancel () {
      this.setDefaults()
      this.$emit('cancel')
    },

    handleSubmit () {
      if (this.name && this.price && this.date) {
        this.$emit('submit', {
          id: this.info.id,
          name: this.name,
          price: parseInt(this.price),
          date: new Date(this.date).getTime()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 2px solid $gray;
}

.row + .row {
  margin-top: 12px;
}
</style>

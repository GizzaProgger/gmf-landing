<template>
  <section class="index-join-club">
    <p class="index-join-club__heading">
      Хотите узнать больше об <span class="index-join-club__heading-accent">Muslim Global Finance ?</span>
    </p>
    <p class="index-join-club__subheading">
      Присоединяйтесь к эксклюзивному <br> закрытому клубу Muslim Global Finance
    </p>

    <div class="index-join-club__content">
      <div class="index-join-club__form-card">
        <p class="index-join-club__form-title">Регистрация</p>
        <p class="index-join-club__form-subtitle">на подписку <span class="index-join-club__form-subtitle-accent">Muslim Global Finance</span></p>
        <form class="index-join-club__form" @submit.prevent>
          <label
            v-for="field in formFields"
            :key="field.name"
            class="index-join-club__field"
          >
            <input
              v-model="form[field.name as keyof typeof form]"
              :type="field.type"
              :placeholder="field.placeholder"
              class="index-join-club__input"
              autocomplete="off"
            />
          </label>
          <GmButton type="submit" variant="primary" class="index-join-club__submit">
            Стать членом клуба
          </GmButton>
        </form>
      </div>

      <div class="index-join-club__info">
        <p class="index-join-club__info-text">
          <span class="index-join-club__info-text-accent">Muslim Global Finance </span>
          предлагает уникальную возможность <br> стать членом нашего закрытого клуба. В рамках клуба мы <br>
          предоставляем эксклюзивный доступ к премиальным <br> возможностям и ресурсам.
        </p>
        <div class="index-join-club__info-image">
          <NuxtPicture
            src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80"
            alt=""
            loading="lazy"
            class="index-join-club__picture"
          />
        </div>
        <p class="index-join-club__info-text">
          Каждый понедельник будем отправлять дайджесть <br> ближайщих мероприятии , новости , события , предложения, <br>вакансии MGF и наших членов и партнеров
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GmButton from '~/components/UI/GmButton.vue'

const formFields = [
  { name: 'name', placeholder: 'Имя', type: 'text' as const },
  { name: 'phone', placeholder: 'Телефон', type: 'tel' as const },
  { name: 'email', placeholder: 'Email', type: 'email' as const }
]

const form = reactive({
  name: '',
  phone: '',
  email: ''
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

$gold-gradient: linear-gradient(38deg, #cc8a11 -0.96%, #f9d161 50.37%, #dea530 96.56%);

.index-join-club {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.index-join-club__heading {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 36px;

  @include below($bp-tablet) {
    font-size: 28px;
  }

  @include below($bp-mobile) {
    font-size: 24px;
  }
  font-style: normal;
  font-weight: 500;
  line-height: 123.5%;
  margin: 0;

  &-accent {
    background: $gold-gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
}

.index-join-club__subheading {
  color: #fff;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  margin: 0 0 2rem;
}

.index-join-club__content {
  display: grid;
  grid-template-columns: minmax(280px, 454px) minmax(280px, 690px);
  gap: 60px;

  @include below($bp-tablet) {
    gap: 2rem;
  }
  width: 100%;
  max-width: 1200px;
  align-items: stretch;
  justify-content: center;

  @include below($bp-desktop) {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }
}

.index-join-club__form-card {
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 11px 31px 0 rgba(0, 0, 0, 0.27);
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 454px;
  box-sizing: border-box;
}

.index-join-club__form-title {
  color: #000;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 126.5%;
  margin: 0 0 0.25rem;
}

.index-join-club__form-subtitle {
  color: #000;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 126.5%;
  margin: 0 0 1.5rem;

  &-accent {
    font-weight: 700;
    white-space: nowrap;
  }
}

.index-join-club__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 406px;
}

.index-join-club__field {
  display: block;
  width: 100%;
}

.index-join-club__input {
  display: flex;
  width: 100%;
  min-height: 60px;
  padding: 20px 24px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #eaeaea;
  background: #fff;
  font-family: Sora, var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 126.5%;
  color: #101015;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(16, 16, 21, 0.5);
  }

  &:focus {
    border-color: #cc8a11;
  }
}

.index-join-club__submit {
  width: 100%;
  max-width: 406px;
  padding: 24px;
  border-radius: 57px;
  background: $gold-gradient;
  margin-top: 0.25rem;

  :deep(.gm-button__text) {
    color: #000000 !important;
  }

  :deep(.gm-button__icon) {
    background: transparent !important;
    color: #fff !important;
  }
}

.index-join-club__info {
  border-radius: 24px;
  border: 2px solid #cc8a11;
  background: var(--secondary-background);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 690px;
  box-sizing: border-box;
}

.index-join-club__info-text {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 0;

  &-accent {
    font-weight: 700;
  }
}

.index-join-club__info-image {
  border-radius: 11px;
  overflow: hidden;
  background: #d9d9d9;
  width: min(190px, 100%);
  aspect-ratio: 190 / 151;
  flex-shrink: 0;
  align-self: center;

  @include below($bp-tablet) {
    width: 100%;
    max-width: 280px;
  }
}

.index-join-club__picture {
  display: block;
  width: 100%;
  height: 100%;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.index-join-club__info-text:last-child {
  color: #fff;
  text-align: center;
  font-weight: 700;
  line-height: 160%;
}
</style>

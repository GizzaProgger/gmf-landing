<template>
  <section class="index-contact">
    <p class="index-contact__title">Связаться с нами</p>

    <div class="index-contact__columns">
      <div class="index-contact__left">
        <p class="index-contact__lead">
          Если у вас возникли вопросы<br />
          или <span class="index-contact__lead-accent">вы хотите обсудить возможности сотрудничества</span>
        </p>
        <p class="index-contact__desc">
          Свяжитесь с нами с помощью формы <br>или по указанным контактным данным ниже.
        </p>

        <div
          v-for="contact in contacts"
          :key="contact.type"
          class="index-contact__contact-row"
        >
          <component :is="contact.icon" class="index-contact__contact-icon" />
          <span class="index-contact__contact-text">{{ contact.text }}</span>
        </div>

        <div class="index-contact__socials">
          <a href="#" class="index-contact__social" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" class="index-contact__social" aria-label="Telegram">
            <TelegramIcon />
          </a>
          <a href="#" class="index-contact__social" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
        </div>
      </div>

      <div class="index-contact__form-wrap">
        <form class="index-contact__form" @submit.prevent>
          <p class="index-contact__form-title">Остался вопрос? Задай его тут!</p>
          <label
            v-for="field in formFields"
            :key="field.name"
            class="index-contact__field"
          >
            <input
              v-if="field.type !== 'textarea'"
              v-model="form[field.name as keyof typeof form]"
              :type="field.type"
              :placeholder="field.placeholder"
              class="index-contact__input"
            />
            <textarea
              v-else
              v-model="form[field.name as keyof typeof form]"
              :placeholder="field.placeholder"
              class="index-contact__textarea"
              rows="4"
            />
          </label>
          <button type="submit" class="index-contact__submit">
            Отправить
          </button>
        </form>
      </div>
    </div>

    <div class="index-contact__buttons">
      <NuxtLink
        v-for="btn in bottomButtons"
        :key="btn.text"
        :to="btn.to"
        class="index-contact__btn"
        :class="{ 'index-contact__btn--primary': btn.primary }"
      >
        <span class="index-contact__btn-text">{{ btn.text }}</span>
        <ArrowBlackIcon v-if="btn.primary" class="index-contact__btn-icon" />
        <ArrowCircleIcon v-else class="index-contact__btn-icon" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import ArrowBlackIcon from '~/components/Icons/ArrowBlackIcon.vue'
import ArrowCircleIcon from '~/components/Icons/ArrowCircleIcon.vue'
import EmailIcon from '~/components/Icons/EmailIcon.vue'
import InstagramIcon from '~/components/Icons/InstagramIcon.vue'
import PhoneIcon from '~/components/Icons/PhoneIcon.vue'
import TelegramIcon from '~/components/Icons/TelegramIcon.vue'
import WhatsAppIcon from '~/components/Icons/WhatsAppIcon.vue'

const contacts = [
  { type: 'phone', icon: PhoneIcon, text: '+7 911 944 08 30' },
  { type: 'email', icon: EmailIcon, text: 'musglobfin@mail.com' }
]

const formFields = [
  { name: 'name', placeholder: 'Имя', type: 'text' as const },
  { name: 'phone', placeholder: 'Телефон', type: 'tel' as const },
  { name: 'email', placeholder: 'Email', type: 'email' as const },
  { name: 'question', placeholder: 'Ваш вопрос', type: 'textarea' as const }
]

const form = reactive({
  name: '',
  phone: '',
  email: '',
  question: ''
})

const bottomButtons = [
  { text: 'Присоедениться', to: '#join', primary: true, width: 215 },
  { text: 'Стать партнером', to: '#partner', primary: false, width: 220 },
  { text: 'Подать проект', to: '#project', primary: false, width: 195 },
  { text: 'Получить консультацию', to: '#consult', primary: false, width: 284 }
]
</script>

<style lang="scss" scoped>
@use '~/assets/scss/vars' as *;
@use '~/assets/scss/mixins' as *;

$gold-gradient: linear-gradient(38deg, #cc8a11 -0.96%, #f9d161 50.37%, #dea530 96.56%);

.index-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.index-contact__title {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 36px;
  font-weight: 700;
  line-height: 123.5%;
  margin: 0 0 74px;
  text-align: center;

  @include below($bp-tablet) {
    font-size: 28px;
    margin-bottom: 2rem;
  }

  @include below($bp-mobile) {
    font-size: 24px;
  }
}

.index-contact__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  margin-bottom: 64px;

  @include below($bp-desktop) {
    grid-template-columns: 1fr;
  }

  @include below($bp-mobile) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
}

.index-contact__left {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.index-contact__lead {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 30px;
  font-weight: 500;

  @include below($bp-tablet) {
    font-size: 24px;
  }

  @include below($bp-mobile) {
    font-size: 20px;
  }
  line-height: 123.5%;
  margin: 0 0 8px;

  &-accent {
    background: $gold-gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.index-contact__desc {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 24px;
  font-weight: 400;
  line-height: 160%;
  margin: 0 0 40px;

  @include below($bp-mobile) {
    font-size: 18px;
    margin-bottom: 1.5rem;
  }
}

.index-contact__contact-row {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 26px;

  @include below($bp-mobile) {
    gap: 1rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}

.index-contact__contact-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;

  @include below($bp-mobile) {
    width: 48px;
    height: 48px;
  }
}

.index-contact__contact-text {
  color: #fff;
  font-family: Sora, var(--font-family);
  font-size: 24px;

  @include below($bp-mobile) {
    font-size: 18px;
  }
  font-weight: 400;
  line-height: 25.5px;
  font-feature-settings: 'liga' off, 'clig' off;
}


.index-contact__socials {
  display: flex;
  gap: 28px;
  margin-top: 52px;

  @include below($bp-mobile) {
    gap: 1rem;
    margin-top: 2rem;
  }
}

.index-contact__social {
  display: block;
  width: 64px;
  height: 64px;

  @include below($bp-mobile) {
    width: 48px;
    height: 48px;
  }

  :deep(svg) {
    width: 64px;
    height: 64px;
    display: block;

    @include below($bp-mobile) {
      width: 48px;
      height: 48px;
    }
  }
}

.index-contact__form-wrap {
  display: flex;
  justify-content: flex-end;

  @include below($bp-desktop) {
    justify-content: center;
  }
}

.index-contact__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 487px;
  max-width: 100%;
  padding: 32px 40px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  margin-top: -36px;

  @include below($bp-mobile) {
    padding: 24px 20px;
    margin-top: 0;
  }
}

.index-contact__form-title {
  color: #000;
  text-align: center;
  font-family: Sora, var(--font-family);
  font-size: 26px;
  font-weight: 400;
  line-height: 126.5%;
  margin: 0 0 10px;

  @include below($bp-mobile) {
    font-size: 22px;
  }
}

.index-contact__field {
  display: block;
  width: 100%;
  max-width: 406px;
}

.index-contact__input,
.index-contact__textarea {
  width: 100%;
  min-height: 60px;
  padding: 20px 24px;
  font-family: Sora, var(--font-family);
  font-size: 16px;
  font-weight: 400;
  line-height: 126.5%;
  color: #101015;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(16, 16, 21, 0.5);
  }

  &:focus {
    border-color: #cc8a11;
  }
}

.index-contact__textarea {
  font-family: Sora, var(--font-family);
  font-size: 16px;
  font-weight: 400;
  line-height: 126.5%;
  color: #101015;

  &::placeholder {
    color: rgba(16, 16, 21, 0.5);
  }

 
  resize: none;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
}

.index-contact__submit {
  display: flex;
  width: 100%;
  max-width: 406px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  font-family: Sora, var(--font-family);
  font-size: 18px;
  font-weight: 550;
  line-height: 101.5%;
  color: #101015;
  background: $gold-gradient;
  border: none;
  border-radius: 57px;
  box-shadow: 0 0 22px 0 #eac869;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 28px rgba(232, 196, 99, 0.4);
  }
}

.index-contact__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;

  @include below($bp-mobile) {
    flex-direction: column;
    gap: 0.75rem;

    .index-contact__btn {
      width: 100%;
      flex: none;
    }
  }
}

.index-contact__btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 16px 16px 32px;
  min-width: 0;
  flex: 1 1 0;
  border-radius: 57px;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  box-sizing: border-box;

  &--primary {
    flex: 215 215 0;
    color: #101015;
    font-family: Sora, var(--font-family);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 101.5%;
    background: $gold-gradient;
    border: none;
    box-shadow: 0 0 8px 0 rgba(232, 196, 99, 0.35);
  }

  &:not(.index-contact__btn--primary) {
    flex: 220 220 0;
    color: #fff;
    font-family: Sora, var(--font-family);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 101.5%;
    background: var(--secondary-background);
    border: 1px solid #cc8a11;
    box-shadow: 0 0 8px 0 rgba(232, 196, 99, 0.25);
  }

  &:nth-child(1) {
    flex: 215 215 0;
  }

  &:nth-child(2) {
    flex: 220 220 0;
  }

  &:nth-child(3) {
    flex: 195 195 0;
  }

  &:nth-child(4) {
    flex: 284 284 0;
  }

  &:hover {
    transform: translateY(-1px);
  }
}

.index-contact__btn-text {
  flex-shrink: 0;
}

.index-contact__btn-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}
</style>

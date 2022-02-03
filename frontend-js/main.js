import search from './modules/search'
import Chat from './modules/chat'
import ReistrationForm from './modules/registrationForm'
import RegistrationForm from './modules/registrationForm'

if (document.querySelector("#registration-form")) {
  new RegistrationForm()
}

if (document.querySelector("#chat-wrapper")) {
    new Chat()
}
if (document.querySelector(".header-search-icon")) {new search()}
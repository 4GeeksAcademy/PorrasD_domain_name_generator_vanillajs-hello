/* eslint-disable */
import "bootstrap";
import "./style.css";

function currentDomain() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  let all_domains = [];

  for (let current_pronoun of pronouns) {
    for (let current_adj of adjs) {
      for (let current_noun of nouns) {
        for (let current_extension of extensions) {
          let new_domain = `${current_pronoun}${current_adj}${current_noun}${current_extension}`;
          all_domains.push(new_domain);
        }
      }
    }
  }

  let indice = Math.floor(Math.random() * all_domains.length);
  return all_domains[indice];
}

window.onload = function() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#showedDomain").textContent = currentDomain();
  });
};

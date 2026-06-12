const pages = [
  {
    title: "about",
    url: "index.html",
    terms: "about intro site purpose herbivore handbook"
  },
  {
    title: "veganism 101",
    url: "veganism-101.html",
    terms: "veganism 101 basics case ethics health affordability efficacy faq animals"
  },
  {
    title: "the case for veganism",
    url: "case-for-veganism.html",
    terms: "case for veganism animal suffering sentience exploitation argument"
  },
  {
    title: "ethics",
    url: "ethics.html",
    terms: "ethics animals sentience suffering speciesism moral worth exploitation"
  },
  {
    title: "health",
    url: "health.html",
    terms: "health nutrition b12 protein iron calcium vitamin diet vegan food"
  },
  {
    title: "affordability",
    url: "affordability.html",
    terms: "affordable cheap budget beans lentils rice tofu vegan"
  },
  {
    title: "efficacy",
    url: "efficacy.html",
    terms: "efficacy impact individual choice movement difference boycott"
  },
  {
    title: "faq",
    url: "faq.html",
    terms: "faq questions anti vegan arguments expensive privilege capitalism"
  },
  {
    title: "intersectionality",
    url: "intersectionality.html",
    terms: "intersectionality justice leftism feminism coloniality labor class race"
  },
  {
    title: "leftism",
    url: "leftism.html",
    terms: "leftism anti capitalism class labor production animal liberation"
  },
  {
    title: "feminism",
    url: "feminism.html",
    terms: "feminism reproduction bodies objectification care animal agriculture"
  },
  {
    title: "coloniality",
    url: "coloniality.html",
    terms: "coloniality colonialism land food systems culture"
  },
  {
    title: "blog",
    url: "blog.html",
    terms: "blog personal commentary updates reflections posts"
  },
  {
    title: "recipes",
    url: "recipes.html",
    terms: "recipes food meals pantry staples tofu beans lentils"
  },
  {
    title: "links",
    url: "links.html",
    terms: "links sources reading library texts"
  },
  {
    title: "foundational texts",
    url: "foundational-texts.html",
    terms: "foundational texts books singer regan joy adams animal liberation"
  },
  {
    title: "recommended reads",
    url: "recommended-reads.html",
    terms: "recommended reads articles essays sources left praxis veganhealth"
  }
];

const dialog = document.createElement("dialog");
dialog.className = "search-dialog";
dialog.innerHTML = `
  <form class="search-panel" role="search" data-search-form method="dialog">
    <div class="post-header">
      <h2>search this site</h2>
      <button class="search-close" type="button" aria-label="Close search">x</button>
    </div>
    <label for="site-search">type a topic or page name</label>
    <div class="search-row">
      <input id="site-search" name="q" type="search" list="search-pages" placeholder="try: ethics, recipes, leftism">
      <button type="submit">go</button>
    </div>
    <p class="search-hint">matches: about, veganism 101, ethics, health, intersectionality, blog, recipes, links</p>
    <datalist id="search-pages"></datalist>
  </form>
`;
document.body.append(dialog);

const input = dialog.querySelector("input[type='search']");
const datalist = dialog.querySelector("#search-pages");
const closeButton = dialog.querySelector(".search-close");

for (const page of pages) {
  const option = document.createElement("option");
  option.value = page.title;
  datalist.append(option);
}

function openSearch() {
  if (!dialog.open) {
    dialog.showModal();
  }
  input.value = "";
  input.placeholder = "try: ethics, recipes, leftism";
  requestAnimationFrame(() => input.focus());
}

function findPage(query) {
  return pages.find((page) => {
    const haystack = `${page.title} ${page.terms}`.toLowerCase();
    return haystack.includes(query) || query.includes(page.title.toLowerCase());
  });
}

for (const button of document.querySelectorAll("[data-search-open]")) {
  button.addEventListener("click", openSearch);
}

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.querySelector("[data-search-form]").addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim().toLowerCase();
  if (!query) {
    input.focus();
    return;
  }

  const result = findPage(query);
  if (result) {
    window.location.href = result.url;
    return;
  }

  input.value = "";
  input.placeholder = "no match - try: ethics, recipes, leftism";
  input.focus();
});

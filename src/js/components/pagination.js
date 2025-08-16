export class HandlePaginationClass {
  #hasPrevPage;
  #hasNextPage;
  #totalPages;
  #page;
  #paginationRef;
  #paginationListRef;
  #apiGetItems;
  #createItemsList;
  #ItemsListRef;
  #btnPrev;
  #btnNext;
  #perPage;
  nextListener;
  prevListener;
  itemListener;
  sessionStorage;

  constructor ({
    hasPrevPage,
    hasNextPage,
    totalPages,
    page,
    paginationRef,
    sessionStorage,
    ItemsListRef,
    apiGetItems,
    createItemsList,
    perPage
  }) {
    this.#hasPrevPage = hasPrevPage;
    this.#hasNextPage = hasNextPage;
    this.#totalPages = totalPages;
    this.#paginationRef = paginationRef;
    this.#ItemsListRef = ItemsListRef;
    this.sessionStorage = sessionStorage;
    this.#apiGetItems = apiGetItems;
    this.#createItemsList = createItemsList;
    this.#perPage = perPage;
    this.#page = page;

    this.#paginationListRef = paginationRef.querySelector('ul');
    this.#btnPrev = this.#paginationRef.querySelector('button[prev-btn]');
    this.#btnNext = this.#paginationRef.querySelector('button[next-btn]');

    this.itemListener = this.contextFunc(this.itemListenerFunc);
    this.nextListener = this.contextFunc(this.nextListenerFunc);
    this.prevListener = this.contextFunc(this.prevListenerFunc);
  }

  contextFunc = func => {
    return async (...args) => {
      await func.call(this, ...args);
    };
  };

  handlePagination (sessionStorage) {
    this.#paginationRef.classList.remove('displaynone');

    if (!this.#hasPrevPage) {
      this.#btnPrev.setAttribute('disabled', true);
    } else {
      this.#btnPrev.addEventListener('click', this.prevListener);
      this.#btnPrev.removeAttribute('disabled');
    }
    if (!this.#hasNextPage) {
      this.#btnNext.setAttribute('disabled', true);
    } else {
      this.#btnNext.addEventListener('click', this.nextListener);
      this.#btnNext.removeAttribute('disabled');
    }

    const pageListCount = this.#totalPages < 5 ? this.#totalPages : 5;

    const pageList = [];
    let counter = 0;

    if (this.#page === 2) {
      counter = -1;
    } else if (this.#page > 2) {
      counter = -2;
    }

    if (pageListCount === 5) {
      if (this.#totalPages === this.#page) {
        counter = -4;
      } else if (this.#totalPages - this.#page === 1) {
        counter = -3;
      }
    }

    for (let i = 0; i < pageListCount; i++) {
      const pageNum = this.#page + counter + i;

      const li = document.createElement('li');
      li.classList.add('pagination-list-item');

      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('data-page', pageNum);
      button.innerText = pageNum;

      if (pageNum === this.#page) {
        button.classList.add('pagination-activ-button');
        button.setAttribute('disabled', true);
      }

      li.appendChild(button);
      pageList.push(li);
    }

    this.#paginationListRef.replaceChildren(...pageList);
    this.#paginationListRef.addEventListener('click', this.itemListener);
  }

  async itemListenerFunc (e) {
    if (e.target.nodeName === 'BUTTON') {
      let data = [];

      this.#page = Number(e.target.getAttribute('data-page'));
      this.#perPage = this.sessionStorage.propertyValue.perPage;

      this.sessionStorage.propertyValue.page = this.#page;
      this.sessionStorage.setItem();

      const skills = await this.#apiGetItems(this.#perPage, this.#page);
      data = [...skills.data];
      this.#hasNextPage = skills.hasNextPage;
      this.#hasPrevPage = skills.hasPrevPage;

      this.#ItemsListRef.replaceChildren(
        ...(await this.#createItemsList(data))
      );

      this.#btnNext.removeEventListener('click', this.nextListener);
      this.#btnPrev.removeEventListener('click', this.prevListener);
      this.#paginationListRef.removeEventListener('click', this.itemListener);
      this.handlePagination();
    }
  }

  async nextListenerFunc () {
    let data = [];

    this.#page = Number(this.sessionStorage.propertyValue.page) + 1;
    this.#perPage = this.sessionStorage.propertyValue.perPage;

    this.sessionStorage.propertyValue.page = this.#page;
    this.sessionStorage.setItem();

    const skills = await this.#apiGetItems(this.#perPage, this.#page);
    data = [...skills.data];
    this.#hasNextPage = skills.hasNextPage;
    this.#hasPrevPage = skills.hasPrevPage;

    this.#ItemsListRef.replaceChildren(...(await this.#createItemsList(data)));

    this.#btnPrev.removeEventListener('click', this.prevListener);
    this.#paginationListRef.removeEventListener('click', this.itemListener);
    this.#btnNext.removeEventListener('click', this.nextListener);
    this.handlePagination();
  }

  async prevListenerFunc (e) {
    let data = [];

    this.#page = Number(this.sessionStorage.propertyValue.page) - 1;
    this.#perPage = this.sessionStorage.propertyValue.perPage;

    this.sessionStorage.propertyValue.page = this.#page;
    this.sessionStorage.setItem();

    const skills = await this.#apiGetItems(this.#perPage, this.#page);
    data = [...skills.data];
    this.#hasNextPage = skills.hasNextPage;
    this.#hasPrevPage = skills.hasPrevPage;

    this.#ItemsListRef.replaceChildren(...(await this.#createItemsList(data)));

    this.#paginationListRef.removeEventListener('click', this.itemListener);
    this.#btnNext.removeEventListener('click', this.nextListener);
    this.#btnPrev.removeEventListener('click', this.prevListener);
    this.handlePagination();
  }
}

(
    function () {
      const Tabs = {
        init() {
          this.cacheDom();
          this.enableJavaScript();
          this.setupTabs();
        },
        cacheDom() {
          this.tabLinks = Array.from(document.querySelectorAll('.tablinks'));
          this.tabContent = Array.from(document.querySelectorAll('.tabcontent'));
          this.HtmlElement = window.document.documentElement;
        },
        enableJavaScript() {
          this.HtmlElement.classList.add('js-enabled');
        },
        setupTabs() {
          for (const link of this.tabLinks) {
            link.addEventListener('click', el => {
              this.openTabs(el);
            });
          }
        },
        openTabs(el) {
          const btnTarget = el.currentTarget;
          const { country } = btnTarget.dataset;
          // eslint-disable-next-line array-callback-return
          this.tabLinks.map(link => {
            link.classList.remove('active');
          });
          // eslint-disable-next-line array-callback-return
          this.tabContent.map(tab => {
            tab.classList.remove('active');
          });
          document.querySelector(`#${country}`).classList.add('active');
          btnTarget.classList.add('active');
        },
      };
      Tabs.init();
    }
)();
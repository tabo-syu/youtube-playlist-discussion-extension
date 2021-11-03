import { debounce } from '../util/debounce';

type Route = {
  path: string;
  callback: (param: URLSearchParams) => void;
};

export class Router {
  private routes: Route[] = [];

  constructor() {
    const observer = new MutationObserver(
      debounce(() => {
        this.routes.forEach((route) => {
          if (route.path === location.pathname) {
            route.callback(new URLSearchParams(location.search));
          }
        });
      })
    );

    const target = document.getElementById('page-manager');
    if (target === null) {
      throw new Error('#page-manager does not Found');
    }

    observer.observe(target, {
      subtree: true,
      childList: true,
    });
  }

  route(path: Route['path'], callback: Route['callback']) {
    this.routes.push({
      path,
      callback,
    });

    return this;
  }
}

import { loaderRef } from '../config/references';

export function loadLoader () {
  console.log(loaderRef);

  loaderRef.classList.add('close');
}

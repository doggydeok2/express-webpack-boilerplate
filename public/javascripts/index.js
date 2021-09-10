import 'normalize.css';
import "core-js";
import styles from '../stylesheets/styles.module.scss';
import myImg from '../images/profile.jpg'

function component () {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Webpack';

  const imgElement = document.createElement('img');
  imgElement.src = myImg;
  imgElement.classList = styles.myImg;
  
  element.appendChild(imgElement);
  element.classList = styles.helloWebpack;

  return element;
}

document.body.appendChild(component());
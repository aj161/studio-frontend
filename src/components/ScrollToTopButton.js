import { MDBIcon } from 'mdb-react-ui-kit';
import style from './styles/ScrollToTopButton.css'


function ScrollToTopButton() {
  return (
    <div id="scrollToTopButtonWrap">
        <a href="#" id="scrollToTopButton"><MDBIcon fas icon="chevron-up" /></a>
    </div>
  );
}

export default ScrollToTopButton;